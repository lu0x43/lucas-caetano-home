import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './core/services/authenticator/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedLang?: string;
  constructor(
    private translateService: TranslateService,
    authService: AuthService
  ) {
    this.translateService.addLangs(['en', 'pt-br']);
    let browserLang = this.translateService.getBrowserLang();
    // this.translateService.setDefaultLang('pt-br');
    let supportedLang = this.translateService
      .getLangs()
      .find((lang) => lang === browserLang);
    let userSelectedLang = authService.getUserSelectedLang();
    if (userSelectedLang) {
      this.selectedLang = userSelectedLang;
    } else if (supportedLang) {
      this.selectedLang = this.translateService.getBrowserLang();
    }
    this.translateService.use(this.selectedLang || 'pt-br');
  }
}
