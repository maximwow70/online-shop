import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Item } from "app/_model/item";
import { User } from "app/_model/user";
import { UserDashboardTheme } from "app/_model/user-dashboard-theme";

@Injectable()
export class UserDataService {

	private _isLogIn: boolean = false;
	private _user: User;

	private _activeTheme: UserDashboardTheme = null;

	constructor(
		private _http: Http
	) {
		this.getUserData().subscribe(u => {
			this._user = User.fromJSON(JSON.stringify(u));
			// this._user = undefined; // timing
			this._isLogIn = this._user ? true : false;
		});

		this._activeTheme = UserDashboardTheme.DARK;
	}


	public getUserData(): Observable<User> {
		return this._http.get('assets/GetUserData.json')
			.map(response => response.json());
	}

	public getUserWishlist(): Observable<Item[]> {
		return this._http.get('assets/GetUserWishlist.json')
			.map(response => response.json());
	}
	public getUserCart(): Observable<Item[]> {
		return this._http.get('assets/GetUserCart.json')
			.map(response => response.json());
	}


	public activateTheme(theme: UserDashboardTheme): void {
		this._activeTheme = theme;
	}

	public get user(): User {
		return this._user;
	}
	public get isLogIn(): boolean {
		return this._isLogIn;
	}

	public get activeTheme(): UserDashboardTheme {
		return this._activeTheme;
	}
}
