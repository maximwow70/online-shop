import { Injectable } from '@angular/core';
import { Item } from "app/_model/item";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ItemCostService {

	constructor(
		private _http: Http
	) { }


	public getCostByItem(item: Item): Observable<number> {
		return this._http.get('GetCost' + '?id=' + item.id).map(response => response.json());
	}
}
