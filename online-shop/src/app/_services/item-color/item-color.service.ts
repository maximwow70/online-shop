import { Injectable } from '@angular/core';
import { Color } from "app/_model/color";
import { Item } from "app/_model/item";

@Injectable()
export class ItemColorService {

	private _itemList: { item: Item, colors: Color[] }[] = [];

	constructor() {
		this.addItemColors(
			new Item('12qwe234', 'T-Shirt', '', ['item5.png']),
			[new Color('eggplant'), new Color('white'), new Color('black')]
		);
		this.addItemColors(
			new Item('123e23q4', 'T-Shirt', '', ['item5.png']),
			[new Color('red'), new Color('black')]
		);
		this.addItemColors(
			new Item('asdaqwe', 'T-Shirt', '', ['item5.png']),
			[new Color('green'), new Color('white'), new Color('black')]
		);
		this.addItemColors(
			new Item('123qweaq4', 'T-Shirt', '', ['item5.png']),
			[new Color('green'), new Color('white'), new Color('black')]
		);
	}

	public getColorsByItem(item: Item): Color[] {
		let findedItem = this._itemList.find( i => i.item.id === item.id);
		return findedItem ? findedItem.colors : [];
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
			case 'dark grey': return 'dark_grey';
			case 'eggplant': return 'eggplant';
			case 'military': return 'military';
			default: return 'multicolor';
		}
	}

}
