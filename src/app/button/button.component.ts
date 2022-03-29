import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [attr.disabled]="isDisabled ? '' : null" class="button">
      {{ isDisabled | json }}
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

      /*Цвет*/
      .button_color_default {
        background: #ffffff;
      }
      .button_color_primary {
        background-color: #0099ff;
      }
      .button_color_accent {
        background-color: black;
      }
      .button_color_success {
        background-color: green;
      }
      .button_color_warning {
        background-color: red;
      }

      /*Размер*/

      .button_size_small {
        height: 40px;
      }
      .button_size_large {
        height: 60px;
      }

      .button_active_false {
        opacity: 0.2;
      }
      .button_active_true {
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

  getColorClass = (val: string): string => {
    let valReturn = 'button_color_default';
    switch (val) {
      case 'primary':
        valReturn = 'button_color_primary';
    }
    return valReturn;
  };

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
