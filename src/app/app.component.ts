import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { InterpolationComponent } from './data-binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { NgModelComponent } from './data-binding/ng-model/ng-model.component';
import { NgIfComponent } from './structural-directives/ng-if/ng-if.component';
import { NgForComponent } from './structural-directives/ng-for/ng-for.component';
import { NgSwitchComponent } from './structural-directives/ng-switch/ng-switch.component';
import { NgClassComponent } from './attribute-directives/ng-class/ng-class.component';
import { SignalsComponent } from './signals/signals.component';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // UserComponent,
    // InterpolationComponent,
    // PropertyBindingComponent,
    // EventBindingComponent,
    // NgModelComponent,
    // NgIfComponent,
    // NgForComponent,
    // NgSwitchComponent
    // NgSwitchComponent,
    // NgClassComponent,
    // SignalsComponent,
    // LinkedSignalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tutorial';
  links = [
    {
      url: '/',
      label: 'Home',
    },
    {
      url: 'linked-signal',
      label: 'Linked Signals',
    },
    {
      url: 'signals',
      label: 'Signals',
    },
    {
      url: 'user',
      label: 'User',
    },
    {
      url: 'navigation',
      label: 'Navigation',
    },
    {
      url: 'life-cycle',
      label: 'Life Cycle',
    },
    {
      url: 'pipes',
      label: 'Pipes',
    },
    {
      url: 'template-driven-form',
      label: 'Template Driven Form',
    },
    {
      url: 'reactive-form',
      label: 'Reactive Form',
    },
    {
      url: 'service-dependency-injection',
      label: 'Service and Dependency Injection',
    },
    {
      url: 'crud',
      label: 'CRUD',
    },
    // {
    //   url: 'crud/add-new-user',
    //   label: 'A',
    // },
  ];
}
