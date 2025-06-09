import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
})
export class ParentComponent {
  someMsg = 'This data came from my parent';
  dataFromChild = '';

  onRecieveDataFromChild(data: string) {
    this.dataFromChild = data;
  }
}
