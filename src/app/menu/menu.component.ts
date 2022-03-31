import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
      <ng-content></ng-content>
  `,
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
