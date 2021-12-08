import { Routes } from "@angular/router";
import { AuthGuard } from "./modules/auth/services/auth.guard";
import { HomeComponent } from "./modules/shared/components/home/home.component";
import { PageNotFoundComponent } from "./modules/shared/components/page-not-found/page-not-found.component";
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
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'contacts',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]