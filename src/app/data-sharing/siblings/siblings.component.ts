import { Component } from '@angular/core';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';

@Component({
  selector: 'app-siblings',
  imports: [Sibling1Component, Sibling2Component],
  templateUrl: './siblings.component.html',
})
export class SiblingsComponent {
  dataFromSibling1 = '';
  dataFromSibling2 = '';

  onDataRecieveFromSibling1(data: string) {
    this.dataFromSibling1 = data;
  }

  onDataRecieveFromSibling2(data: string) {
    this.dataFromSibling2 = data;
  }
}
