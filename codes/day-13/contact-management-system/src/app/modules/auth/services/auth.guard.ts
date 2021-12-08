import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, NavigationExtras, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthGuard implements CanActivateChild {

  //authService?: AuthService;
  // constructor(private _router: Router, private injector: Injector) {
  //   console.log('guard created')
  //   this.authService = this.injector.get(AuthService)
  // }

  constructor(private _router: Router, private authService: AuthService) {
    console.log('guard created')
  }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('checking')
    if (this.authService?.isLoggedIn()) {
      return true;
    } else {
      const extras: NavigationExtras = {
        queryParams: { returnTo: state.url }
      }
      this._router.navigate(['/login'], extras)
      return false;
    }
  }
}
