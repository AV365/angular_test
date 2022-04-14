import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ButtonModule } from '../button/button.module';
import { RatingModule } from '../rating/rating.module';
import { BageModule } from '../bage/bage.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, ButtonModule, RatingModule, BageModule, RouterModule],
  exports: [CardComponent]
})
export class CardModule {}
