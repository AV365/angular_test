import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [attr.disabled]="isDisabled ? '' : null"
      class="button"
      [class.button_active_true]="isActive"
      [ngClass]="[currentColorClass, currentSizeClass]"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
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

        border: 1px solid #dddddd;
        box-sizing: border-box;
        border-radius: 10px;
      }
      .button:hover {
        opacity: 0.7;
      }

      /*Цвет*/
      .button_color_default {
        background: #ffffff;
      }
      .button_color_primary {
        background-color: #0099ff;
      }
      .button_color_accent {
        background-color: salmon;
      }
      .button_color_success {
        background-color: green;
      }
      .button_color_warning {
        background-color: red;
      }

      /*Размер*/

      .button_size_default {
        height: 20px;
      }

      .button_size_small {
        height: 40px;
      }
      .button_size_large {
        height: 60px;
      }

      .button_active_false {
      }
      .button_active_true {
        border: 1px solid red;
        opacity: 100;
      }
      .button_active_true:hover {
        opacity: 100;
      }

      .button:disabled,
      .button[disabled] {
        opacity: 0.2;
      }
    `,
  ],
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() isDisabled = false;
  @Input() isActive = false;
  @Input() size = 'default';
  @Input() color = 'default';

  currentColorClass = 'button_color_default';
  currentSizeClass = 'button_size_default';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    //Цвет
    switch (this.color) {
      case 'primary':
        this.currentColorClass = 'button_color_primary';
        break;
      case 'accent':
        this.currentColorClass = 'button_color_accent';
        break;
      case 'success':
        this.currentColorClass = 'button_color_success';
        break;
      case 'warning':
        this.currentColorClass = 'button_color_warning';
        break;
    }

    //Размер
    switch (this.size) {
      case 'large':
        this.currentSizeClass = 'button_size_large';
        break;
      case 'small':
        this.currentSizeClass = 'button_size_small';
        break;
    }
  }
}
