import { Component, OnInit, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ItemColorService } from "app/_services/item-color/item-color.service";
import { Color } from "app/_model/color";
import { Size } from "app/_model/size";

declare var Ps: any;

@Component({
	selector: 'select-item-size',
	templateUrl: './select-item-size.component.html',
	styleUrls: ['./select-item-size.component.scss']
})
export class SelectItemSizeComponent implements OnInit {

	@Input() sizes: Size[];
	@Input() selectedSize: Size;

	@Output() onSelectSize: EventEmitter<Size> = new EventEmitter<Size>();

	private _sizeSelectVM;

	private onClick = (e) => {
		if (!this._elementRef.nativeElement.contains((e as any).target)) {
			this._elementRef.nativeElement.querySelector('.select').classList.remove('select--active');
		}
	}

	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
		this._sizeSelectVM = this._elementRef.nativeElement.querySelector('.select--size');
	}
	ngAfterViewInit() {
		window.addEventListener('click', this.onClick);
	}
	ngOnDestroy() {
		window.removeEventListener('click', this.onClick);
	}

	public onSizeSelect(size: Size): void {
		this._sizeSelectVM.classList.remove('select--active');

		this.onSelectSize.emit(size);
	}

	public onSizeSelectClicked(): void {
		this._sizeSelectVM.classList.toggle('select--active');
	}

	public isSizeSelected(size: Size): boolean {
		return size === this.selectedSize;
	}

}
