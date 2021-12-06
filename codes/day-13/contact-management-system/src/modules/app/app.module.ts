import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '../auth/services/auth.guard';
import { AuthService } from '../auth/services/auth.service';
import { JwtInterceptorService } from '../auth/services/jwt-interceptor.service';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
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
