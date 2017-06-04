import { Injectable } from '@angular/core';
import { Color } from "app/_model/color";
import { Item } from "app/_model/item";

@Injectable()
export class ItemColorService {

	private _itemList: { item: Item, colors: Color[] }[] = [];

	constructor() { }

	public getColorsByItem(item: Item): Color[] {
		return this._itemList.find( i => i.item.id === item.id).colors;
	}

	public addItemColors(item, colors: Color[]): void {
		this._itemList.push({
			item: item,
			colors: colors
		});
	}

	public getClassByColor(color: Color): string {
		switch (color.name){
			case 'white': return 'white';
			case 'black': return 'black';
			case 'red': return 'red';
			case 'blue': return 'blue';
			case 'green': return 'green';
			case 'eggplant': return 'eggplant';
			default: return 'multicolor';
		}
	}

}
