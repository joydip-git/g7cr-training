import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  //providers: [ContactsService]
})
export class ContactListComponent implements OnInit {

  contacts?: Contact[];
  listFilterText = ''
  private contactServiceRef?: ContactsService;

  constructor() {
    this.contactServiceRef = new ContactsService()
  }

  ngOnInit(): void {
    this.contacts = this.contactServiceRef?.getContacts()
  }



  updateFilterText(filterTextData: string) {
    this.listFilterText = filterTextData
  }

  // changeFilterText(newFilterText:any) {
  //   //console.log(newFTxtx)
  //   // this.filterText = newFilterText
  //   console.log(newFilterText)
  // }

}
