import { Component, OnInit, Input } from '@angular/core';
import products, { Product } from '../../data/products.data';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-product',
  template: `
    <section>
      <h1>{{ productId }}</h1>
      <p>{{ product | json }}</p>
    </section>
  `,
  styles: [],
})
export class ProductComponent implements OnInit {
  public productId: string;
  product!: Product[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catalogService: CatalogService
  ) {
    this.productId = this.route.snapshot.params['id'];
    //this.product = products.filter((item) => item.id === +this?.productId!);
    this.product = this.catalogService.getProduct(+this.productId);
    if (!this.product.length) {
      this.router.navigate(['./404']);
    }
  }

  ngOnInit(): void {}
}
