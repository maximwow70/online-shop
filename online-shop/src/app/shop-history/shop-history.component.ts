import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'shop-history',
	templateUrl: './shop-history.component.html',
	styleUrls: ['./shop-history.component.scss']
})
export class ShopHistoryComponent implements OnInit {

	private _photoUrls: string[] = [];
	constructor() {
		this._photoUrls.push('assets/shop-history/02.jpg');
		this._photoUrls.push('assets/shop-history/05.jpg');
		this._photoUrls.push('assets/shop-history/man1.jpg');
		this._photoUrls.push('assets/shop-history/06.jpg');
		this._photoUrls.push('assets/shop-history/shop22.jpg');
		this._photoUrls.push('assets/shop-history/shop11.jpg');
	 }

	ngOnInit() {
	}

	public get photoUrls(): string[] {
		return this._photoUrls;
	}
}
