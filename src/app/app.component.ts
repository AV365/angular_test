import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SkillBox Angular';
  button = {
    size: 'large',
    color: 'primary',
    isActive: true,
    isDisabled: false,
  };
}
