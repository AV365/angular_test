import { Injectable } from '@angular/core';
import { Product } from '../data/products.data';
import { DataService } from './data.service';

@Injectable()
export class CatalogService {
  products = this.dataService.getData();
  public getProducts(filterBy: string) {
    if (filterBy === 'warehouse') {
      return this.products.filter((p) => p?.count > 0);
    }
    if (filterBy === 'sale') {
      return this.products.filter((p) => p?.sale);
    }
    return this.products;
  }

  public getProduct(id: number): Array<Product> {
    console.log('get product');
    console.log(this.products);
    return this.products.filter((item) => item.id === +id!);
  }
  constructor(private dataService: DataService) {}
}
