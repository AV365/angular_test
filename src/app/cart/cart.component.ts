import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from '../../data/products.data';

@Component({
  selector: 'app-cart',
  template: `
    <section
      class="text-center"
      xmlns="http://www.w3.org/1999/html"
      *ngIf="inCart.length"
    >
      <a
        class="nav-link waves-effect"
        (click)="toggleCartPreview()"
        style="cursor: pointer"
      >
        <span class="badge bg-danger ms-2">{{ inCart.length }}</span>
        <i class="fas fa-shopping-cart"></i>
        <span class="clearfix d-none d-sm-inline-block"> Cart </span>
      </a>

      <!--      <p>{{ inCart | json }}</p>-->
      <app-button
        (click)="toggleCartPreview()"
        *ngIf="inCart.length > 0"
        [color]="'primary'"
      >
        <ng-container
          *ngIf="cartIsOpen; then hide_cart; else show_cart"
        ></ng-container>
        <ng-template #show_cart>Посмотреть корзину</ng-template>

        <ng-template #hide_cart>Закрыть корзину</ng-template>
      </app-button>
      <ng-container *ngIf="cartIsOpen">
        <h2>Это корзина</h2>
        <section>
          <ng-container *ngIf="inCart.length > 0">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th scope="row">№</th>
                  <td>Продукт</td>
                  <td>Количество</td>
                  <td>Стоимость</td>
                  <td>Общая стоимость</td>
                    <td></td>
                </tr>
                <tr *ngFor="let item of inCart; let i = index">
                  <th scope="row">{{ i + 1 }}</th>
                  <td>{{ item.product.productName }}</td>
                  <td>{{ item.count }}</td>
                  <td>
                    <ng-container
                      *ngIf="
                        item?.product?.sale;
                        then withsale_content;
                        else withoutsale_content
                      "
                    ></ng-container>
                    <ng-template #withsale_content
                      >{{ item?.product?.sale | currency }}
                      <sup
                        ><s>{{ item?.product?.price }}</s></sup
                      ></ng-template
                    >
                    <ng-template #withoutsale_content>{{
                      item.product.price | currency
                    }}</ng-template>
                  </td>
                  <td>
                    <ng-container
                      *ngIf="
                        item?.product?.sale;
                        then withsale_amount_content;
                        else withoutsale_amount_content
                      "
                    ></ng-container>
                    <ng-template #withsale_amount_content
                      >{{
                        item?.product?.sale! * item?.count!
                          | number: '1.0-2'
                          | currency
                      }}
                      <sup
                        ><s>{{
                          item.product.price * item.count | number: '1.0-2'
                        }}</s></sup
                      ></ng-template
                    >
                    <ng-template #withoutsale_amount_content>{{
                      item?.product?.price! * item?.count!
                        | number: '1.0-2'
                        | currency
                    }}</ng-template>
                  </td>
                    <td>        <a (click)="deleteProductId.emit(item.product.id)" class="fas fa-trash" style="cursor: pointer"></a></td>
                </tr>
              </tbody>
            </table>
            <p>Всего товаров {{calcCartValues('count')}} на сумму {{calcCartValues('price') | number: '1.0-2' | currency}}, Скидка {{calcCartValues('discount') | number: '1.0-2' | currency}}</p>
              <app-button [color]="'primary'" (click)="deleteProductsAll.emit(true)">Оформить заказ</app-button>
              <app-button [color]="'warning'" (click)="deleteProductsAll.emit(true)">Очистить корзину</app-button>
          </ng-container>
        </section></ng-container
      >
    </section>
  `,
  styles: [],
})
export class CartComponent implements OnInit {
  @Input('products') inCart: Array<{ count: number; product: Product }> = [];
  @Output() deleteProductId = new EventEmitter();
  @Output() deleteProductsAll = new EventEmitter();
  cartIsOpen: boolean = false;
  // inCartValues: object = {count: 0, price: 0, discount: 0}
  inCartCount: number = 0;
  constructor() {

  }

  ngOnInit(): void {}

  toggleCartPreview() {
    this.cartIsOpen = !this.cartIsOpen;
  }


  calcCartValues(param: string) {
    this.inCartCount = 0;
    let count = 0;
    let price = 0;
    let discount = 0;
    for (let i = 0; i < this.inCart.length; i++) {
      //количество count
      count = count + this.inCart[i].count;
      //общая стоимость price
      this.inCart[i].product?.sale ? price = price + (this.inCart[i].product?.sale!*this.inCart[i].count) : price = price+ (this.inCart[i]?.product?.price*this.inCart[i].count);

      //общая скидка discount
      this.inCart[i].product?.sale ? discount = discount + (this.inCart[i].product.price!*this.inCart[i].count) - (this.inCart[i].product?.sale!*this.inCart[i].count) : 0;
    }

    switch (param) {
      case 'count': {
        return count
        break
      }
      case 'price': {
        return price
        break
      }
      case 'discount': {
        return discount
        break
      }
      default: {
        return ''
      }


    }

  }

  ngOnChanges() {

  }
}
