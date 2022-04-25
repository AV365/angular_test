import { Injectable, Input } from '@angular/core';
import { Product } from '../data/products.data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  inCart: Array<{ count: number; product: Product }> = [];
  public addProduct(product: Product) {
    //Есть ли такое в корзине
    const isInCart = this.inCart.filter((item) => {
      return item.product.id === product.id;
    });

    //Этот товар есть в корзине
    if (isInCart.length) {
      this.inCart = this.inCart.map((item) => {
        if (item.product.id === product.id) {
          item.count += 1;
        }
        return item;
      });
    } else {
      this.inCart.push({
        count: 1,
        product: product,
      });
    }
  }
  public removeProduct(id: number) {
    if (id) {
      this.inCart = this.inCart.filter((item) => {
        return item.product.id !== id;
      });
    }
  }
  public getCart() {
    return this.inCart;
  }
  public getCount() {
    return this.inCart.length || 0;
  }
  constructor() {}
}
