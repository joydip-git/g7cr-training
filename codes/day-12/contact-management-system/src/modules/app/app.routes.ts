import { Routes } from "@angular/router";
import { HomeComponent } from "../shared/components/home/home.component";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";

export const appRoutes: Routes = [
    {
        path: 'contacts',
        loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsModule)
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]