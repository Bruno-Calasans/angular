import {
  Component,
  WritableSignal,
  computed,
  linkedSignal,
  signal,
} from '@angular/core';

type User = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css',
})
export class LinkedSignalComponent {
  users: User[] = [
    {
      id: 0,
      name: 'Carlos',
    },
    {
      id: 1,
      name: 'Fábio',
    },
    {
      id: 2,
      name: 'James',
    },
  ];

  selectedUser: WritableSignal<User | undefined> = signal(this.users[0]);

  selectedUserName = linkedSignal({
    source: this.selectedUser,
    computation: (user) => user,
    equal: (user1, user2) => user1?.id == user2?.id,
  });

  amount = signal(1);
  price = signal(10);

  // Computed
  // Read only
  // total = computed(() => this.amount() * this.price());

  // linkedSignal
  // It can be changed
  // first way - shorthand

  total = linkedSignal(() => this.amount() * this.price());

  // second way - complete syntax
  // total = linkedSignal({
  //   source: this.amount,
  //   computation: (newValue, previous) => {
  //     console.log(newValue, previous);
  //     return this.amount() * this.price();
  //   },
  // });

  calculateTotal() {
    this.amount.set(this.amount() + 10);
  }

  setUser(userId: number) {
    this.selectedUser.set(this.users.find((user) => user.id === userId));
  }
}
