import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-rounting.module';
import { CommonModule } from '@angular/common';
import { InitialModule } from '../pages/initial/initial.module';


@NgModule({
  declarations: [CoreComponent],
  imports: [CoreRoutingModule, CommonModule, InitialModule],
  exports: [CoreComponent],
})
export class CoreModule {}
