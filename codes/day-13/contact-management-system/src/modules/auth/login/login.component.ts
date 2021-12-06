import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  mobile = 0
  loginMode = true

  private returnUrl?: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private authService: AuthService
  ) {
    console.log('login component created')
  }

  ngOnInit(): void {
    this.returnUrl = this._route.snapshot.queryParams['returnTo'] || '/contacts'
    //this._route.queryParams()
  }
  changeMode() {
    this.loginMode = !this.loginMode
  }
  login(loginForm: NgForm) {
    //console.log(loginForm)
    if (this.loginMode) {
      this.authService
        .authenticateUser(loginForm.value.email, loginForm.value.password)
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
      this.authService.registerUser(loginForm.value.email, loginForm.value.password)
        .subscribe(
          resp => {
            if (resp.code === 201) {
              alert('registered successfully')
              loginForm.reset()
            }
          }
        )
    }
  }
}
