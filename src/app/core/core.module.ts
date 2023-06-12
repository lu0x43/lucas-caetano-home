import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-rounting.module';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [CoreComponent],
  imports: [CoreRoutingModule, CommonModule, PagesModule],
  exports: [CoreComponent],
})
export class CoreModule {}
