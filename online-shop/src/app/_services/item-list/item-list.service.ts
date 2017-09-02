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
		// return this._http.get('GetItemList', '')
		// 	.map(response => response.json());
		return this._http.get('assets/GetItemList.json', '')
			.map(response => response.json().map(itemData => ItemDataPresentation.fromJSON(itemData)));
	}

	public getItemListByParams(name: string, colors: Color[], sizes: string[], cost: { min: number, max: number })
		: Observable<ItemDataPresentation[]> {
		let colorNames: any = colors.map(c => c.name);

		let params = 'name=' + name +
			'&colors=' + JSON.stringify(colorNames) +
			'&sizes=' + JSON.stringify(sizes) +
			'&minCost=' + JSON.stringify(cost.min) + 
			'&maxCost=' + JSON.stringify(cost.max);

		return this._http.get('SearchItemList?' + params, '')
			.map(response => response.json().map(itemData => ItemDataPresentation.fromJSON(itemData)));
	}

}
