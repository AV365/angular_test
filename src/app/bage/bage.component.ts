import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bage',
  template: `
    <div class="bage">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .bage {
        /* Bage */

        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 6px 8px;

        /*position: absolute;*/
        width: 116px;
        height: 32px;
        /*left: 256px;*/
        /*top: 272px;*/

        background: #ff3366;
        border-radius: 4px;
      }
    `,
  ],
})
export class BageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
