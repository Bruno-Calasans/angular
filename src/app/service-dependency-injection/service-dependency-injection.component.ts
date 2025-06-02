import { Component, OnInit } from '@angular/core';
import { Quote, User, UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-dependency-injection',
  imports: [CommonModule],
  templateUrl: './service-dependency-injection.component.html',
  styleUrl: './service-dependency-injection.component.css',
})
export class ServiceDependencyInjectionComponent implements OnInit {
  user: User = { name: '', username: '', email: '', subscription: 'basic' };
  canAccessPremiumContent = false;
  quotes: Quote[] = [];

  // Inject user service
  constructor(private userService: UserService) {
    this.user = this.userService.user;
    this.canAccessPremiumContent = this.userService.canAccessPremiumContent();
  }

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes() {
    this.userService.requestQuotes().subscribe(({ quotes }) => {
      this.quotes = quotes;
    });
  }
}
