import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { passwordValidator } from '../../validators/passwordvalidator';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {

  loginMode = true

  private returnUrl?: string;
  loginFrm?: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private authService: AuthService,
    private builder: FormBuilder
  ) {

    // const pwdValidator = passwordValidator()    
    console.log('login component created')
  }

  get email() {
    return this.loginFrm?.get('email')
  }

  get password() {
    return this.loginFrm?.get('password')
  }

  ngOnInit(): void {
    this.loginFrm = this.builder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, passwordValidator()]]
    })

    // this.loginFrm = new FormGroup({
    //   'email': new FormControl('', { validators: [Validators.required, Validators.email] }),
    //   'password': new FormControl('', [Validators.required, passwordValidator()])
    // })

    this.returnUrl = this._route.snapshot.queryParams['returnTo'] || '/contacts'
    //this._route.queryParams()
  }
  changeMode() {
    this.loginMode = !this.loginMode
  }
  login() {
    //console.log(loginForm)
    if (this.loginMode) {
      this.authService
        .authenticateUser(this.email?.value, this.password?.value)
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
      this.authService.registerUser(this.email?.value, this.password?.get('password')?.value)
        .subscribe(
          resp => {
            if (resp.code === 201) {
              alert('registered successfully')
              this.loginFrm?.reset()
            }
          }
        )
    }
  }
}
