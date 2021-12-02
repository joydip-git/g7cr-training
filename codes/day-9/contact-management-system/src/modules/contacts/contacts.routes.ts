import { Routes } from "@angular/router";
import { AddContactComponent } from "./components/add-contact/add-contact.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { UpdateContactComponent } from "./components/update-contact/update-contact.component";
import { ViewContactComponent } from "./components/view-contact/view-contact.component";

export const contactRoutes: Routes = [
    {
        path: 'contacts',
        component: ContactListComponent
    },
    {
        path: 'contacts/view/:id',
        component: ViewContactComponent
    },
    {
        path: 'contacts/update/:id',
        component: UpdateContactComponent
    },
    {
        path: 'contacts/add',
        component: AddContactComponent
    }
]