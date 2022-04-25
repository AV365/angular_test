import { Injectable } from '@angular/core';
import products, { Product } from '../data/products.data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data!: Array<Product>;

  setData(inData: Array<Product>) {
    this.data = inData;
    //console.log('set data')
  }

  getData(): Array<Product> {
    return this.data
  }
  constructor() {}
}
