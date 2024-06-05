import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { book } from './book-list/book';

const URL = "https://665f5d9c1e9017dc16f3ecee.mockapi.io/api/v1/book";

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<book[]> {
    return this.http.get<book[]>(URL)
      .pipe(
        tap((books: book[]) => books.forEach(book => book.quantity = 0))
      );
  }
  
}