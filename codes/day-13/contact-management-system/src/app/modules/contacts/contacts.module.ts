import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FilterContactsPipe } from './pipes/filter-contacts/filter-contacts.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsSearchComponent } from './components/contacts-search/contacts-search.component';
import { StarComponent } from './components/star/star.component';
import { ContactsService } from './services/contacts.service';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { AppService } from '../shared/models/service.model';
import { ContactsMainComponent } from './components/contacts-main/contacts-main.component';
import { FriendsCartComponent } from './components/friends-cart/friends-cart.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    ContactListComponent,
    FilterContactsPipe,
    ContactsSearchComponent,
    StarComponent,
    AddContactComponent,
    ViewContactComponent,
    UpdateContactComponent,
    ContactsMainComponent,
    FriendsCartComponent
  ],
  exports: [ContactListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactsRoutingModule
  ],
  //providers: [ContactsService]
  providers: [{
    provide: AppService,
    useClass: ContactsService,

  }, {
    provide: 'API_URL',
    useValue: environment.restfulBaseUrl
  }],

  // providers: [{
  //   provide: 'CONTACT_SERVICE',
  //   useClass: ContactsService
  // }]
})
export class ContactsModule {
  constructor() {
    console.log('contact module created')
  }
}
