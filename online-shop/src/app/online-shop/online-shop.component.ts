import { Component, OnInit, ElementRef } from '@angular/core';

import { OnlineShop } from "app/_model/online-shop";
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";

import { ItemColorService } from "app/_services/item-color/item-color.service";
import { ItemCostService } from "app/_services/item-cost/item-cost.service";

import { Select } from "app/ui/select/select";
import { ItemListService } from "app/_services/item-list/item-list.service";
import { Route, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ItemData } from "app/_model/item-data";

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

		this.getItemList();
	}

	ngOnInit() {
	}

	public getItemList(): void {
		let that = this;

		this._itemList.getItemList().subscribe(
			itemDataList => {
				for (let i = 0; i < itemDataList.length; i++){
					that._onlineShop.addItemData(
						ItemData.fromObject(itemDataList[i])
					);
				}
			}
		);

	}

	public getClassByColor(color: Color): string {
		//console.log(color);
		return this._itemColor.getClassByColor(color);
	}


	public get itemList(): { item: Item, cost: number, colors: Color[] }[] {
		return this._onlineShop.itemList;
	}


	public onItemClicked(item: Item): void {
		this._router.navigate(['/products', item.id]);
	}

}
