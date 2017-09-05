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
import { Size } from "app/_model/size";

@Component({
	selector: 'online-shop',
	templateUrl: './online-shop.component.html',
	styleUrls: ['./online-shop.component.scss']
})
export class OnlineShopComponent implements OnInit {

	private _onlineShop: OnlineShop;


	private _pages: number = null;
	private _selectedPage: number = null;

	private _searchParams: { name: string, colors: Color[], sizes: Size[], cost: { min: number, max: number } } = null;
	private _itemsRange: number = 3;

	public get pages(): number {
		return this._pages;
	}
	public get selectedPage(): number {
		return this._selectedPage;
	}

	public get itemsRange(): number {
		return this._itemsRange;
	}

	public get itemList(): ItemDataPresentation[] {
		return this._onlineShop.itemList;
	}


	constructor(
		private _elementRef: ElementRef,
		private _router: Router,
		private _itemList: ItemListService,
		private _itemColor: ItemColorService,
		private _itemCost: ItemCostService
	) {
		this._onlineShop = new OnlineShop();

		this.loadItemList();
	}

	ngOnInit() {
	}

	public loadItemList(): void {
		this._itemList.getItemList().then(itemDataList =>
			this._onlineShop.setItemList(itemDataList)
		);
	}
	public loadItemListByParams(): void {
		this._itemList.getItemListByParams(
			this._searchParams ? this._searchParams.name : null,
			this._searchParams ? this._searchParams.colors : null,
			this._searchParams ? this._searchParams.sizes : null,
			this._searchParams ? this._searchParams.cost : null,
			this._selectedPage
		).then(itemList => {
			this._onlineShop.setItemList(itemList);
		});
	}

	public onSearch(params: { name: string, colors: Color[], sizes: Size[], cost: { min: number, max: number } }): void {
		this._searchParams = params;
		this.loadItemListByParams();
	}

	public onPageSelected(page: number): void {
		this._selectedPage = page;
		this.loadItemListByParams();
	}

	public onItemLiked(item: Item): void {
		console.log(item);
	}
	public onItemClicked(item: Item): void {
		this._router.navigate(['/products', item.id]);
	}

	public getClassByColor(color: Color): string {
		return this._itemColor.getClassByColor(color);
	}


}
