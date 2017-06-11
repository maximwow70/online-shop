import { Component, OnInit, Input } from '@angular/core';
import { Item } from "app/_model/item";
import { Router } from "@angular/router";
import { ItemColorService } from "app/_services/item-color/item-color.service";
import { Color } from "app/_model/color";

@Component({
	selector: 'user-cart',
	templateUrl: './user-cart.component.html',
	styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

	@Input() itemList: Item[] = [];

	constructor(
		private _router: Router,
		private _itemColor: ItemColorService
	) { }

	ngOnInit() {
	}

	public getClassByColor(color: Color): string {
		return this._itemColor.getClassByColor(color);
	}
	public getColorsByItem(item: Item): Color[] {
		return this._itemColor.getColorsByItem(item);
	}

	public onItemClicked(item: Item): void {
		this._router.navigate(['/products', item.id]);
	}

}
