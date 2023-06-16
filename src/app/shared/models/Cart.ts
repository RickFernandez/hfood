import { Injectable } from "@angular/core";
import { CartItem } from "./CartItem";

@Injectable({
  providedIn: 'root'
})
export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach(item => {
      totalPrice += item.price;
    });

    return totalPrice;
  }
}
