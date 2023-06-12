import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { ProjectsComponent } from './projects/projects.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CareerComponent,
    ProjectsComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
  exports: [
    PagesRoutingModule,
    HomeComponent,
    CareerComponent,
    ProjectsComponent,
  ],
})
export class PagesModule {}
