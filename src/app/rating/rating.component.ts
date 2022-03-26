import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <div class="rating">
      <span class="material-icons"><ng-content></ng-content></span>
    </div>
  `,
  styles: [`
    .rating {
        /*position: static;*/
        /*width: 20px;*/
        /*height: 20px;*/
        /*left: 48px;*/
        /*top: 0px;*/


        /* Inside auto layout */

        flex: none;
        order: 2;
        flex-grow: 0;
        margin: 0px 4px;
    }
  `
  ]
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
