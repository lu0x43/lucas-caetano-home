import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-rounting.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CoreComponent],
  imports: [CoreRoutingModule, CommonModule],
  exports: [CoreComponent],
})
export class CoreModule {}
