import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <div class="icon">
      <span class="material-icons"><ng-content></ng-content></span>
    </div>
  `,
  styles: [
    `
      .icon {
        /*position: absolute;*/
        display: flex;
        align-items: center;
        justify-content: center;

        width: 36px;
        height: 36px;
        left: 740px;
        top: 714px;

        color: #fff;
        background: #000000;
        border-radius: 50%;
      }
    `,
  ],
})
export class IconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
