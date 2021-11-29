import { enableProdMode, PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const platformObj: PlatformRef = platformBrowserDynamic()

platformObj
  .bootstrapModule(AppModule)
  .then(m => console.log(m))
  .catch(e => console.log(e))
