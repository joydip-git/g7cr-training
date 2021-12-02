import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ResponseMessage } from '../../models/responsemessage.model';
import { ContactsService } from '../../services/contacts.service';
import { Observable, Subscription } from "rxjs";
import { IAppService } from 'src/modules/shared/models/service.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  //providers: [ContactsService]
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts?: Contact[];
  listFilterText = ''
  errorMessage?: string;

  // constructor(@Inject('CONTACT_SERVICE') private contactSvc: IAppService<Contact, ResponseMessage, number>) {

  // }

  constructor(private contactSvc: IAppService<Contact, ResponseMessage, number>) {
    console.log('ContactList component created')
  }
  ngOnDestroy(): void {
    console.log('ContactList component destroyed')
  }

  private getData() {

    const obs: Observable<ResponseMessage> | undefined = this.contactSvc.getAll()

    obs?.subscribe(
      (resp: ResponseMessage) => {
        if (resp.code === 200) {
          if ((typeof resp.data) !== 'string') {
            this.contacts = <Contact[]>resp.data
          } else {
            this.contacts = undefined
          }
        } else {
          alert(resp.errormessage)
        }
      }
    )
  }


  ngOnInit(): void {
    this.getData()
  }

  deleteContact(id: number) {
    this.contactSvc.remove(id)?.subscribe(
      (resp: ResponseMessage) => {
        if (resp.code === 200) {
          alert(<string>resp.data)
          //reload the data from server and display in the view
          this.getData()
        } else
          alert(resp.errormessage)
      }
    )
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
