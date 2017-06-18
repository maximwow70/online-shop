import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemData } from "app/_model/item-data";
import { ItemDataPresentation } from "app/_model/item-data-presentation";

@Injectable()
export class ItemListService {
	

	constructor(
		private _http: Http
	) { }
	
	public getItemList(): Observable<ItemDataPresentation[]> {
		return this._http.get('assets/GetItemList.json', '')
			.map(response => response.json());
	}
	// public getItemList(): Observable<ItemDataPresentation[]> {
	// 	return this._http.get('GetItemList', '')
	// 		.map(response => response.json());
	// }

}
