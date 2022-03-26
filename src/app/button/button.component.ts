import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="button">
        <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .button {
        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 20px;

        /*position: absolute;*/
        /*width: 198px;*/
        /*height: 40px;*/
        /*left: 256px;*/
        /*top: 720px;*/

        background: #FFFFFF;
        border: 1px solid #DDDDDD;
        box-sizing: border-box;
        border-radius: 10px;
}`
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
