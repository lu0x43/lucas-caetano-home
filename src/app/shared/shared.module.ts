import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SvgIconComponent,
    TimelineComponent,
  ],
  imports: [CommonModule, TranslateModule, MatSlideToggleModule, MatIconModule],
  exports: [
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SvgIconComponent,
    TimelineComponent,
  ],
})
export class SharedModule {}
