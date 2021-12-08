import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-friends-cart',
  templateUrl: './friends-cart.component.html',
  styleUrls: ['./friends-cart.component.css']
})
export class FriendsCartComponent implements OnInit {

  friendsList?: Contact[];
  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.getItem('friends')) {
      const data = sessionStorage.getItem('friends')
      if (data !== null) {
        this.friendsList = <Contact[]>JSON.parse(data)
      }
    }
  }

}
