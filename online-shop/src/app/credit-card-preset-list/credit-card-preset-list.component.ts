import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { CreditCard } from "app/_model/credit-card";

declare var Ps: any;

@Component({
	selector: 'credit-card-preset-list',
	templateUrl: './credit-card-preset-list.component.html',
	styleUrls: ['./credit-card-preset-list.component.scss']
})
export class CreditCardPresetListComponent implements OnInit {

	@Input() presetList: CreditCard[] = [];

	private _updateScrollInterval: any = null;

	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		Ps.initialize(this._elementRef.nativeElement.querySelector('.credit_card_preset_list-presets'));
		this._updateScrollInterval = setInterval(() => {
			Ps.update(this._elementRef.nativeElement.querySelector('.credit_card_preset_list-presets'));
		}, 150);
	}

	ngOnDestroy() {
		clearInterval(this._updateScrollInterval);
	}

}
