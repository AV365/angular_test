import { Component, Input, OnInit, Output, OnChanges } from '@angular/core';
import { Product } from '../../data/products.data';
import { products } from '../../data/products.data';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-catalog',
  template: `
    <app-cart (deleteProductsAll)="handleCartDelete($event)"></app-cart>
    <app-toggle [toggles]="filterValues"></app-toggle>
    {{ this.filter }}
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
  products: Product[] = this.dataService.getData();
  //@Input() products: Product[] = products;

  // public get getProducts(): Product[] {
  //   if (this.filter === 'warehouse') {
  //     return products.filter((p) => p?.count > 0);
  //   }
  //   if (this.filter === 'sale') {
  //     return products.filter((p) => p?.sale);
  //   }
  //   return products;
  // }

  filteredProducts: Product[] = [];

  @Output() inCart: Array<{ count: number; product: Product }> = [];
  filter: string = 'none';

  filterValues = [
    { value: 'none', label: 'Показать все' },
    { value: 'warehouse', label: 'В наличии' },
    { value: 'sale', label: 'Со скидкой' },
  ];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private catalogService: CatalogService
  ) {
    route.queryParams.subscribe((params) => {
      //console.log(params['sort']);
      this.filter = params['filter'] || 'all';
      this.setFilter(this.filter);
    });
    //this.filter = this.route.snapshot.queryParams['sort'] || 'all';
  }

  handleAddCart(event: Product) {
    //Есть ли такое в корзине
    const isInCart = this.inCart.filter((item) => {
      return item.product.id === event.id;
    });

    //Этот товар есть в корзине
    if (isInCart.length) {
      this.inCart = this.inCart.map((item) => {
        if (item.product.id === event.id) {
          item.count += 1;
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

  handleCartDelete(event: boolean) {
    if (event) {
      this.inCart = [];
    }
  }

  handleCardProductDeleteId(id: number) {
    // if (id) {
    //   this.inCart = this.inCart.filter((item) => {
    //     return item.product.id !== id;
    //   });
    // }
  }

  setFilter(event: string) {
    //this.filter = this.route.snapshot.queryParams['sort'];
    //this.filteredProducts = this.getProducts;
    this.filteredProducts = this.catalogService.getProducts(this.filter);
    console.log('sort ' + this.filter);
  }

  ngOnInit(): void {
    console.log(products);
  }

  ngOnChanges(): void {}
}
