import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { User } from '../../service/user.service';
const nameRegex = /^[a-zA-Z]{3,}$/;

@Component({
  selector: 'app-add-new-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.css',
})
export class AddNewUserComponent {
  private fb = inject(FormBuilder);
  private crudService = inject(CrudService);
  router = inject(Router);

  createUserForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern(nameRegex)]],
    email: ['', [Validators.required, Validators.email]],
  });

  createNewUser() {
    console.log('Create new user', this.createUserForm.value);
    this.crudService
      .createUser(this.createUserForm.value as Required<User>)
      .subscribe((res) => {
        this.router.navigateByUrl('/crud');
      });
  }

  cancelCreateNewUser() {
    this.router.navigateByUrl('/crud');
  }
}
