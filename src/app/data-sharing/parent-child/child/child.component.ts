import {
  Component,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
})
export class ChildComponent {

  // Parent -> Child
  // first way (recommended)
  inputData1 = input('');

  // second way
  @Input({ required: false })
  inputData2 = '';

  // Child -> Parent
  // First way
  outputData1 = output<string>();

  // Second way
  @Output()
  outputData2 = new EventEmitter<string>();
}
