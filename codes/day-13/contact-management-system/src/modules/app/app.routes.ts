import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/services/auth.guard";
import { HomeComponent } from "../shared/components/home/home.component";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";

export const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'contacts',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsModule)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]