import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ContactsModule } from '../contacts/contacts.module';
import { SharedModule } from '../shared/shared.module';
//import { ContactsService } from '../contacts/services/contacts.service';

import { AppComponent } from './components/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    ContactsModule,   
    SharedModule,    
    HttpClientModule,
    RouterModule
  ],
  //providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('app module created')
  }
}
