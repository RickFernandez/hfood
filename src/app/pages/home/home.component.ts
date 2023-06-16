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
}
