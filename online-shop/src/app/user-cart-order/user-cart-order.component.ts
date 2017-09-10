import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemColorService } from "app/_services/item-color.service";
import { Router } from "@angular/router";

@Component({
	selector: 'user-cart-order',
	templateUrl: './user-cart-order.component.html',
	styleUrls: ['./user-cart-order.component.scss']
})
export class UserCartOrderComponent implements OnInit {

	@Input() itemList: Item[] = [];
	@Input() isItemListReady: boolean = false;

	@Output() onProceedToCheckout: EventEmitter<void> = new EventEmitter<void>();

	constructor(
		private _itemColor: ItemColorService,
		private _router: Router
	) { }

	ngOnInit() {
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

	public proceedToCheckout(): void {
		this.onProceedToCheckout.emit();
	}

}
