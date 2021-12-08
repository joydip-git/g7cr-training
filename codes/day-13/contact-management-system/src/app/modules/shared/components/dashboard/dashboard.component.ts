import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(public authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.deleteToken()
    this._router.navigate(['/login'])
  }
}
