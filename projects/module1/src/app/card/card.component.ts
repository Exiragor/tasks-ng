import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../mocks/products';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input()
  public product: IProduct|null = null;

  @Output()
  public addToCart = new EventEmitter();

  public addProduct(): void {
    this.addToCart.emit(this.product);
  }
}
