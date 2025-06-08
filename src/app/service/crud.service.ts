import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export type User = {
  id: number;
  username: string;
  email: string;
};

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  baseUrl = 'http://localhost:3000';
  usersUrl = this.baseUrl.concat('/users');
  http = inject(HttpClient);

  constructor() {}

  getUserById(userId: number) {
    return this.http.get<User>(this.usersUrl.concat(`/${userId}`));
  }

  getAllUsers() {
    return this.http.get<User[]>(this.usersUrl);
  }

  createUser(input: Omit<User, 'id'>) {
    return this.http.post(this.usersUrl, input);
  }

  editUser(userId: number, input: Omit<User, 'id'>) {
    return this.http.patch(`${this.usersUrl}/${userId}`, input);
  }

  removeUser(userId: number) {
    return this.http.delete(`${this.usersUrl}/${userId}`);
  }
}
