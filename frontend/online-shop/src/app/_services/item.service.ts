import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions } from "@angular/http";
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemData } from "app/_model/item-data";
import { ItemDataPresentation } from "app/_model/item-data-presentation";
import { Size } from "app/_model/size";
import { ItemDataSearch } from "app/_model/item-data-search";
import { SortType } from "app/_model/sort-type";

import 'rxjs';
import { ApplicationService } from '../application.service';

@Injectable()
export class ItemService {

	constructor(
		private _http: Http,
		private _appliaction: ApplicationService
	) { }


	public getItemList(
		name: string,
		colors: Color[],
		sizes: Size[],
		cost: { min: number, max: number },
		range: number,
		currentPage: number = 1,
		sortType: SortType,
		isSortByIncrease: boolean = true
	): Promise<ItemDataSearch> {
		
		let params = 'name=' + name +
			'&colors=' + JSON.stringify(colors.map(c => Color.toJSON(c).id)) +
			'&sizes=' + JSON.stringify(sizes.map(s => Size.toJSON(s).id)) +
			'&minCost=' + JSON.stringify(cost.min) +
			'&maxCost=' + JSON.stringify(cost.max) +
			'&range=' + JSON.stringify(range) +
			'&currentPage=' + JSON.stringify(currentPage) +
			'&sortType=' + JSON.stringify(sortType.id) + 
			'&isSortByIncrease=' + JSON.stringify(isSortByIncrease);

		return this._http.get(`${this._appliaction.apiBase}item?${params}`, '')
			.map(response =>
				ItemDataSearch.fromJSON(response.json())
			).toPromise();
	}

	public getItem(id: string): Promise<ItemData> {
		return this._http.get(`${this._appliaction.apiBase}item/${id}`).map(res =>
			ItemData.fromJSON(res.json())
		).toPromise();
	}

	public getMaxCost(): Promise<number> {
		return new Promise<number>(resolve => {
			resolve(10000);
		});
	}

	public getSortTypes(): Promise<SortType[]> {
		// return this._http.get('GetSortTypes', '').map(res => 
		// 	res.json().map(st => SortType.fromJSON(st)) 
		// ).toPromise();
		return new Promise<SortType[]>(resolve => {
			resolve([
				new SortType(1, 'name'),
				new SortType(2, 'cost')
			]);
		});
	}

}
