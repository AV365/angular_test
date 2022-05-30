import { Injectable } from '@angular/core';
import {Product, IProduct, IItemsProduct} from '../data/products.data';
import { DataService } from './data.service';
import { HttpService } from './http.service';
import { environment } from '../environments/environment';
import {Observable} from "rxjs";

@Injectable()
export class CatalogService {
  products = this.dataService.getData();

  constructor(private dataService: DataService, private http: HttpService) {}

  public getProductsHttp(filterBy: string): Observable<IItemsProduct> {
    const url = `${environment.api}/products`;
    console.log ('URL ' + url)
    return this.http.get<IItemsProduct>(url);

    // предыдущий вариант
    // if (filterBy === 'warehouse') {
    //   return this.products.filter((p) => p?.count > 0);
    // }
    // if (filterBy === 'sale') {
    //   return this.products.filter((p) => p?.sale);
    // }
    // return this.products;
  }

  public getProduct(id: number): Array<Product> {
    console.log('get product');
    console.log(this.products);
    return this.products.filter((item) => item.id === +id!);
  }
}
