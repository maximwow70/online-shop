import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Item } from "app/_model/item";
import { ItemColorService } from "app/_services/item-color/item-color.service";
import { Color } from "app/_model/color";
import { ActivatedRoute, Router } from "@angular/router";
import { UserDataService } from "app/_services/user-data/user-data.service";

declare var Ps: any;

@Component({
	selector: 'user-wishlist',
	templateUrl: './user-wishlist.component.html',
	styleUrls: ['./user-wishlist.component.scss']
})
export class UserWishlistComponent implements OnInit {

	private _isItemListReady = false;

	private _itemList: Item[] = [];

	constructor(
		private _elementRef: ElementRef,
		private _router: Router,
		private _userData: UserDataService,
		private _itemColor: ItemColorService
	) { }

	ngOnInit() {
		// Ps.initialize(
		// 	this._elementRef.nativeElement.querySelector('.user_wishlist-item_list')
		// );

		this._userData.getUserWishlist().subscribe(itemList => {
			let items = [];
			for (let item = 0; item < itemList.length; item++){
				items.push(Item.fromObject(itemList[item]));
			}
			this._itemList = items;

			setTimeout(
				() => this._isItemListReady = true,
				2000
			);
		})
	}

	public getClassByColor(color: Color): string {
		return this._itemColor.getClassByColor(color);
	}
	public getColorsByItem(item: Item): Color[] {
		return [];
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
