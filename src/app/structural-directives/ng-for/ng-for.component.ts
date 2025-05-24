import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  selectedUser = '';
  // users: { name: string; student: boolean }[] = [
  //   { name: 'Carlos', student: true },
  //   { name: 'James', student: false },
  //   { name: 'Ana', student: true },
  //   { name: 'Maria', student: false },
  // ];

  users: { name: string; student: boolean }[] = []

  setSelectedUser(user: string) {}
}
