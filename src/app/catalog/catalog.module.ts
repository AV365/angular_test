import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {ButtonModule} from "../button/button.module";
import {CardModule} from "../card/card.module";
import {ToggleComponent} from "../toggle/toggle.component";
import {CartComponent} from "../cart/cart.component";


@NgModule({
  declarations: [CatalogComponent, ToggleComponent, CartComponent],
  imports: [CommonModule, ButtonModule, CardModule],
  exports: [CatalogComponent]
})
export class CatalogModule {}
