import { NgModule } from '@angular/core';
import { DEFAULT_CURRENCY_CODE,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { RatingModule } from './rating/rating.module';
import { BageModule } from './bage/bage.module';
import { IconModule } from './icon/icon.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { CardModule } from './card/card.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { IconTooltipModule } from './icon-tooltip/icon-tooltip.module';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { DropdownMenuModule } from './dropdown-menu/dropdown-menu.module';
import { MenuModule } from './menu/menu.module';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogModule } from './catalog/catalog.module';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";





@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    DropdownModule,
    IconTooltipModule,
    ButtonModule,
    DropdownMenuModule,
    MenuModule,
    CatalogModule

  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'RUB'}],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule {}
