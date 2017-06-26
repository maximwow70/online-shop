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
			.map(response => response.json());
	}

	public getItemListByParams(name: string, colors: Color[], sizes: string[], cost: { min: number, max: number })
		: Observable<ItemDataPresentation[]> {
		let colorNames: any = [];
		for (let color = 0; color < colors.length; color++) {
			colorNames.push(colors[color].name);
		}

		let params = 'name=' + name +
			'&colors=' + JSON.stringify(colorNames) +
			'&sizes=' + JSON.stringify(sizes) +
			'&minCost=' + JSON.stringify(cost.min) + 
			'&maxCost=' + JSON.stringify(cost.max);

		console.log(params);

		return this._http.get('SearchItemList?' + params, '')
			.map(response => response.json());
	}

}
