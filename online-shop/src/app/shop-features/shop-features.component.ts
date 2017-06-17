import { Component, OnInit, ElementRef } from '@angular/core';

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
		let that = this;
		let initTopScroll = 
			this._elementRef.nativeElement.querySelector('.shop_features-statistic')
				.offsetTop;

		window.addEventListener('scroll', initMagicNumbers);

		function initMagicNumbers() {
			if (window.pageYOffset > initTopScroll){
				for (let i = 0; i < that.featureNumbers.length; i++){
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
	}

}
