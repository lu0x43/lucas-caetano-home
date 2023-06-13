import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../../shared/shared.module';
import { InitialRoutingModule } from './initial-routing.module';
import { InitialComponent } from './initial.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    InitialComponent,
    HomeComponent,
    CareerComponent,
    SkillsComponent,
    AboutComponent,
    ProjectsComponent,
  ],
  imports: [CommonModule, InitialRoutingModule, SharedModule],
  exports: [
    InitialRoutingModule,
    InitialComponent,
    HomeComponent,
    CareerComponent,
    SkillsComponent,
    AboutComponent,
    ProjectsComponent,
  ],
})
export class InitialModule {}
