import { Component, OnInit, ElementRef } from '@angular/core';
import { Datapicker } from "app/ui/datapicker/datapicker";

@Component({
	selector: 'items-search',
	templateUrl: './items-search.component.html',
	styleUrls: ['./items-search.component.scss']
})
export class ItemsSearchComponent implements OnInit {

	private _colorpicker: Datapicker;
	private _sizepicker: Datapicker;
	private _costpicker: Datapicker;

	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
		this._colorpicker = new Datapicker(
			this._elementRef.nativeElement.querySelector('.datapicker--colors')
		);

		this._sizepicker = new Datapicker(
			this._elementRef.nativeElement.querySelector('.datapicker--sizes')
		);

		this._costpicker = new Datapicker(
			this._elementRef.nativeElement.querySelector('.datapicker--cost')
		);
	}

}
