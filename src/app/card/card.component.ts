import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <app-bage>card works!</app-bage>
    <app-rating>star</app-rating>
    <app-button>card works!</app-button>
      
    
  `,
  styles: [
  ]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
