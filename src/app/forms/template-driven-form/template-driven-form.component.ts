import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type TestFormInputs = {
  firstName: '';
  email: '';
  age: 0;
  isGay?: boolean;
  type: 'professor' | 'student';
};

@Component({
  selector: 'app-template-driven-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  types: TestFormInputs['type'][] = ['professor', 'student'];
  inputs = this.getDefaultInputs();

  getDefaultInputs(): TestFormInputs {
    return {
      firstName: '',
      email: '',
      age: 0,
      isGay: false,
      type: 'student',
    };
  }

  setDefault(form: NgForm) {
    // Using set value - first way
    // form.setValue(this.getDefaultInputs());

    // Using set value - second way
    // form.control.setValue(this.getDefaultInputs());

    // You must pass the full object or you get an error
    // form.setValue({ firstName: '' });

    // Using form reset - first way
    // form.reset(this.getDefaultInputs());
    form.resetForm(this.getDefaultInputs());

    // Using form reset - second way
    // form.control.reset(this.getDefaultInputs());
  }

  // Use this method if you want set some properties,
  patchValues(form: NgForm) {
    form.control.patchValue({
      firstName: '',
      email: '',
    });
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
