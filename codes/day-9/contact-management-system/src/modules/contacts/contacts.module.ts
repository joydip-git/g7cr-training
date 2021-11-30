import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FilterContactsPipe } from './pipes/filter-contacts/filter-contacts.pipe';
import { FormsModule } from '@angular/forms';
import { ContactsSearchComponent } from './components/contacts-search/contacts-search.component';
import { StarComponent } from './components/star/star.component';


@NgModule({
  declarations: [
    ContactListComponent,
    FilterContactsPipe,
    ContactsSearchComponent,
    StarComponent
  ],
  exports: [ContactListComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ContactsModule { }
