import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/modules/shared/models/service.model';

import { Contact } from '../../models/contact.model';
import { ResponseMessage } from '../../models/responsemessage.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  contactInfo?: Contact;
  
  constructor(private contactSvc: AppService<Contact, ResponseMessage>, private router: Router) {

    this.contactInfo = { name: '', mobile: 0, email: '', location: '', imagePath: '', id: 0, likes: 0 }

  }


  // submitData(obj: Contact) {
  //   //console.log(obj)
  //   prompt('add?')
  //   this.contactSvc?.add(obj)?.subscribe(
  //     (resp) => {
  //       if (resp.code === 200) {
  //         alert(<string>resp.data)
  //         this.router.navigate(['/contacts'])
  //       } else {
  //         alert(resp.errormessage)
  //       }
  //     }
  //   )
  // }
  submitData() {
    console.log(this.contactInfo)
  }
}
