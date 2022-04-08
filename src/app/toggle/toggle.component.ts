import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
    <div *ngFor="let toggle of toggles" [style.display]="'inline-block'">
      <app-button
        [color]="'primary'"
        *ngIf="toggle.value"
        (click)="handleFilterButton(toggle.value)"
        >{{ toggle.label }}</app-button
      >
    </div>
  `,
  styles: [],
})
export class ToggleComponent implements OnInit {
  @Input() toggles!: Array<{ value: string; label: string }>;
  @Output() changed = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleFilterButton(value: any) {
    this.changed.emit(value);
  }
}
