import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-contacts-search',
    templateUrl: './contacts-search.component.html',
    styleUrls: ['./contacts-search.component.css']
})
export class ContactsSearchComponent {
    @Input('searchText') filterText = ''
    @Output('searchTextChanged') filterTextChanged = new EventEmitter<string>();

    constructor() {

    }
    onfilterTextChanged(updatedText: string) {
        this.filterText = updatedText;
        this.filterTextChanged.emit(this.filterText)
    }
}