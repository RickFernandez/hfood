import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods!: Food[];
  filterBy: string = '';

  constructor(private _foodService$: FoodService, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe(param => {
      if (param['searchTerm']) {
        this.foods = this._foodService$.getAllFoodBySearchTerm(param['searchTerm']);
      }
      else if(param['tagTerm']) {
        this.foods = this._foodService$.getAllFoodBytag(param['tagTerm']);
      }
      else {
        this.foods = this._foodService$.getAll();
      }
    });
  }

  ngOnChanges() {
    console.log(this.filterBy);
  }

  applyFilter(filter: string): void {
    this.filterBy = filter;

    switch (filter) {
      case 'all':
        this.foods = this._foodService$.getAll();
        break;
      case 'favorite':
        this.foods = this._foodService$.getFoodByFavorite();
        break;
      case 'priceDsc':
        this.foods = this._foodService$.orderByPriceDescending();
        break;
      case 'priceAsc':
        this.foods = this._foodService$.orderByPriceAscending();
        break;
      case 'rateDsc':
        this.foods = this._foodService$.orderByRateDescending();
        break;
      case 'rateAsc':
        this.foods = this._foodService$.orderByRateAscending();
        break;
      case '5':
        this.foods = this._foodService$.getFoodByMinRating(5);
        break;
      case '4':
        this.foods = this._foodService$.getFoodByMinRating(4);
        break;
      case '3':
        this.foods = this._foodService$.getFoodByMinRating(3);
        break;
      case '2':
        this.foods = this._foodService$.getFoodByMinRating(2);
        break;
      case '1':
        this.foods = this._foodService$.getFoodByMinRating(1);
        break;
      default:
        this.foods = this._foodService$.getAll();
        break;
    }
  }
}
