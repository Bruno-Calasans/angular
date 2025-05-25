import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  constructor(private router: Router) {}

  gotToPage() {
    // Verify user
    // this.router.navigateByUrl('/user');
    this.router.getCurrentNavigation();
    this.router.navigate(['user', 1, 'team', 10], {
      fragment: 'top',
      queryParams: {
        search: 'test',
      },
    });
  }
}
