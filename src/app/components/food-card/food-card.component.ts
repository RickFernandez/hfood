import { Component, Input } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  @Input() foods!: Food[];

  // constructor(private _foodService$: FoodService) {}

  // ngOnInit(): void {
  //   this.foods = this._foodService$.getAll();
  // }

  

}
