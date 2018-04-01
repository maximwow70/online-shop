import { Component, OnInit, ElementRef } from '@angular/core';

declare var $: any;

@Component({
	selector: 'shop-features',
	templateUrl: './shop-features.component.html',
	styleUrls: ['./shop-features.component.scss']
})
export class ShopFeaturesComponent implements OnInit {

	private _featureNumbers: number[] = [
		6,
		25,
		9,
		3
	];
	public featureNumbers: number[] = [];
	constructor(
		private _elementRef: ElementRef
	) {
		this.featureNumbers = [0, 0, 0, 0];
	}

	ngOnInit() {

	}

	ngAfterViewInit() {
		let that = this;
		let element = this._elementRef.nativeElement.querySelector('.shop_features-statistic');
		let initTopScroll = element.offsetTop;

		window.addEventListener('scroll', initMagicNumbers);

		function initMagicNumbers() {
			if (window.pageYOffset > initTopScroll) {
				for (let i = 0; i < that.featureNumbers.length; i++) {
					increaseNumberFromArray(i);
				}
				window.removeEventListener('scroll', initMagicNumbers);
			}
		}

		function increaseNumberFromArray(index: number): void {
			that.featureNumbers[index] = 0;
			let interval = setInterval(function () {
				if (that.featureNumbers[index] >= that._featureNumbers[index]) {
					clearInterval(interval);
				} else {
					that.featureNumbers[index]++;
				}
			}, 1000 / that._featureNumbers[index]);
		}

		let animateElement = this._elementRef.nativeElement.querySelector('.shop_features-statistic_list');
		$(animateElement).animated('flipInX');

		let animateFeatures = this._elementRef.nativeElement.querySelectorAll('.shop_features-shop_feature');
		for(let i = 0; i < animateFeatures.length; i++){
			$(animateFeatures[i]).animated('zoomIn');
		}
	}

	ngOnDestroy() {
	}

}
