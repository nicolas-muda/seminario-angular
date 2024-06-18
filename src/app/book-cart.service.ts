import { Injectable } from '@angular/core';
import { book } from './book-list/book';
import { BehaviorSubject } from 'rxjs';
import { BookListComponent } from './book-list/book-list.component';

//maneja la logica del carrito
@Injectable({
  providedIn: 'root'
})
export class BookCartService {
  private bookListComponent: BookListComponent | null = null;
  private _cartList: book[] = [];
  cartList: BehaviorSubject<book[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  setBookListComponent(component: BookListComponent) {
    this.bookListComponent = component;
  }

  addToCart(book: book) {
    let item: book | undefined = this._cartList.find((v1) => v1.name == book.name);
    if (!item) {
      this._cartList.push({ ...book });
    } else {
      item.quantity += book.quantity;
    }
    this.cartList.next(this._cartList); // para emitir que hubo un cambio
  }

  removeBook(book: book) {
    const index = this._cartList.findIndex(b => b.name === book.name);
    if (index !== -1) {
      this._cartList.splice(index, 1);
      if (this.bookListComponent) {
        this.bookListComponent.returnStock(book.name, book.quantity);
      } else {
        console.error('BookListComponent is not set in BookCartService');
      }
      this.cartList.next(this._cartList); // emitir el cambio
    }
  }
}