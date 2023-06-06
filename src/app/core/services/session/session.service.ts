import { Injectable } from '@angular/core';
import { AppStorage } from '../../utils/app-storage';
import { BehaviorSubject } from 'rxjs';
import { Session } from './session';

@Injectable({
  providedIn: 'root',
})
export class SessionService extends BehaviorSubject<Session> {
  appStorage = new AppStorage(localStorage, 'session');

  constructor() {
    super({});

    this.subscribe((state) => this.appStorage.set('session', state));
  }

  update(session: Partial<Session> = {}): void {
    if (this.value) {
      this.next({ ...this.value, ...session });
    }
  }
}
