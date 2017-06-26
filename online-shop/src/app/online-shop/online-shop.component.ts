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
import { ItemDataPresentation } from "app/_model/item-data-presentation";

@Component({
	selector: 'online-shop',
	templateUrl: './online-shop.component.html',
	styleUrls: ['./online-shop.component.scss']
})
export class OnlineShopComponent implements OnInit {

	private _onlineShop: OnlineShop;

	private _selectedName: string = '';

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
				let currenItemDataList = [];
				for (let i = 0; i < itemDataList.length; i++) {
					currenItemDataList.push(
						ItemDataPresentation.fromObject(itemDataList[i])
					);
				}
				that._onlineShop.setItemList(currenItemDataList);
			}
		);
	}
	public getItemListByParams(name: string, colors: Color[], sizes: string[], cost: {min: number, max: number})
		: void {
		let that = this;

		this._itemList.getItemListByParams(
			name,
			colors,
			sizes,
			cost
		).subscribe(itemDataList => {
			let currenItemDataList = [];
			for (let i = 0; i < itemDataList.length; i++) {
				currenItemDataList.push(
					ItemDataPresentation.fromObject(itemDataList[i])
				);
			}
			that._onlineShop.setItemList(currenItemDataList);
		});
	}

	public getClassByColor(color: Color): string {
		//console.log(color);
		return this._itemColor.getClassByColor(color);
	}


	public get itemList(): ItemDataPresentation[] {
		return this._onlineShop.itemList;
	}


	
	public onSearch(params: {name: string, colors: Color[], sizes: string[], cost: {min: number, max: number}}): void {
		this.getItemListByParams(
			params.name,
			params.colors,
			params.sizes,
			params.cost
		);
	}

	public onItemLiked(item: Item): void {
		console.log(item);
	}
	public onItemClicked(item: Item): void {
		this._router.navigate(['/products', item.id]);
	}

}
