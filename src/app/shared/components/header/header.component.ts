import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/authenticator/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toggleMenu = false;

  constructor(
    public translateService: TranslateService,
    private authenticationService: AuthService
  ) {}

  changeLang(): void {
    if (this.translateService.currentLang === 'en') {
      this.translateService.use('pt-br');
      this.authenticationService.changeLang('pt-br');
    } else {
      this.translateService.use('en');
      this.authenticationService.changeLang('en');
    }
  }

  ngOnInit(): void {}
}
