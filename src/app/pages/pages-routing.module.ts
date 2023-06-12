import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
