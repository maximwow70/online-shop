import { Component, OnInit, ElementRef } from '@angular/core';

import { OnlineShop } from "app/_model/online-shop";
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";

import { ItemColorService } from "app/_services/item-color/item-color.service";
import { ItemCostService } from "app/_services/item-cost/item-cost.service";

import { Select } from "app/ui/select/select";
import { ItemListService } from "app/_services/item-list/item-list.service";
import { Route, Router } from "@angular/router";

@Component({
	selector: 'online-shop',
	templateUrl: './online-shop.component.html',
	styleUrls: ['./online-shop.component.scss']
})
export class OnlineShopComponent implements OnInit {

	private _onlineShop: OnlineShop;

	constructor(
		private _elementRef: ElementRef,
		private _router: Router,
		private _itemList: ItemListService,
		private _itemColor: ItemColorService,
		private _itemCost: ItemCostService
	) {
		this._onlineShop = new OnlineShop();

		let item1 = new Item('1koqwe23', 'T-Shirt', '', ['item4.png']);
		this._onlineShop.addItem(item1);
		this._itemColor.addItemColors(
			item1,
			[new Color('red'), new Color('green')]
		);
		this._itemCost.setCostToItem(item1, 99);

		let item2 = new Item('1koq233', 'T-Shirt', '', ['item2.png']);
		this._onlineShop.addItem(item2);
		this._itemColor.addItemColors(
			item2,
			[new Color('white'), new Color('red'), new Color('green')]
		);
		this._itemCost.setCostToItem(item2, 19.9);

		let item3 = new Item('1ko2323', 'T-Shirt', '', ['item5.png']);
		this._onlineShop.addItem(item3);
		this._itemColor.addItemColors(
			item3,
			[new Color('eggplant'), new Color('white'), new Color('black')]
		);
		this._itemCost.setCostToItem(item3, 35.4);

		this.getColorsByItem(item3);

		this.getItemList();
	}

	ngOnInit() {
	}

	public getItemList(): void {
		let that = this;
		this._itemList.getItemList().subscribe(
			itemList => {
				for (let item = 0; item < itemList.length; item++) {
					itemList[item] = Item.fromObject(itemList[item]);
				}
				this._onlineShop.setItemList(itemList)
			}
		);
	}

	public getColorsByItem(item: Item): Color[] {
		return this._itemColor.getColorsByItem(item);
	}
	public getClassByColor(color: Color): string {
		return this._itemColor.getClassByColor(color);
	}

	public getCostByItem(item: Item): number {
		return this._itemCost.getCostByItem(item);
	}


	public get itemList(): any {
		return this._onlineShop.itemList;
	}

	public onItemClicked(item: Item): void {
		this._router.navigate(['/products', item.id]);
	}

}
