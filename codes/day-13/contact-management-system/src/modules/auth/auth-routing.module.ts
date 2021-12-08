import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReactiveLoginComponent } from './components/reactive-login/reactive-login.component';

const authRoutes: Routes = [{
    // path: '',
    // component: LoginComponent
    path: '',
    component: ReactiveLoginComponent
}]

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
    constructor() {
        console.log('auth routing module created')
    }
}
