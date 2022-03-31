
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { RatingModule } from './rating/rating.module';
import { BageModule } from './bage/bage.module';
import { IconModule } from './icon/icon.module';
import { TooltipModule } from './tooltip/tooltip.module';
import {CardModule} from "./card/card.module";
import {DropdownModule} from "./dropdown/dropdown.module";
import {IconTooltipModule} from "./icon-tooltip/icon-tooltip.module";
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import {DropdownMenuModule} from "./dropdown-menu/dropdown-menu.module";
import {MenuModule} from "./menu/menu.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardModule, DropdownModule, IconTooltipModule, ButtonModule, DropdownMenuModule, MenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
