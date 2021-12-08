import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
    @Input('likesValue') likesData: number = 0;
    widthValue: number = 100;
    constructor() {

    }
    ngOnInit(): void {
        this.widthValue = 14 * this.likesData;
    }

}