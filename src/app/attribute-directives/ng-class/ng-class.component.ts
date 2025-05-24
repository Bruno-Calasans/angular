import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css',
})
export class NgClassComponent {
  userClass = '';
  classes: string[] = [];
  isSuccess = false;

  addClass(name: string) {
    this.classes.push(name);
  }
  removeClass(name: string) {
    this.classes = this.classes.filter((classname) => classname != name);
  }

  toggleSuccess() {
    this.isSuccess = !this.isSuccess;
  }
}
