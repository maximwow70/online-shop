import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'sizepicker',
	templateUrl: './sizepicker.component.html',
	styleUrls: ['./sizepicker.component.scss']
})
export class SizepickerComponent implements OnInit {

	@Input() sizes: string[];

	@Output() selectedSizes: EventEmitter<string[]> = new EventEmitter<string[]>();
	
	private _selectedSizes: string[] = [];

	constructor() { }

	ngOnInit() {
	}


	public onSizeSelect(size: string): void {
		let selectedSize = this._selectedSizes.find(s => s === size);
		if (selectedSize){
			this._selectedSizes = this._selectedSizes.filter(s => s !== selectedSize);
		} else {
			this._selectedSizes.push(size);
		}
		this.selectedSizes.emit(this._selectedSizes);
	}

	public isSizeSelected(size: string): boolean {
		return (this._selectedSizes.find(s => s === size) != undefined);
	}

}
