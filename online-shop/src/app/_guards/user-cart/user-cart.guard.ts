import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserDataService } from "app/_services/user-data/user-data.service";

@Injectable()
export class UserCartGuard implements CanActivate {

	constructor(
		private _router: Router,
		private _userData: UserDataService
	) {

	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
			if (this._userData.isLogIn === false) {
			this._router.navigate(['/user/login']);
		}
		return this._userData.isLogIn;
	}
}
