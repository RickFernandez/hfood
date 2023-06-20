import { Component, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  cart!: Cart;

  constructor(private _cartService$: CartService) {
    this.setCart();
  }

  setCart() {
    this.cart = this._cartService$.getCart();
  }

  removeFromCart(cartItem: CartItem): void {
    this._cartService$.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string): void {
    const quantity = parseInt(quantityInString);
    this._cartService$.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
