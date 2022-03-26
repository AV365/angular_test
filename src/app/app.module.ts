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

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardModule, DropdownModule, IconTooltipModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
