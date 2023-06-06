import { Injectable } from '@angular/core';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly sessionService: SessionService) {}

  getUserSelectedLang() {
    return this.sessionService.value.lang;
  }

  changeLang(lang: string) {
    this.sessionService.update({ lang });
  }
}
