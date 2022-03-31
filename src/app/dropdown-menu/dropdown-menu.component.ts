import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  template: `
    <app-button
      (mouseover)="trigger === 'hover' && !isOpen ? menuShow($event) : null"
      (mouseleave)="trigger === 'hover' && isOpen ? menuShow($event) : null"
      (click)="trigger !== 'hover' ? menuShow($event) : null"
      >DropdownMenu Button</app-button
    >
    <app-menu [style.visibility]="isOpen ? 'visible' : 'hidden'">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </app-menu>
    Trigger {{ trigger | json }}<br />
    isOpen {{ isOpen | json }}
  `,
  styles: [],
})
export class DropdownMenuComponent implements OnInit, OnChanges {
  @Input() trigger = 'click';
  isOpen = false;
  constructor() {}

  menuShow(e: any) {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {}
  ngOnChanges(): void {}
}
