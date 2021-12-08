import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { customPasswordValidatorFactory } from '../../validators/passwordvalidator';

@Component({
    selector: 'app-reactive-login',
    templateUrl: './reactive-login.component.html',
    styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {

    loginMode = true
    private returnUrl?: string;
    loginForm?: FormGroup;
    emailControl?: FormControl;
    passwordControl?: FormControl;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private authService: AuthService
    ) {

        this.emailControl = new FormControl('', [Validators.required, Validators.email])

        this.passwordControl = new FormControl('', [Validators.required, customPasswordValidatorFactory()])

        this.loginForm = new FormGroup({
            'email': this.emailControl,
            'password': this.passwordControl
        })
        console.log('login component created')
    }

    get emailCtrl() {
        return this.loginForm?.get('email')
    }

    get pwdlCtrl() {
        return this.loginForm?.get('password')
    }

    ngOnInit(): void {
        this.returnUrl = this._route.snapshot.queryParams['returnTo'] || '/contacts'
        //this._route.queryParams()
    }
    changeMode() {
        this.loginMode = !this.loginMode
    }
    login() {
        //console.log(this.loginForm)
        if (this.loginMode) {

            this.authService
                .authenticateUser(this.emailControl?.value, this.pwdlCtrl?.value)
                .subscribe(resp => {
                    if (resp.code === 200) {
                        this.authService.savetoken(<string>resp.data)
                        if (this.returnUrl) {
                            this._router.navigateByUrl(this.returnUrl)
                        } else {
                            this._router.navigate(['/contacts'])
                        }
                    } else {
                        alert(resp.errormessage)
                    }
                })
        } else {
            this.authService.registerUser(this.loginForm?.get('email')?.value, this.loginForm?.get('password')?.value)
                .subscribe(
                    resp => {
                        if (resp.code === 201) {
                            alert('registered successfully')
                            this.loginForm?.reset()
                        }
                    }
                )
        }
    }
}
