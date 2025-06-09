import { AfterViewInit, Component, ViewChild, viewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
})
export class ParentComponent implements AfterViewInit {
  dataFromChild = '';

  // First way
  child1 = viewChild<ChildComponent>('child');

  // Second way
  @ViewChild('child')
  child2: ChildComponent | undefined;

  ngAfterViewInit(): void {
    if (this.child2)
      this.child2.childProperty = 'Child property 1 was modified by my parent';

    if (this.child1())
      this.child1()!.childProperty2 =
        'Child property 2 was modified by my parent';
  }
}
