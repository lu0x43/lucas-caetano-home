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
  nameHeader = 'Lucas Caetano';

  rolesHeader: string[] = ['ROLES.WEB_DEV', 'ROLES.MOBILE_DEV'];
  currentRoleIndex: number = 0;
  currentRole: string = '';
  private readonly TYPE_INTERVAL = 100;
  private readonly DELETE_INTERVAL = 50;

  constructor(
    public translateService: TranslateService,
    private authenticationService: AuthService
  ) {}

  ngOnInit(): void {
    this.typeWriter();
  }

  changeLang(): void {
    if (this.translateService.currentLang === 'en') {
      this.translateService.use('pt-br');
      this.authenticationService.changeLang('pt-br');
    } else {
      this.translateService.use('en');
      this.authenticationService.changeLang('en');
    }
  }

  typeWriter(): void {
    const roleKey = this.rolesHeader[this.currentRoleIndex];
    this.translateService.get(roleKey).subscribe((translatedRole: string) => {
      this.typeEffect(translatedRole);
    });
  }

  deleteWriter(): void {
    const roleKey = this.rolesHeader[this.currentRoleIndex];
    this.translateService.get(roleKey).subscribe((translatedRole: string) => {
      this.deleteEffect(translatedRole);
    });
  }

  private typeEffect(translatedRole: string): void {
    const roleLength = translatedRole.length;
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < roleLength) {
        this.currentRole = translatedRole.slice(0, i + 1);
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          this.deleteWriter();
        }, 2000);
      }
    }, this.TYPE_INTERVAL);
  }

  private deleteEffect(translatedRole: string): void {
    const roleLength = translatedRole.length;
    let i = roleLength;
    const deleteInterval = setInterval(() => {
      if (i > 0) {
        this.currentRole = translatedRole.slice(0, i - 1);
        i--;
      } else {
        clearInterval(deleteInterval);
        this.currentRoleIndex++;
        if (this.currentRoleIndex === this.rolesHeader.length) {
          this.currentRoleIndex = 0;
        }
        setTimeout(() => {
          this.typeWriter();
        }, 2000);
      }
    }, this.DELETE_INTERVAL);
  }
}
