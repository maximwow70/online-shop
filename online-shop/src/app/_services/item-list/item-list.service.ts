import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

import 'rxjs';
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemData } from "app/_model/item-data";
import { ItemDataPresentation } from "app/_model/item-data-presentation";
import { Size } from "app/_model/size";
import { ItemDataSearch } from "app/_model/item-data-search";

@Injectable()
export class ItemListService {


	constructor(
		private _http: Http
	) { }

	public getItemListJSON(): Promise<ItemDataPresentation[]> {
		return this._http.get('assets/GetItemList.json', '')
			.map(response => response.json().map(itemData => ItemDataPresentation.fromJSON(itemData))).toPromise();
	}

	public getItemList(
		name: string,
		colors: Color[],
		sizes: Size[],
		cost: { min: number, max: number },
		range: number,
		currentPage: number = 1
	): Promise<ItemDataSearch> {
		let colorNames: any = colors.map(c => c.name);

		let params = 'name=' + name +
			'&colors=' + JSON.stringify(colors.map(c => Color.toJSON(c))) +
			'&sizes=' + JSON.stringify(sizes.map(s => Size.toJSON(s))) +
			'&minCost=' + JSON.stringify(cost.min) +
			'&maxCost=' + JSON.stringify(cost.max) + 
			'&range=' + JSON.stringify(range) + 
			'&currentPage=' + JSON.stringify(currentPage);

		return this._http.get('SearchItemList?' + params, '')
			.map(response =>
				ItemDataSearch.fromJSON(response.json())
			).toPromise();
	}

}
