import { Component, Input, OnInit, Output, OnChanges } from '@angular/core';
import { Product } from '../../data/products.data';

@Component({
  selector: 'app-catalog',
  template: `
    <section class="text-center" xmlns="http://www.w3.org/1999/html">
      <a class="nav-link waves-effect">
        <span class="badge bg-danger ms-2">{{ inCart.length }}</span>
        <i class="fas fa-shopping-cart"></i>
        <span class="clearfix d-none d-sm-inline-block"> Cart </span>
      </a>

      <p>{{ inCart | json }}</p>
    </section>
    <app-toggle
      [toggles]="filterValues"
      (changed)="setFilter($event)"
    ></app-toggle>
    <section class="text-center">
      <h4 class="mb-5"><strong>Каталог</strong></h4>

      <div class="row" *ngIf="filteredProducts">
        <ng-container *ngFor="let product of filteredProducts">
          <div class="col-lg-4 col-md-6 mb-4">
            <app-card
              [product]="product"
              (addCart)="handleAddCart($event)"
            ></app-card>
          </div>
        </ng-container>
          {{filteredProducts | json}}
      </div>

      <!--          <div class="row">-->
      <!--              <div class="col-lg-4 col-md-12 mb-4">-->
      <!--                  <div class="card">-->
      <!--                      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">-->
      <!--                          <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" class="img-fluid" />-->
      <!--                          <a href="#!">-->
      <!--                              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>-->
      <!--                          </a>-->
      <!--                      </div>-->
      <!--                      <div class="card-body">-->
      <!--                          <h5 class="card-title">Post title</h5>-->
      <!--                          <p class="card-text">-->
      <!--                              Some quick example text to build on the card title and make up the bulk of the-->
      <!--                              card's content.-->
      <!--                          </p>-->
      <!--                          <a href="#!" class="btn btn-primary">Read</a>-->
      <!--                      </div>-->
      <!--                  </div>-->
      <!--              </div>-->

      <!--              <div class="col-lg-4 col-md-6 mb-4">-->
      <!--                  <div class="card">-->
      <!--                      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">-->
      <!--                          <img src="https://mdbootstrap.com/img/new/standard/nature/022.jpg" class="img-fluid" />-->
      <!--                          <a href="#!">-->
      <!--                              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>-->
      <!--                          </a>-->
      <!--                      </div>-->
      <!--                      <div class="card-body">-->
      <!--                          <h5 class="card-title">Post title</h5>-->
      <!--                          <p class="card-text">-->
      <!--                              Some quick example text to build on the card title and make up the bulk of the-->
      <!--                              card's content.-->
      <!--                          </p>-->
      <!--                          <a href="#!" class="btn btn-primary">Read</a>-->
      <!--                      </div>-->
      <!--                  </div>-->
      <!--              </div>-->

      <!--              <div class="col-lg-4 col-md-6 mb-4">-->
      <!--                  <div class="card">-->
      <!--                      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">-->
      <!--                          <img src="https://mdbootstrap.com/img/new/standard/nature/035.jpg" class="img-fluid" />-->
      <!--                          <a href="#!">-->
      <!--                              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>-->
      <!--                          </a>-->
      <!--                      </div>-->
      <!--                      <div class="card-body">-->
      <!--                          <h5 class="card-title">Post title</h5>-->
      <!--                          <p class="card-text">-->
      <!--                              Some quick example text to build on the card title and make up the bulk of the-->
      <!--                              card's content.-->
      <!--                          </p>-->
      <!--                          <a href="#!" class="btn btn-primary">Read</a>-->
      <!--                      </div>-->
      <!--                  </div>-->
      <!--              </div>-->
      <!--          </div>-->
    </section>
  `,
  styles: [],
})
export class CatalogComponent implements OnInit {
  @Input() products!: Product[];
  filteredProducts: Product[] = [];

  inCart: Array<{ count: number; product: Product }> = [];
  filter: any = 'all';

  filterValues = [
    { value: 'all', label: 'Показать все' },
    { value: 'warehouse', label: 'В наличии' },
    { value: 'sale', label: 'Со скидкой' },
  ];

  constructor() {}

  handleAddCart(event: any) {
    //Есть ли такое в корзине
    const isInCart = this.inCart.filter((item) => {
      return item.product.id === event.id;
    });

    //Этот товар есть в корзине
    if (isInCart.length) {
      this.inCart = this.inCart.map((item) => {
        if (item.product.id === event.id) {
          item.count = +item.count + 1;
        }
        return item;
      });
    } else {
      this.inCart.push({
        count: 1,
        product: event,
      });
    }
  }

  setFilter(event: any) {
    this.filter = event;
    console.log('filter ' + this.filter);
    if (this.filter !== 'all') {
      if (this.filter === 'warehouse') {
        this.filteredProducts = this.products.filter((item: Product) => {
          return item.count > 0;
        });
      }
      if (this.filter === 'sale') {
        this.filteredProducts = this.products.filter((item: Product) => {
          return item.sale;
        });
      }
    } else {
      this.filteredProducts = [...this.products];
    }

    console.log(this.filteredProducts);
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.setFilter(this.filter);
  }
}
