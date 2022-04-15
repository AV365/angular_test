import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ActivatedRoute, Navigation, Router} from '@angular/router';

@Component({
  selector: 'app-toggle',
  template: `
    <div *ngFor="let toggle of toggles" [style.display]="'inline-block'">
      <app-button
        [color]="filter === toggle.value ? 'warning' : 'primary'"
        [isDisabled]="filter === toggle.value ? true : false"
        
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
  @Input() filter: any = 'all'
  @Output() changed = new EventEmitter();
  currentUrl!: string
  constructor(private router: Router, private route: ActivatedRoute) {
    this.currentUrl = this.router.url
  }

  ngOnInit(): void {}

  handleFilterButton(value: string) {
    this.router.navigate(['.'], {relativeTo: this.route, queryParams: {sort: value}})

    this.changed.emit(value);
    this.filter = value;
  }

}
