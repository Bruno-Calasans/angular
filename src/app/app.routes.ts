import { Routes } from '@angular/router';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { SignalsComponent } from './signals/signals.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ServiceDependencyInjectionComponent } from './service-dependency-injection/service-dependency-injection.component';
import { CrudComponent } from './crud/crud.component';
import { AddNewUserComponent } from './crud/add-new-user/add-new-user.component';
import { EditUserComponent } from './crud/edit-user/edit-user.component';
import { RemoveUserComponent } from './crud/remove-user/remove-user.component';
import { ResourceComponent } from './resource/resource.component';
import { ViewReusableComponent } from './reusable/view-reusable/view-reusable.component';

export const routes: Routes = [
  // Default Route
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'signals',
    component: SignalsComponent,
  },
  {
    path: 'linked-signal',
    component: LinkedSignalComponent,
  },
  {
    path: 'navigation',
    component: NavigationComponent,
  },
  {
    path: 'life-cycle',
    component: LifeCycleComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'service-dependency-injection',
    component: ServiceDependencyInjectionComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
    children: [
      {
        path: 'remove/:userId',
        component: RemoveUserComponent,
      },
    ],
  },
  {
    path: 'crud/new',
    component: AddNewUserComponent,
  },
  {
    path: 'crud/edit/:userId',
    component: EditUserComponent,
  },
  {
    path: 'resource',
    component: ResourceComponent,
  },
  {
    path: 'reusable-component',
    component: ViewReusableComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
