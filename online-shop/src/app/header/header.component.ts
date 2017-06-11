import { Component, OnInit, ElementRef } from '@angular/core';
import { Select } from "app/ui/select/select";
import { Item } from "app/_model/item";
import { Router } from "@angular/router";
import { UserDataService } from "app/_services/user-data/user-data.service";

declare var Ps: any;

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	private _wishlistItems: Item[] = [];
	private _cartItems: Item[] = [];
	
	private _wishListItemsVM;
	private _cartItemsVM;
	constructor(
		private _elementRef: ElementRef,
		private _router: Router,
		private _userData: UserDataService
	) {
		this._userData.getUserWishlist().subscribe(itemList => {
			let items: Item[] = [];
			for (let item = 0; item < itemList.length; item++){
				items.push(Item.fromObject(itemList[item]));
			}
			this._wishlistItems = items;
		});

		this._userData.getUserCart().subscribe(itemList => {
			let items: Item[] = [];
			for (let item = 0; item < itemList.length; item++){
				items.push(Item.fromObject(itemList[item]));
			}
			this._cartItems = items;
		})
	}

	ngOnInit() {
		this._wishListItemsVM = this._elementRef.nativeElement.querySelector('.wishlist');
		Ps.initialize(
			this._wishListItemsVM.querySelector('.wishlist-item_list')
		);

		this._cartItemsVM = this._elementRef.nativeElement.querySelector('.cart');
		Ps.initialize(
			this._cartItemsVM.querySelector('.cart-item_list')
		);
	}

	public onItemClicked(item: Item): void {
		this._router.navigate(['/products', item.id]);
	}


	public get wishlistItems(): Item[] {
		return this._wishlistItems;
	}
	public get cartItems(): Item[] {
		return this._cartItems;
	}


	public onWishlistBtnToggle(): void {
		this._wishListItemsVM.classList.toggle('wishlist--open');
		this._cartItemsVM.classList.remove('cart--open');
	}
	public onCartBtnToggle(): void {
		this._cartItemsVM.classList.toggle('cart--open');
		this._wishListItemsVM.classList.remove('wishlist--open');
	}

}
