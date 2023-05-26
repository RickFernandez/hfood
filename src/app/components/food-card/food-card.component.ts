import { Component } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { IFood } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  [x: string]: any;
  foods!: IFood[];

  constructor(private _foodService$: FoodService) {}

  ngOnInit(): void {
    this.foods = this._foodService$.getAll();
  }

}
