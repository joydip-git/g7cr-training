import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app.component';
import { AuthGuard } from './modules/auth/services/auth.guard';
import { AuthService } from './modules/auth/services/auth.service';
import { JwtInterceptorService } from './modules/auth/services/jwt-interceptor.service';
import { DashboardComponent } from './modules/shared/components/dashboard/dashboard.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    { provide: 'API_URL', useValue: environment.restfulBaseUrl },
    AuthService,
    AuthGuard
  ]
})
export class AppModule {
  constructor() {
    console.log('app module created')
  }
}
