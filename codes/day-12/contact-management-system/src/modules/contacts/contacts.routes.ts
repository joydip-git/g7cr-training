import { Routes } from "@angular/router";
import { AddContactComponent } from "./components/add-contact/add-contact.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { UpdateContactComponent } from "./components/update-contact/update-contact.component";
import { ViewContactComponent } from "./components/view-contact/view-contact.component";

export const contactRoutes: Routes = [
    {
        path: '',
        component: ContactListComponent
    },
    {
        path: 'add',
        component: AddContactComponent
    },
    {
        path: 'view/:id',
        component: ViewContactComponent
    },
    {
        path: 'update/:id',
        component: UpdateContactComponent
    }
]