import { Component, OnInit, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ItemColorService } from "app/_services/item-color/item-color.service";
import { Color } from "app/_model/color";

declare var Ps: any;

@Component({
	selector: 'select-item-size',
	templateUrl: './select-item-size.component.html',
	styleUrls: ['./select-item-size.component.scss']
})
export class SelectItemSizeComponent implements OnInit {

	@Input() sizes: string[];

	@Output() selectedSize: EventEmitter<string> = new EventEmitter<string>();

	public _selectedSize: string;
	private _sizeSelectVM;

	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
		this._selectedSize = this.sizes[0];
		this.selectedSize.emit(this._selectedSize);

		this._sizeSelectVM = this._elementRef.nativeElement.querySelector('.select--size');

		//Ps.initialize(this._sizeSelectVM.querySelector('.select-value_list'));
	}

	public onSizeSelect(size: string): void {
		this._selectedSize = size;
		this._sizeSelectVM.classList.remove('select--active');

		this.selectedSize.emit(this._selectedSize);
	}

	public onSizeSelectClicked(): void {
		this._sizeSelectVM.classList.toggle('select--active');
	}

	public isSizeSelected(size: string): boolean {
		return size === this._selectedSize;
	}

}
