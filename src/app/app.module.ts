import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localePt from '@angular/common/locales/pt';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeEn, 'en');
registerLocaleData(localePt, 'pt-br');

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: window.navigator.language.toLowerCase(),
    },
    TranslateService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translateService: TranslateService) {
    const availableLanguages = this.translateService.getLangs();

    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }
}
