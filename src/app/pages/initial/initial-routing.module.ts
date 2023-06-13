import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inital',
    pathMatch: 'full',
  },
  {
    path: 'initial',
    component: InitialComponent,
  },
  {
    path: '**',
    redirectTo: '/initial',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class InitialRoutingModule {}
