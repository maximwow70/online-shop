import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Item } from "app/_model/item";

@Injectable()
export class UserDataService {

	constructor(
		private _http: Http
	) { }
	

	public getUserWishlist(): Observable<Item[]> {
		return this._http.get('assets/GetUserWishlist.json')
			.map(response => response.json());
	}
	public getUserCart(): Observable<Item[]> {
		return this._http.get('assets/GetUserCart.json')
			.map(response => response.json());
	}
}
