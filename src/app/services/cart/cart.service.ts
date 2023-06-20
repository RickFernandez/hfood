import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject: Subject<void> = new Subject<void>();

  constructor(private _cart: Cart) { }


  addToCart(food: Food, totalQuantity: number): void {
    console.log("totalQuantity " + totalQuantity);
    
    let cartItem = this._cart.items.find(item => {
      return item.food.id === food.id;
    });
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + totalQuantity);
      return;
    }
    this._cart.items.push(new CartItem(food, totalQuantity));
    this.cartSubject.next();
  }

  changeQuantity(foodId: number, quantity: number): void {
    console.log(foodId, quantity);
    
    let cartItem = this._cart.items.find(item => {
      return item.food.id === foodId;
    });
    if (!cartItem) return;
    cartItem.quantity = quantity;
    this.cartSubject.next();
  }

  removeFromCart(foodId: number): void {
    this._cart.items = this._cart.items.filter(item => {
      return item.food.id != foodId
    });
    this.cartSubject.next();
  }

  getCart(): Cart {
    return this._cart;
  }

  getTotalItems(): number {
    let totalItems = 0;
    this._cart.items.forEach(item => {
      totalItems += item.quantity;
    });
    return totalItems;
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this._cart.items.forEach(item => {
      totalPrice += item.price;
    });
    return totalPrice;
  }

  getCartSubject(): Subject<void> {
    return this.cartSubject;
  }
}
