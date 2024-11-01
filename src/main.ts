import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  if (environment.production) {
    enableProdMode();
  }

  /*platformBrowserDynamic().bootstrapModule(module)
  .catch(err => console.error(err));*/