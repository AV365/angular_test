import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {ButtonModule} from "../button/button.module";
import {CardModule} from "../card/card.module";
import {ToggleComponent} from "../toggle/toggle.component";
import {CartComponent} from "../cart/cart.component";
import { ProductComponent } from './product.component';
import {CatalogRoutingModule} from "./catalog-routing.module";


@NgModule({
  declarations: [CatalogComponent, ToggleComponent, CartComponent, ProductComponent],
  imports: [CommonModule, ButtonModule, CardModule, CatalogRoutingModule],
  exports: [CatalogComponent]
})
export class CatalogModule {}
