import {Component, Input} from '@angular/core';
import products from "../data/products.data";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  products = products;
  title = 'SkillBox Angular';
  button = {
    size: 'large',
    color: 'primary',
    isDisabled: false,
    isActive: false,
  };
}
