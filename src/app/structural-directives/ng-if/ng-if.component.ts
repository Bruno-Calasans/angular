import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css',
})
export class NgIfComponent {
  checked = false;
  showInput = false;
  password = '';
  passwordConfirmation = '';

  toggleChecked() {
    this.checked = !this.checked;
  }

  setShowInput(value: boolean) {
    this.showInput = value;
  }
}
