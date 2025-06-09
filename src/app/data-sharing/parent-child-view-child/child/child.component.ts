import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
})
export class ChildComponent {
  childProperty = 'This is a child property';
  childProperty2 = 'This is a second child property';
}
