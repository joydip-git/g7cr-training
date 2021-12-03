import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { AppService } from 'src/modules/shared/models/service.model';
import { Contact } from '../../models/contact.model';
import { ResponseMessage } from '../../models/responsemessage.model';

@Component({
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit, OnDestroy {

  contactInfo?: Contact;
  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private contactSvc: AppService<Contact, ResponseMessage>) {
    console.log('ViewContact component created')
  }

  ngOnDestroy(): void {
    console.log('View component destroyed')
  }

  ngOnInit(): void {

    const currentRouteSnapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const allParams: Params = currentRouteSnapshot.params;
    const id = Number(allParams['id'])

    this.contactSvc.get<number>(id)?.subscribe(
      (resp: ResponseMessage) => {
        if (resp.code === 200) {
          this.contactInfo = <Contact>resp.data
        } else {
          this.contactInfo = undefined
          alert(resp.errormessage)
        }
      }
    )
  }

  goBack() {
    this.router.navigate(['/contacts'])
  }
}
