import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `<app-button><ng-content></ng-content></app-button>`,
  styles: [],
})
export class DropdownComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
