import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { ColorService } from "app/_services/color.service";
import { Color } from "app/_model/color";

declare var Ps: any;

@Component({
	selector: 'select-item-color',
	templateUrl: './select-item-color.component.html',
	styleUrls: ['./select-item-color.component.scss']
})
export class SelectItemColorComponent implements OnInit {

	
	@Input() colors: Color[];

	@Output() selectedColor: EventEmitter<Color> = new EventEmitter<Color>();
	
	public _selectedColor: Color;
	private _colorSelectVM;

	private onClick = (e) => {
		if (!this._elementRef.nativeElement.contains((e as any).target)) {
			this._elementRef.nativeElement.querySelector('.select').classList.remove('select--active');
		}
	}

	constructor(
		private _elementRef: ElementRef,
		private _colorService: ColorService
	) { }

	ngOnInit() {
		this._selectedColor = this.colors.length > 0 ? this.colors[0] : null;
		this.selectedColor.emit(this._selectedColor);

		this._colorSelectVM = this._elementRef.nativeElement.querySelector('.select--color');

		//Ps.initialize(this._colorSelectVM.querySelector('.select-value_list'));
	}
	ngAfterViewInit() {
		window.addEventListener('click', this.onClick);
	}
	ngOnDestroy() {
		window.removeEventListener('click', this.onClick);
	}

	public onColorSelect(color: Color): void {
		this._selectedColor = color;
		this._colorSelectVM.classList.remove('select--active');

		this.selectedColor.emit(this._selectedColor);
	}

	public onColorSelectClicked(): void {
		this._colorSelectVM.classList.toggle('select--active');
	}

	public getClassByColor(color: Color): string {
		return this._colorService.getClassByColor(color);
	}
	public isColorSelected(color: Color): boolean {
		return color.name === this._selectedColor.name;
	}


}
