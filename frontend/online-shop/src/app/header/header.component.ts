import { Component, OnInit, ElementRef } from '@angular/core';
import { Item } from "app/_model/item";
import { Router } from "@angular/router";
import { UserDataService } from "app/_services/user-data.service";

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

	private _clickListener = (e) => {
		if (!this._elementRef.nativeElement.querySelector('.user_wishlist').contains((e as any).target)) {
			this._elementRef.nativeElement.querySelector('.user_wishlist').classList.remove('user_wishlist--open');
		}
		if (!this._elementRef.nativeElement.querySelector('.user_cart').contains((e as any).target)) {
			this._elementRef.nativeElement.querySelector('.user_cart').classList.remove('user_cart--open');
		}
		if (
			!this._elementRef.nativeElement.querySelector('.navigation--smart').contains((e as any).target)
			&& !this._elementRef.nativeElement.querySelector('.header--hamburger-button').contains((e as any).target)
		) {
			this._elementRef.nativeElement.querySelector('.navigation--smart').classList.remove('navigation--open');
		}
	}

	public get wishlistItems(): Item[] {
		return this._wishlistItems;
	}
	public get cartItems(): Item[] {
		return this._cartItems;
	}

	constructor(
		private _elementRef: ElementRef,
		private _router: Router,
		private _userData: UserDataService
	) {
		this._userData.getUserWishlist().subscribe(itemList => this._wishlistItems = itemList);
		this._userData.getUserCart().subscribe(itemList => this._cartItems = itemList);
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		window.addEventListener('click', this._clickListener);
		
		Ps.initialize(
			this._elementRef.nativeElement.querySelector('.user_wishlist-item_list')
		);
		Ps.initialize(
			this._elementRef.nativeElement.querySelector('.user_cart-item_list')
		);
	}

	ngOnDestroy() {
		window.removeEventListener('click', this._clickListener);
	}

	public selectItem(item: Item): void {
		this._router.navigate(['/products', item.id]);
	}
}
