import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Size } from "app/_model/size";

@Component({
	selector: 'sizepicker',
	templateUrl: './sizepicker.component.html',
	styleUrls: ['./sizepicker.component.scss']
})
export class SizepickerComponent implements OnInit {

	@Input() sizes: Size[];

	@Output() selectedSizes: EventEmitter<Size[]> = new EventEmitter<Size[]>();

	private _selectedSizes: Size[] = [];

	constructor() { }

	ngOnInit() {
	}


	public onSizeSelect(size: Size): void {
		let selectedSize = this._selectedSizes.find(s => s.equals(size));
		if (selectedSize) {
			this._selectedSizes = this._selectedSizes.filter(s => s !== selectedSize);
		} else {
			this._selectedSizes.push(size);
		}
		this.selectedSizes.emit(this._selectedSizes);
	}

	public isSizeSelected(size: Size): boolean {
		return (this._selectedSizes.find(s => s.equals(size)) != undefined);
	}

}
