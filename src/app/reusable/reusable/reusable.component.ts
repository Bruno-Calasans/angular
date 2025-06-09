import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'app-reusable',
  imports: [CommonModule],
  templateUrl: './reusable.component.html',
  styleUrl: './reusable.component.css',
})
export class ReusableComponent {
  @Input({ required: true })
  name = '';

  @Input({ required: false, transform: booleanAttribute })
  showWelcomeMsg = true;

  @Input({ required: false, transform: numberAttribute })
  welcomeMsgsCount = 1;

  @Input({ required: false })
  skills: string[] = [];

  @Input({ required: false })
  user = { name: 'James', age: 10 };

  createRange(count: number) {
    return Array(count);
  }
}
