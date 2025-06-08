import { Component, OnInit, inject } from '@angular/core';
import { CrudService, User } from '../service/crud.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent implements OnInit {
  users: User[] = [];
  crudService = inject(CrudService);
  router = inject(Router);

  ngOnInit(): void {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.crudService.getAllUsers().subscribe((res) => {
      this.users = res;
    });
  }

  goToAddNewUserPage() {
    this.router.navigateByUrl('crud/new');
  }

  goToEditUserPage(userId: number) {
    this.router.navigateByUrl(`crud/edit/${userId}`);
  }

  removeUserHandler(userId: number) {
    this.crudService.removeUser(userId).subscribe((res) => {
      console.log('User has been removed');
      this.loadAllUsers();
    });
  }
}
