import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/modules/shared/models/service.model';
import { Contact } from '../../models/contact.model';
import { ResponseMessage } from '../../models/responsemessage.model';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contactInfo?: Contact;
  constructor(private contactSvc: AppService<Contact, ResponseMessage>, private _route: ActivatedRoute) { }

  updateContactForm?: FormGroup;

  ngOnInit(): void {
    const id = Number(this._route.snapshot.params['id'])
    this.contactSvc?.get<number>(id)?.subscribe(resp => {
      if (resp.code === 200) {
        this.contactInfo = <Contact>resp.data

        this.updateContactForm = new FormGroup({
          name: new FormControl(this.contactInfo.name, Validators.required),
          email: new FormControl(this.contactInfo.email, Validators.required),
          location: new FormControl(this.contactInfo.location, Validators.required),
          imagePath: new FormControl(this.contactInfo.imagePath, Validators.required),
          likes: new FormControl(this.contactInfo.likes),
          id: new FormControl(this.contactInfo.id),
          mobile: new FormControl(this.contactInfo.mobile, Validators.required)
        })
      } else {
        this.updateContactForm = new FormGroup({
          name: new FormControl('', Validators.required),
          email: new FormControl('', Validators.required),
          location: new FormControl('', Validators.required),
          imagePath: new FormControl('', Validators.required),
          likes: new FormControl(''),
          id: new FormControl(''),
          mobile: new FormControl('', Validators.required)
        })
      }
    })
  }

  submitData() {
    console.log(this.updateContactForm?.value)
  }

}
