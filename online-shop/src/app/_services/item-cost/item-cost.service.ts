import { Injectable } from '@angular/core';
import { Item } from "app/_model/item";

@Injectable()
export class ItemCostService {

	private _itemList: {item: Item, cost: number}[] = [];

	constructor() { }

	public setCostToItem(item: Item, cost: number): void {
		this._itemList.push({
			item: item,
			cost: cost
		});
	}	

	public getCostByItem(item: Item): number {
		return this._itemList.find(i => i.item.id === item.id).cost;
	}
}
