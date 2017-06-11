import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import { Item } from "app/_model/item";

@Injectable()
export class ItemListService {

	constructor(
		private _http: Http
	) { }

	public getItemList(): Observable<Item[]> {
		return this._http.get('GetItemList', '')
			.map(response => response.json());
	}

}
