import { enableProdMode, PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

const platformRef: PlatformRef = platformBrowserDynamic()
platformRef
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
