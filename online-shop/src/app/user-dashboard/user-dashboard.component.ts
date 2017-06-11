import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserDataService } from "app/_services/user-data/user-data.service";
import { User } from "app/_model/user";
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemColorService } from "app/_services/item-color/item-color.service";

@Component({
	selector: 'user-dashboard',
	templateUrl: './user-dashboard.component.html',
	styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
	
	private _userId: string;
	
	private _user: User;
	private _wishlistItems: Item[] = [];
	private _cartItems: Item[] = [];
	
	private _isActiveCart: boolean = true;

	constructor(
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
		private _userData: UserDataService,
		private _itemColor: ItemColorService
	) { }

	ngOnInit() {
		this._userId = this._activatedRoute.snapshot.paramMap.get('id');

		this._userData.getUserData(this._userId).subscribe(user => {
			this._user = User.fromObject(user);
		});
		this._userData.getUserWishlist().subscribe(itemList => {
			let items = [];
			for (let item = 0; item < itemList.length; item++){
				items.push(Item.fromObject(itemList[item]));
			}
			this._wishlistItems = items;
		})
		this._userData.getUserCart().subscribe(itemList => {
			let items = [];
			for (let item = 0; item < itemList.length; item++){
				items.push(Item.fromObject(itemList[item]));
			}
			this._cartItems = items;
		});
	}


	public get user(): User {
		return this._user;
	}

	public get wishlistItems(): Item[] {
		return this._wishlistItems;
	}
	public get cartItems(): Item[] {
		return this._cartItems;
	}

	public get isActiveCart(): boolean {
		return this._isActiveCart;
	}

	public onWishlistView(): void {
		this._isActiveCart = false;
	}
	public onCartView(): void {
		this._isActiveCart = true;
	}

}
