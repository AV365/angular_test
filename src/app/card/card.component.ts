import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouterModule, Router} from "@angular/router";

@Component({
  selector: 'app-card',
  template: `
      <div class="card">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" class="img-fluid" />
              <a [routerLink]="['/catalog', product.id]">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </a>
          </div>
          <div class="card-body">
              <h5 class="card-title">{{product.productName}} <sup [style.opacity]="0.5">{{product.productCode}}</sup></h5>
              <p class="card-text">{{product.description}}</p>

              <p><span class="badge bg-info">{{product.category}}</span></p>
              <p>Стоимость: <ng-container *ngIf="product.sale; then withsale_content else withoutsale_content"></ng-container></p>
              <ng-template #withsale_content>{{product.sale | currency}} <sup><s>{{product.price}}</s></sup></ng-template>
              <ng-template #withoutsale_content>{{product.price | currency}}</ng-template>
              <p>Наличие: {{product.count > 0 && product.count+' шт.' || 'отсутствует на складе'}}</p>
              <app-button (click)="handleAddCart(product)" [color]="'primary'">В корзину</app-button>
<!--              <a (onClick)="handleAddCart()" href="#!" class="btn btn-primary">Read</a>-->
          </div>
      </div>
  `,
  styles: [],
})
export class CardComponent implements OnInit {
@Input() product: any
  @Output() addCart = new EventEmitter()
  constructor() {}

  ngOnInit(): void {}
  handleAddCart(product: any) {

    this.addCart.emit(product)
  }
}
