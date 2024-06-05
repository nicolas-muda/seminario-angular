import { Component } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { book } from '../book-list/book';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-mdp-cart',
  templateUrl: './mdp-cart.component.html',
  styleUrl: './mdp-cart.component.scss'
})
export class MdpCartComponent {
  cartList$: Observable<book[]>;
  totalPrice: number = 0;

  constructor(private cart: BookCartService) {
    this.cartList$ = cart.cartList.asObservable();
    this.cartList$.subscribe(cartList => {
      this.totalPrice = this.calculateTotalPrice(cartList);
    });
  }

  removeBook(book: book) {
    this.cart.removeBook(book);
  }

  private calculateTotalPrice(cartList: book[]): number {
    return cartList.reduce((total, book) => total + (book.price * book.quantity), 0);
  }
}
