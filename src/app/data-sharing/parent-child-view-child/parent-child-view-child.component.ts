import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-parent-child-view-child',
  imports: [ParentComponent],
  templateUrl: './parent-child-view-child.component.html',
})
export class ParentChildViewChildComponent {}
