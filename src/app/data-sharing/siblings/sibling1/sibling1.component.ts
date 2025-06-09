import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  imports: [],
  templateUrl: './sibling1.component.html',
})
export class Sibling1Component {
  outputData = output<string>();
  dataFromSibling2 = input<string>('');
}
