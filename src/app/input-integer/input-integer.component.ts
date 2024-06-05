import { Component, EventEmitter, Input, Output } from '@angular/core';
import { book } from '../book-list/book';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  appQuantityDown(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
    else {
      this.maxReached.emit("cantidad no disponible");
    }
  }

  appQuantityUp(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity); //emitir el evento
    }
    else {
      this.maxReached.emit("cantidad no disponible");
    }
  }

  changeQuantity(event: Event): void {
    //agarro el input por el evento
    const input = event.target as HTMLInputElement;
    //le pido el valor al imput
    const value = input.value;

    // Convertir el valor a número
    const numericValue = Number(value);

    //controlo que sea un numero
    if (isNaN(numericValue)) {
    } else {
      //si esta dentro de los valores permitidos lo cambio
      if (numericValue >= 0 && numericValue <= this.max) {
        this.quantity = numericValue;
        this.quantityChange.emit(this.quantity);
      }
      else {
        this.maxReached.emit("cantidad no disponible");
      }
    }
  }
}
