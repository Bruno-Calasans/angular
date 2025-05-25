import { Routes } from '@angular/router';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { SignalsComponent } from './signals/signals.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { PipesComponent } from './pipes/pipes.component';

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
    path: '**',
    component: NotFoundComponent,
  },
];
