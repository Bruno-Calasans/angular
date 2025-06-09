import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  booleanAttribute,
  numberAttribute,
  input,
  model,
} from '@angular/core';

@Component({
  selector: 'app-reusable',
  imports: [CommonModule],
  templateUrl: './reusable.component.html',
  styleUrl: './reusable.component.css',
})
export class ReusableComponent {
  // @Input({ required: true })
  // name = '';

  // @Input({ required: false, transform: booleanAttribute })
  // showWelcomeMsg = true;

  // @Input({ required: false, transform: numberAttribute })
  // welcomeMsgsCount = 1;

  // @Input({ required: false })
  // skills: string[] = [];

  // @Input({ required: false })
  // user = { name: 'James', age: 10 };

  name = input.required<string>();
  showWelcomeMsg = input(false, { transform: booleanAttribute });
  welcomeMsgsCount = input(1, { transform: numberAttribute });
  skills = input.required<string[]>();
  user = input({ name: 'James', age: 10 });

  createRange(count: number) {
    return Array(count);
  }

  // Define a model input named "value".
  value = model(0);

  increment() {
    this.value.update((oldValue) => oldValue + 1);
  }

  decrease() {
    this.value.update((oldValue) => oldValue - 1);
  }
}
