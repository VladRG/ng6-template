import { Injectable } from '@angular/core';
import { AuthService } from '@app/core/services';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class IsLoggedOutGuard implements CanActivate {
  constructor(private service: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !this.service.isLoggedIn();
  }
}
