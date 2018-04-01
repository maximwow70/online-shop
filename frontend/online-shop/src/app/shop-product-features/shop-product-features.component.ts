import { Component, OnInit, ElementRef } from '@angular/core';

declare var $: any;

@Component({
	selector: 'shop-product-features',
	templateUrl: './shop-product-features.component.html',
	styleUrls: ['./shop-product-features.component.scss']
})
export class ShopProductFeaturesComponent implements OnInit {

	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
	}


	ngAfterViewInit() {
		let animateElementLeft = this._elementRef.nativeElement.querySelector('.shop_product_features-item_list');
		$(animateElementLeft).animated('fadeInLeft');

		let animateElementRight = this._elementRef.nativeElement.querySelector('.shop_product_features-features');
		$(animateElementRight).animated('fadeInRight');
	}

}
