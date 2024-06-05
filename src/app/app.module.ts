import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { MdpAboutComponent } from './mdp-about/mdp-about.component';
import { MdpCartComponent } from './mdp-cart/mdp-cart.component';
import { MdpBooksComponent } from './mdp-books/mdp-books.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { MdpPremieresComponent } from './mdp-premieres/mdp-premieres.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    MdpAboutComponent,
    MdpCartComponent,
    MdpBooksComponent,
    InputIntegerComponent,
    MdpPremieresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
