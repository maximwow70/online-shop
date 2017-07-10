import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Item } from "app/_model/item";
import { Router } from "@angular/router";
import { ItemColorService } from "app/_services/item-color/item-color.service";
import { Color } from "app/_model/color";
import { UserDataService } from "app/_services/user-data/user-data.service";

declare var Ps: any;

@Component({
	selector: 'user-cart',
	templateUrl: './user-cart.component.html',
	styleUrls: ['./user-cart.component.scss']
})

export class UserCartComponent implements OnInit {

	private _itemList: Item[] = [];

	private _isItemListReady: boolean = false;

	constructor(
		private _elementRef: ElementRef,
		private _router: Router,
		private _userData: UserDataService,
		private _itemColor: ItemColorService
	) { }

	ngOnInit() {
		this._userData.getUserCart().subscribe(itemList => {
			let items = [];
			for (let item = 0; item < itemList.length; item++){
				items.push(Item.fromObject(itemList[item]));
			}
			this._itemList = items;

			setTimeout(
				() => this._isItemListReady = true,
				2000
			);
		});
	}

	public getClassByColor(color: Color): string {
		return this._itemColor.getClassByColor(color);
	}
	public getColorsByItem(item: Item): Color[] {
		let colors = this._itemColor.getColorsByItem(item)
		return [colors[0]];
	}

	public onItemClicked(item: Item): void {
		this._router.navigate(['/products', item.id]);
	}

	public get itemList(): Item[] {
		return this._itemList;
	}
	public get isItemListReady(): boolean {
		return this._isItemListReady;
	}

}
