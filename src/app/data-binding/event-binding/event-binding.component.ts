import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  showMsg() {
    alert('Hello');
  }

  showColor() {
    alert('You selected a color');
  }
}
