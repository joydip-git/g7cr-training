import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title?: string;
  changeTitle() {
    this.title = "CONTACT MANAGEMENT SYSTEM"
  }

  constructor() {
    console.log('app component created')
  }
}
