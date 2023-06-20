import { Food } from "./Food";

export class CartItem {
  constructor(food: Food, quantity?: number) {
    this.food = food;
    quantity ? this.quantity = quantity : this.quantity = 1;
  }

  food!: Food;
  quantity: number = 1;

  get price(): number {
    return this.food.price * this.quantity;
  }
}
