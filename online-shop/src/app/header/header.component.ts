import { Component, OnInit, ElementRef } from '@angular/core';
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

	private onClick = (e) => {
		if (!this._elementRef.nativeElement.querySelector('.user_wishlist').contains((e as any).target)) {
			this._elementRef.nativeElement.querySelector('.user_wishlist').classList.remove('user_wishlist--open');
		}
		if (!this._elementRef.nativeElement.querySelector('.user_cart').contains((e as any).target)) {
			this._elementRef.nativeElement.querySelector('.user_cart').classList.remove('user_cart--open');
		}
		if (
			!this._elementRef.nativeElement.querySelector('.navigation--smart').contains((e as any).target) &&
			!this._elementRef.nativeElement.querySelector('.header-hamburger').contains((e as any).target)
		) {
			this._elementRef.nativeElement.querySelector('.navigation--smart').classList.remove('navigation--open');
		}
		
	}

	constructor(
		private _elementRef: ElementRef,
		private _router: Router,
		private _userData: UserDataService
	) {
		this._userData.getUserWishlist().subscribe(itemList => {
			this._wishlistItems = itemList;
		});

		this._userData.getUserCart().subscribe(itemList => {
			this._cartItems = itemList;
		})
	}

	ngOnInit() {
		this._wishListItemsVM = this._elementRef.nativeElement.querySelector('.user_wishlist');
		Ps.initialize(
			this._wishListItemsVM.querySelector('.user_wishlist-item_list')
		);

		this._cartItemsVM = this._elementRef.nativeElement.querySelector('.user_cart');
		Ps.initialize(
			this._cartItemsVM.querySelector('.user_cart-item_list')
		);
	}
	ngAfterViewInit() {
		window.addEventListener('click', this.onClick);
	}
	ngOnDestroy() {
		window.removeEventListener('click', this.onClick);
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
		this._wishListItemsVM.classList.toggle('user_wishlist--open');
		this._cartItemsVM.classList.remove('user_cart--open');
	}
	public onCartBtnToggle(): void {
		this._cartItemsVM.classList.toggle('user_cart--open');
		this._wishListItemsVM.classList.remove('user_wishlist--open');
	}

}
