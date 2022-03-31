import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { MenuModule } from '../menu/menu.module';
import { DropdownMenuComponent } from './dropdown-menu.component';

@NgModule({
  declarations: [DropdownMenuComponent],
  imports: [CommonModule, ButtonModule, MenuModule],
  exports: [DropdownMenuComponent],
})
export class DropdownMenuModule {}
