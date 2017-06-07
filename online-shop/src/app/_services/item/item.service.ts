import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions } from "@angular/http";
import { Item } from "app/_model/item";

@Injectable()
export class ItemService {

	constructor(
		private _http: Http
	) { }

	public getItem(id: string): Observable<Item> {
		// let params : URLSearchParams = new URLSearchParams();
		// params.set('id', id);
		// let requestOptions = new RequestOptions({
		// 	params: params
		// });

		//return this._http.get('GetItem' + '?id=' + id).map(response => response.json());
		return this._http.get('assets/GetItem.json').map(response => response.json());
	}
}
