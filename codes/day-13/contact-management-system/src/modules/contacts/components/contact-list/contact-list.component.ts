import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ResponseMessage } from '../../models/responsemessage.model';
import { Observable } from "rxjs";
import { AppService } from 'src/modules/shared/models/service.model';

@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts?: Contact[];
  listFilterText = ''
  errorMessage?: string;

  constructor(private contactSvc: AppService<Contact, ResponseMessage>) {
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
    this.contactSvc.remove<number>(id)?.subscribe(
      (resp: ResponseMessage) => {
        if (resp.code === 200) {
          alert(<string>resp.data)
          this.getData()
        } else
          alert(resp.errormessage)
      }
    )
  }
  updateFilterText(filterTextData: string) {
    this.listFilterText = filterTextData
  }

  addFriend(contact: Contact) {
    if (sessionStorage.getItem('friends')) {
      const data = sessionStorage.getItem('friends')
      if (data !== null) {
        const friends = JSON.parse(data)
        friends.push(contact)
        sessionStorage['friends'] = JSON.stringify(friends)
      }
    } else {
      sessionStorage.setItem('friends', JSON.stringify([contact]))
    }
  }
}
