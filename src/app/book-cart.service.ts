import { Injectable } from '@angular/core';
import { book } from './book-list/book';
import { BehaviorSubject } from 'rxjs';
import { BookListComponent } from './book-list/book-list.component';

//maneja la logica del carrito
@Injectable({
  providedIn: 'root'
})
export class BookCartService {
  constructor() { }

  private _cartList: book[] = [];
  cartList: BehaviorSubject<book[]> = new BehaviorSubject(this._cartList);

  addToCart(book: book) {
    //busca en el carrito si el libro fue agregado
    let item: book | undefined = this._cartList.find((v1) => v1.name == book.name);
    if (!item) {
      this._cartList.push({ ...book });
    } else {
      item.quantity += book.quantity;
    }
    this.cartList.next(this._cartList);
  }

  removeBook(book: book) {
    //busco el indice del libro en el arreglo
    const index = this._cartList.findIndex(b => b.name === book.name);
    if (index !== -1) {
      //lo saco
      this._cartList.splice(index, 1);
      //devuelvo la cantidad al libro original
      BookListComponent.returnQuantity(book.name, book.quantity);
      this.cartList.next(this._cartList); //emito el cambio
    }
  }
  
}
