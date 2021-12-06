import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [CommonModule, FormsModule, AuthRoutingModule],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class AuthModule {
    constructor() {
        console.log('auth module created')
    }
}
