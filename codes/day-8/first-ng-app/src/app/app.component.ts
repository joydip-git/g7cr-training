import { Component } from "@angular/core";

@Component({
    selector: 'app-main',
    templateUrl: './app.component.html'
})
export class AppComponent {
    message = 'welcome'
    message1 = ' to angular'
    width = 200

    changeWidth(newWidth: number) {
        this.width = newWidth
    }
}