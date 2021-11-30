import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome';
  numbers = [1, 2, 3, 4, 5]
  changeTitle() {
    this.title = "welcome to anguar 13"
  }
  //document.getElementByNames('p').addEventListener('click',this.changeTitle)
}
