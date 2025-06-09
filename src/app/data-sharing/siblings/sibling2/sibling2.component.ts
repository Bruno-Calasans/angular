import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  imports: [],
  templateUrl: './sibling2.component.html',
})
export class Sibling2Component {
  outputData = output<string>();
  dataFromSibling1 = input<string>('')
}
