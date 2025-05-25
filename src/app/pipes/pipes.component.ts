import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom-pipes/custom.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, CustomPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  textPipes = 'Some text';
  numberPipes = 100;
  person = {
    id: 1,
    name: 'james',
    age: 25,
  };
  datePipes = new Date();

  asyncData = of(['Keyboard', 'Monitor']);

  booleanPipes = true;
}
