import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Color } from "app/_model/color";
import { ColorService } from "app/_services/color.service";

@Component({
	selector: 'colorpicker',
	templateUrl: './colorpicker.component.html',
	styleUrls: ['./colorpicker.component.scss']
})
export class ColorpickerComponent implements OnInit {
	
	@Input() colors: Color[];

	@Output() selectedColors: EventEmitter<Color[]> = new EventEmitter<Color[]>();

	private _selectedColors: Color[] = [];

	constructor(
		private _itemColor: ColorService
	) { }

	ngOnInit() {
	}
	
	public onColorSelect(color: Color): void {
		let selectedColor = this._selectedColors.find(c => c.name === color.name);
		if (selectedColor){
			this._selectedColors = this._selectedColors.filter(c => c.name !== selectedColor.name);
		} else {
			this._selectedColors.push(color);
		}
		this.selectedColors.emit(this._selectedColors);
	}
	public isColorSelected(color: Color): boolean {
		return (this._selectedColors.find(c => c.name === color.name) != undefined);
	}

	public getClassByColor(color: Color): string {
		return this._itemColor.getClassByColor(color);
	}
	
}
