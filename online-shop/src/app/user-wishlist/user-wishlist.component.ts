import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Item } from "app/_model/item";
import { ItemColorService } from "app/_services/item-color/item-color.service";
import { Color } from "app/_model/color";
import { ActivatedRoute, Router } from "@angular/router";

declare var Ps: any;

@Component({
	selector: 'user-wishlist',
	templateUrl: './user-wishlist.component.html',
	styleUrls: ['./user-wishlist.component.scss']
})
export class UserWishlistComponent implements OnInit {


	@Input() itemList: Item[] = [];

	constructor(
		private _elementRef: ElementRef,
		private _router: Router,
		private _itemColor: ItemColorService
	) { }

	ngOnInit() {
		Ps.initialize(
			this._elementRef.nativeElement.querySelector('.user_wishlist-item_list')
		);
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
