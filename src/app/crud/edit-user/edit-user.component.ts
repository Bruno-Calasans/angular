import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import type { User } from '../../service/crud.service';

const nameRegex = /^[a-zA-Z]{3,}$/;

@Component({
  selector: 'app-edit-user',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnInit {
  private fb = inject(FormBuilder);
  private crudService = inject(CrudService);
  private router = inject(Router);
  private activeRoute = inject(ActivatedRoute);
  user: User | null = null;

  editUserForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern(nameRegex)]],
    email: ['', [Validators.required, Validators.email]],
  });

  // Get user by id and assign it to user property
  ngOnInit(): void {
    // Get user is from request params
    const userId = this.activeRoute.snapshot.params['userId'] as number;

    // Request user by its id
    this.crudService.getUserById(userId).subscribe((user) => {
      
      // Save user from request into this.user property
      this.user = user;

      // Set default form values
      this.editUserForm.setValue({
        username: this.user.username,
        email: this.user.email,
      });
    });
  }

  editUser() {
    if (!this.user) return;
    this.crudService
      .editUser(this.user.id, this.editUserForm.value as any)
      .subscribe((res) => {
        this.router.navigateByUrl('/crud');
      });
  }

  cancelEditUser() {
    this.router.navigateByUrl('/crud');
  }
}
