import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Item } from "app/_model/item";
import { User } from "app/_model/user";

@Injectable()
export class UserDataService {

	constructor(
		private _http: Http
	) { }
	
	
	public getUserData(id: string): Observable<User> {
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
}
