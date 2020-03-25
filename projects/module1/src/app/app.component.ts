import { Component } from '@angular/core';
import { IProduct, product } from '../mocks/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  private _productInCart: IProduct|null = null;

  public getProduct(): IProduct {
    return product;
  }

  public getProductInCart(): IProduct|undefined {
    return this._productInCart || undefined;
  }

  public setProductInCart(p: IProduct) {
    this._productInCart = p;
  }
}
