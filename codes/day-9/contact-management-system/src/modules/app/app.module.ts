import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsModule } from '../contacts/contacts.module';
//import { ContactsService } from '../contacts/services/contacts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactsModule
  ],
  //providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
