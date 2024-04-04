import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkRedTheme = true;

  isDarkRedTheme(): boolean {
    return this.darkRedTheme;
  }

  setTheme(isDarkRedTheme: boolean): void {
    console.log('isDarkRedTheme', isDarkRedTheme);
    this.darkRedTheme = isDarkRedTheme;

    if (isDarkRedTheme) {
      document.body.classList.add('dark-red-theme');
      document.body.classList.remove('light-blue-theme');
    } else {
      document.body.classList.add('light-blue-theme');
      document.body.classList.remove('dark-red-theme');
    }
  }
}
