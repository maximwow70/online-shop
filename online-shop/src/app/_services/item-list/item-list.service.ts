import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

import 'rxjs';
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemData } from "app/_model/item-data";
import { ItemDataPresentation } from "app/_model/item-data-presentation";
import { Size } from "app/_model/size";

@Injectable()
export class ItemListService {


	constructor(
		private _http: Http
	) { }

	public getItemList(): Promise<ItemDataPresentation[]> {
		// return this._http.get('GetItemList', '')
		// 	.map(response => response.json());
		return this._http.get('assets/GetItemList.json', '')
			.map(response => response.json().map(itemData => ItemDataPresentation.fromJSON(itemData))).toPromise();
	}

	public getItemListByParams(
		name: string,
		colors: Color[],
		sizes: Size[],
		cost: { min: number, max: number },
		range: number,
		currentPage: number = 1
	): Promise<ItemDataPresentation[]> {
		let colorNames: any = colors.map(c => c.name);

		let params = 'name=' + name +
			'&colors=' + colors.map(c => Color.toJSON(c)) +
			'&sizes=' + sizes.map(s => Size.toJSON(s)) +
			'&minCost=' + JSON.stringify(cost.min) +
			'&maxCost=' + JSON.stringify(cost.max) + 
			'&range=' + JSON.stringify(range) + 
			'&currentPage=' + JSON.stringify(currentPage);

		return this._http.get('SearchItemList?' + params, '')
			.map(response =>
				response.json().map(itemData => ItemDataPresentation.fromJSON(itemData))
			).toPromise();
	}

}
