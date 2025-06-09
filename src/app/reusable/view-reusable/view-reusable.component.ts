import { Component } from '@angular/core';
import { ReusableComponent } from '../reusable/reusable.component';

@Component({
  selector: 'app-view-reusable',
  imports: [ReusableComponent],
  templateUrl: './view-reusable.component.html',
  styleUrl: './view-reusable.component.css',
})
export class ViewReusableComponent {}
