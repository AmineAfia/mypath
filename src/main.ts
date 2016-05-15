import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angularattack2016MypathAppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angularattack2016MypathAppComponent, [HTTP_PROVIDERS]);
