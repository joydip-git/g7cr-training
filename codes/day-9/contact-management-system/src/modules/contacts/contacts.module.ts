import { NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FilterContactsPipe } from './pipes/filter-contacts/filter-contacts.pipe';
import { FormsModule } from '@angular/forms';
import { ContactsSearchComponent } from './components/contacts-search/contacts-search.component';
import { StarComponent } from './components/star/star.component';
import { ContactsService } from './services/contacts.service';
// import { HttpClientModule } from '@angular/common/http';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { IAppService } from '../shared/models/service.model';


@NgModule({
  declarations: [
    ContactListComponent,
    FilterContactsPipe,
    ContactsSearchComponent,
    StarComponent,
    AddContactComponent,
    ViewContactComponent,
    UpdateContactComponent
  ],
  exports: [ContactListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule
  ],
  providers: [{
    provide: IAppService,
    useClass: ContactsService,

  }]
  // providers: [{
  //   provide: 'CONTACT_SERVICE',
  //   useClass: ContactsService
  // }]
})
export class ContactsModule implements OnDestroy {
  constructor() {
    console.log('contact module created')
  }
  ngOnDestroy(): void {
    console.log('contact module destroyed')
  }
}
