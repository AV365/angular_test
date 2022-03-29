import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `<app-button button="button">11111111111 {{button.size | json}} </app-button>`,
  styles: [],
})
export class DropdownComponent implements OnInit, OnChanges {
  @Input() button: any;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
  }
}
