import { Component, OnInit } from '@angular/core';
import { ItemDataPresentation } from "app/_model/item-data-presentation";
import { ItemListService } from "app/_services/item-list/item-list.service";
import { ItemColorService } from "app/_services/item-color/item-color.service";
import { Color } from "app/_model/color";

@Component({
	selector: 'item-liker',
	templateUrl: './item-liker.component.html',
	styleUrls: ['./item-liker.component.scss']
})
export class ItemLikerComponent implements OnInit {


	private _itemList: ItemDataPresentation[] = [];

	constructor(
		private _itemListData: ItemListService,
		private _itemColor: ItemColorService
	) {

	}

	ngOnInit() {
		let that = this;

		this._itemListData.getItemList().subscribe(
			itemDataList => {
				let itemList = [];
				for (let i = 0; i < itemDataList.length; i++){
					itemList.push(ItemDataPresentation.fromObject(itemDataList[i]));
				}
				that._itemList = itemList;
			}
		);
	}

	public getClassByColor(color: Color): string {
		return this._itemColor.getClassByColor(color);
	}

	public get itemListData(): ItemDataPresentation[] {
		return this._itemList;
	}

}
