import { Component, Input, OnInit } from '@angular/core';
import products from '../data/products.data';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //products = products;
  title = 'SkillBox Angular';
  button = {
    size: 'large',
    color: 'primary',
    isDisabled: false,
    isActive: false,
  };

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.setData(products);
  }
}
