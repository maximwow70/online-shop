import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions } from "@angular/http";
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemData } from "app/_model/item-data";

@Injectable()
export class ItemService {

	constructor(
		private _http: Http
	) { }

	public getItem(id: string): Observable<ItemData> {

		//return this._http.get('GetItemData' + '?id=' + id).map(response => response.json());
		return this._http.get('assets/GetItemData.json').map(response => response.json());

	}
}
