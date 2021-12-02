import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterState } from '@angular/router';
import { map } from 'rxjs';
import { IAppService } from 'src/modules/shared/models/service.model';
import { Contact } from '../../models/contact.model';
import { ResponseMessage } from '../../models/responsemessage.model';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit, OnDestroy {

  //private state:RouterState;
  contactInfo?: Contact;
  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private contactSvc: IAppService<Contact, ResponseMessage, number>) {
      console.log('ViewContact component created')
  }
  ngOnDestroy(): void {
    console.log('View component destroyed')
  }

  ngOnInit(): void {
    // this.currentRoute.params.pipe(map(
    //   (allParams: Params) => this.contactSvc.get(+allParams['id'])))

    this.currentRoute.params.subscribe(
      (allParams: Params) => {
        this.contactSvc.get(+allParams['id'])
          ?.subscribe(
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
    )
  }

  goBack() {
    this.router.navigate(['/contacts'])
  }
}
