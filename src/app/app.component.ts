import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { InterpolationComponent } from './data-binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { NgModelComponent } from './data-binding/ng-model/ng-model.component';
import { NgIfComponent } from './structural-directives/ng-if/ng-if.component';
import { NgForComponent } from './structural-directives/ng-for/ng-for.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    UserComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    NgModelComponent,
    NgIfComponent,
    NgForComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tutorial';
}
