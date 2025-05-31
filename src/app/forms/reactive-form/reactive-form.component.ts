import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  Validator,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

const nameRegex = /^[a-zA-Z]{3,}$/;
const zipCodeRegex = /^[0-9]$/;
const phraseRegex = /^[a-zA-Z0-9 ]{1,}$/;

export function namePatternValidator(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regex.test(control.value);
    return forbidden ? { pattern: { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})

export class ReactiveFormComponent {
  types = ['student', 'professor'];
  reactiveForm: FormGroup;
  defaultInputs = {
    firstName: '',
    email: '',
    age: 0,
    type: this.types[0],
    isGay: false,
    address: {
      city: '',
      street: '',
      zipcode: '',
    },
    skills: [],
  };

  constructor(private fb: FormBuilder) {
    // Create the form controls
    // this.reactiveForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   email: new FormControl(''),
    //   age: new FormControl(0),
    //   type: new FormControl(this.types[0]),
    //   isGay: new FormControl(false),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     street: new FormControl(''),
    //     zipcode: new FormControl(''),
    //   }),
    // });

    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(nameRegex)]],
      email: ['', [Validators.required, Validators.email]],
      age: [0, [Validators.required, Validators.min(1), Validators.max(100)]],
      type: [this.types[0], [Validators.required]],
      isGay: [false],
      address: this.fb.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        zipcode: ['', [Validators.required, Validators.pattern(zipCodeRegex)]],
      }),
      skills: this.fb.array<string>(
        [],
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(phraseRegex),
        ]
      ),
    });
  }

  get skills() {
    return this.reactiveForm.get('skills') as FormArray;
  }

  get address() {
    return this.reactiveForm.get('address') as FormGroup;
  }

  addEmptySkill() {
    this.skills.push(this.fb.control(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  resetForm() {
    // First way to reset all fields
    // this.reactiveForm.setValue(this.defaultInputs);

    // Second way to reset all fields
    this.reactiveForm.reset(this.defaultInputs);
  }

  patchForm() {
    // first way to patch fields
    this.reactiveForm.patchValue({ firstName: '', email: '' });

    // second way to patch fields
    // this.reactiveForm.controls['firstName'].patchValue('')
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
