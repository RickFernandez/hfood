import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { Observable, Subscription, of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  cart!: Cart;
  cartTotalItems = 0;
  cartTotalPrice = 0;
  private cartSubscription!: Subscription;

  constructor(private _cartService$: CartService, private _modalService$: NgbModal) {}

  ngOnInit(): void {
    this.cart = this._cartService$.getCart();
    this.updateCartTotals();
    this.cartSubscription = this._cartService$.getCartSubject().subscribe(() => {
      this.updateCartTotals();
    });
  }

  updateCartTotals(): void {
    this.cartTotalItems = this._cartService$.getTotalItems();
    this.cartTotalPrice = this._cartService$.getTotalPrice();
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  openLg(content: any) {
		this._modalService$.open(content, { centered: true, size: 'lg' });
    // box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	}
}
