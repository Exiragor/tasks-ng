import { Component } from '@angular/core';
import { IProduct, product } from '../mocks/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  private chosenProduct: IProduct|null = null;
  private product: IProduct|null = product;

  public getProduct(): IProduct|null {
    return this.product;
  }

  public getChosenProduct(): IProduct|undefined {
    return this.chosenProduct || undefined;
  }

  public addProduct(p: IProduct) {
    this.chosenProduct = p;
  }
}
