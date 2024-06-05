import { Component } from '@angular/core';
import { book } from './book';
import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  books: book[] = [];

  constructor(private cart: BookCartService, private BookDataService: BookDataService) {
  }

  ngOnInit(): void {
    this.BookDataService.getAll()
      .subscribe(books => this.books = books);
  }

  addToCart(book: book): void {
    //if para controlar que la cerveza que se agrege al carrito su cantidad(quantity)no sea 0
    if (book.quantity !== 0) {
      this.cart.addToCart(book);
      book.stock -= book.quantity;
      book.quantity = 0;
    }
  }


  static returnQuantity(name: string, quantity: number) {
    /*
     const index = this.books.findIndex(b => b.name == name);
     if (index !== -1) {
       console.log("encontrado");
       this.books[index].quantity += quantity;
     }
     */
  }

  maxReached(m: string): void {
    alert(m);
  }
}
