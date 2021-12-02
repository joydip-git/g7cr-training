import { NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedRouteModule } from './shared-routes.module';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedRouteModule
  ],
  exports: [DashboardComponent]
})
export class SharedModule implements OnDestroy {
  constructor() {
    console.log('shared module created')
  }
  ngOnDestroy(): void {
    console.log('shared module destroyed')
  }
}
