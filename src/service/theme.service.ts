import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private lightBlueTheme = false;

  isLightBlueTheme(): boolean {
    return this.lightBlueTheme;
  }

  setTheme(isLightBlueTheme: boolean): void {
    this.lightBlueTheme = isLightBlueTheme;

    if (isLightBlueTheme) {
      document.body.classList.add('light-blue-theme');
      document.body.classList.remove('dark-red-theme');
    } else {
      document.body.classList.add('dark-red-theme');
      document.body.classList.remove('light-blue-theme');
    }
  }
}
