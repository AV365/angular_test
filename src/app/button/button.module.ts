import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import {AppModule} from "../app.module";



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
