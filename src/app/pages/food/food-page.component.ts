import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {

  food!: Food;
  totalItems: number = 1;
  totalPrice!: number;

  constructor(private _activateRoute: ActivatedRoute, private _foodService$: FoodService, private _cartService$: CartService, private _router: Router) {
    _activateRoute.params.subscribe((param) => {
      if (param['id']) {
        this.food = _foodService$.getFoodById(param['id']);
      }
    });
  }
  
  ngOnInit(): void {
    this.getTotalPrice(this.totalItems, this.food.price);
  }

  onAddItem(): void {
    this.totalItems = this.totalItems + 1;
    this.getTotalPrice(this.totalItems, this.food.price);
  }

  onRemoveItem(): void {
    this.totalItems != 1 ? this.totalItems = this.totalItems - 1 : this.totalItems = 1;
    this.getTotalPrice(this.totalItems, this.food.price);
  }

  getTotalPrice(quantity: number, price: number): number {
    return this.totalPrice = quantity * price;
  }

  addToCart(): void {
    this._cartService$.addToCart(this.food);
    this._router.navigateByUrl('/cart');
  }
}
