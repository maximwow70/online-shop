import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";

@Injectable()
export class ItemListService {
	

	constructor(
		private _http: Http
	) { }
	
	public getItemList(): Observable<{ item: any, colors: string[], sizes: string[], cost: number, isNew: boolean }[]> {
		return this._http.get('GetItemList', '')
			.map(response => response.json());
	}

}
