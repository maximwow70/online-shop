import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Item } from "app/_model/item";
import { User } from "app/_model/user";
import { UserDashboardTheme } from "app/_model/user-dashboard-theme";

@Injectable()
export class UserDataService {

	private _isLogIn: boolean = false;
	private _user: User = null;

	private _activeTheme: UserDashboardTheme = null;

	constructor(
		private _http: Http
	) {
		let userData = this.getUserDataFromStorage();

		if (userData.mail || userData.password) {
			this.loadUserData(userData.mail, userData.password);
		} else {
			this._isLogIn = false;
		}

		this._activeTheme = UserDashboardTheme.LIGHT;
	}

	public logIn(userMail: string, userPassword: string): void {
		let userModel = {
			mail: userMail,
			password: userPassword
		};
		// this._http.post('assets/LogInUser', JSON.stringify(userModel))
		// 	.map(user => user.json())
		// 	.subscribe(user => {
		// 		this._user = user;
		// 		this._isLogIn = true;
		// 		localStorage.setItem('userMail', user.mail);
		// 		localStorage.setItem('userPassword', user.password);
		// 	});

		// timing
		this._isLogIn = true;
		this.loadUserData('', '');
		localStorage.setItem('userMail', userMail);
		localStorage.setItem('userPassword', userPassword);
	}
	public registrate(user: User): void {
		
	}
	public logOut(): void {
		this._user = null;
		this._isLogIn = false;
		localStorage.removeItem('userMail');
		localStorage.removeItem('userPassword');
	}


	public getUserDataFromStorage(): { mail: string, password: string } {
		return {
			mail: localStorage.getItem('userMail'),
			password: localStorage.getItem('userPassword')
		}
	}

	public loadUserData(userMail: string, userPassword: string): void {
		this._http.get('assets/GetUserData.json')
			.map(response => response.json())
			.subscribe(u => {
				this._user = User.fromJSON(JSON.stringify(u));
				// this._user = undefined; // timing
				this._isLogIn = this._user ? true : false;
			});
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
	public get isLogInObservable(): Observable<boolean> {
		return
	}

	public get activeTheme(): UserDashboardTheme {
		return this._activeTheme;
	}
}
