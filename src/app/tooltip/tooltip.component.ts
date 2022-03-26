import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
      <div class="tooltip"><ng-content></ng-content></div>
  `,
  styles: [
    `
      .tooltip {
          /*position: absolute;*/
          left: 56.53%;
          right: 27.01%;
          top: 68.36%;
          bottom: 25.39%;

          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          /* or 133% */


          /* Gray 90 */

          color: #3C4043;

      }
    `
  ]
})
export class TooltipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
