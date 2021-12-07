import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveLoginComponent } from './components/reactive-login/reactive-login.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule],
    exports: [],
    declarations: [LoginComponent, ReactiveLoginComponent],
    providers: [],
})
export class AuthModule {
    constructor() {
        console.log('auth module created')
    }
}
