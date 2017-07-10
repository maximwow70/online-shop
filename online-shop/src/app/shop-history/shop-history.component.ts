import { Component, OnInit, ElementRef } from '@angular/core';

declare var $: any;

@Component({
	selector: 'shop-history',
	templateUrl: './shop-history.component.html',
	styleUrls: ['./shop-history.component.scss']
})
export class ShopHistoryComponent implements OnInit {

	private _photoUrls: string[] = [];
	constructor(
		private _elementRef: ElementRef
	) {
		this._photoUrls.push('assets/shop-history/02.jpg');
		this._photoUrls.push('assets/shop-history/05.jpg');
		this._photoUrls.push('assets/shop-history/man1.jpg');
		this._photoUrls.push('assets/shop-history/06.jpg');
		this._photoUrls.push('assets/shop-history/shop22.jpg');
		this._photoUrls.push('assets/shop-history/shop11.jpg');
	 }

	ngOnInit() {
	}

	ngAfterViewInit() {
		let elements = this._elementRef.nativeElement.querySelectorAll('.shop_history-photos, .shop_history-history');
		for (let i = 0; i < elements.length; i++){
			if (i % 2 === 0){
				$(elements[i]).animated('fadeInLeft', 'fadeOutLeft');
			} else {
				$(elements[i]).animated('fadeInRight', 'fadeOutRight');
			}
		}
	}

	public get photoUrls(): string[] {
		return this._photoUrls;
	}
}
