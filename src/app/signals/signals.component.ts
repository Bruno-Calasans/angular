import { Component, signal, effect, computed } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  counter = signal(0);
  isNegative = computed(() => this.counter() < 0);

  constructor() {
    effect(
      () => {
        console.log('Counter is changing to ' + this.counter());
      },
      { debugName: 'counter-effect' }
    );
  }

  incrementCounter() {
    this.counter.update((curr) => curr + 1);
  }

  decreaseCounter() {
    this.counter.update((curr) => curr - 1);
  }
}
