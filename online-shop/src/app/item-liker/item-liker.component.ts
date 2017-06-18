import { Component, OnInit } from '@angular/core';
import { ItemDataPresentation } from "app/_model/item-data-presentation";
import { ItemListService } from "app/_services/item-list/item-list.service";
import { ItemColorService } from "app/_services/item-color/item-color.service";
import { Color } from "app/_model/color";
import { Item } from "app/_model/item";

@Component({
	selector: 'item-liker',
	templateUrl: './item-liker.component.html',
	styleUrls: ['./item-liker.component.scss']
})
export class ItemLikerComponent implements OnInit {


	private _itemList: ItemDataPresentation[] = [];

	private _itemListLiked: ItemDataPresentation[] = [];
	private _itemListDisliked: ItemDataPresentation[] = [];

	private _listLength: number;
	constructor(
		private _itemListData: ItemListService,
		private _itemColor: ItemColorService
	) {
		
	}

	ngOnInit() {
		this.getItemList();
	}


	public onItemLiked(): void {
		if (this._itemList.length > 0) {
			let likedItem = this._itemList.pop();
			this._itemListLiked.push(likedItem);
		}
		if (this._itemListLiked.length > this._listLength){
			this._itemListLiked.shift();
		}
	}
	public onItemDisliked(): void {
		if (this._itemList.length > 0) {
			let dislikedItem = this._itemList.pop();
			this._itemListDisliked.push(dislikedItem);
		}
		if (this._itemListDisliked.length > this._listLength){
			this._itemListDisliked.shift();
		}
	}
	public onRefresh(): void {
		this.getItemList();
	}

	public getItemList(): void {
		let that = this;

		this._itemListData.getItemList().subscribe(
			itemDataList => {
				let itemList = [];
				for (let i = 0; i < itemDataList.length; i++) {
					itemList.push(ItemDataPresentation.fromObject(itemDataList[i]));
				}
				that._itemList = itemList;

				that._listLength = that._itemList.length;
			}
		);
	}
	public getClassByColor(color: Color): string {
		return this._itemColor.getClassByColor(color);
	}

	public get itemListData(): ItemDataPresentation[] {
		return this._itemList;
	}
	public get itemListLiked(): ItemDataPresentation[] {
		return this._itemListLiked;
	}
	public get itemListDisliked(): ItemDataPresentation[] {
		return this._itemListDisliked;
	}
	public get canLiked(): boolean {
		return this._itemList.length > 0;
	}

}
