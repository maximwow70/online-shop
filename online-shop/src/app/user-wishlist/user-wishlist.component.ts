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

	private _itemList: Item[] = [];
	private _isItemListReady = false;

	public searchItemsName: string = '';
	private _isItemListSortedByNameIncrease: boolean = false;

	private _updateScrollInterval: any;


	public get itemList(): Item[] {
		return this._itemList;
	}
	public get isItemListReady(): boolean {
		return this._isItemListReady;
	}

	public get isItemListSortedByNameIncrease(): boolean {
		return this._isItemListSortedByNameIncrease;
	}

	constructor(
		private _elementRef: ElementRef,
		private _router: Router,
		private _userData: UserDataService,
		private _itemColor: ItemColorService
	) { }

	ngOnInit() {


		this._userData.getUserWishlist().subscribe(itemList => {
			let items = [];
			for (let item = 0; item < itemList.length; item++) {
				items.push(Item.fromObject(itemList[item]));
			}
			this._itemList = items;
			this.onSortByName();

			setTimeout(
				() => {
					this._isItemListReady = true;
					setTimeout(() => {
						let itemListVM = this._elementRef.nativeElement.querySelector('.user_wishlist-item_list');
						Ps.initialize(itemListVM);
						this._updateScrollInterval = setInterval(() => Ps.update(itemListVM), 150);
					});
				},
				2000
			);
		})
	}
	ngOnDestroy() {
		clearInterval(this._updateScrollInterval);
	}

	public isItemShow(item: Item): boolean {
		return item.name.toLowerCase().indexOf(this.searchItemsName.toLowerCase()) !== -1;
	}
	public onSortByName(): void {
		if (this._isItemListSortedByNameIncrease === true) {
			this._itemList.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
		} else {
			this._itemList.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
		}
		this._isItemListSortedByNameIncrease = !this._isItemListSortedByNameIncrease;
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

}
