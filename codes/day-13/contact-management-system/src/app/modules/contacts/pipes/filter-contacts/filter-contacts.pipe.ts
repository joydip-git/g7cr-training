import { Pipe, PipeTransform } from "@angular/core";
import { Contact } from "../../models/contact.model";

@Pipe({
    name: 'search'
})
export class FilterContactsPipe implements PipeTransform {
    transform(contacts: Contact[], ...args: string[]) {
        return (args && args[0] && args[0] !== '') ?
            contacts.filter(c => c.name.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !== -1)
            : contacts;
    }
}