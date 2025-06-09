import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-parent-child',
  imports: [ParentComponent],
  templateUrl: './parent-child.component.html',
})
export class ParentChildComponent {}
