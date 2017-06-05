import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Item } from "app/_model/item";

@Injectable()
export class ItemService {

	constructor(
		private _http: Http
	) { }

	public getItem(id: string): Observable<Item> {
		return this._http.get('GetItem', id).map(response => response.json());
	}
}
