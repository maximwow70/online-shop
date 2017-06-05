import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Item } from "app/_model/item";
import { ItemService } from "app/_services/item/item.service";

@Component({
	selector: 'item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

	private _item: Item;

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _itemService: ItemService
	) { }

	ngOnInit() {
		let id = this._activatedRoute.snapshot.paramMap.get('id');

		this._itemService.getItem(id).subscribe(
			response => this._item = Item.fromObject(response)
		);
	}

	public get item(): Item {
		return this._item;
	}

}
