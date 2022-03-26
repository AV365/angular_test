import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-tooltip',
  template: `
<app-icon>home</app-icon>
<app-tooltip><ng-content></ng-content></app-tooltip>    
  `,
  styles: [
  ]
})
export class IconTooltipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
