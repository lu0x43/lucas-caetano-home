import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-rounting.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../pages/home/home.module';

@NgModule({
  declarations: [CoreComponent],
  imports: [CoreRoutingModule, CommonModule, HomeModule],
  exports: [CoreComponent],
})
export class CoreModule {}
