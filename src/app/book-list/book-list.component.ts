import { Component } from '@angular/core';
import { book } from './book';
import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  books: book[] = [];

  constructor(private cart: BookCartService, private BookDataService: BookDataService) { }

  ngOnInit(): void {
    this.BookDataService.getAll().subscribe(books => this.books = books);
    this.cart.setBookListComponent(this); // Establecer la instancia del componente en el servicio
  }

  addToCart(book: book): void {
    if (book.quantity !== 0) {
      this.cart.addToCart(book);
      book.stock -= book.quantity;
      book.quantity = 0;
    }
  }

  returnStock(name: string, stock: number): void {
    console.log("entro");
    const index = this.books.findIndex(b => b.name === name);
    if (index !== -1) {
      this.books[index].stock += stock;
    }
  }

  maxReached(m: string): void {
    alert(m);
  }
}