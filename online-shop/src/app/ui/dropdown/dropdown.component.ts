import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
	selector: 'dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

	@Input() values: any[] = null;

	@Input() onSelectedValueChange: any = null;

	@Output() onValueSelected: EventEmitter<any> = new EventEmitter<any>();

	private _selectedValue: any = null;

	private onClick = (e) => {
		if (!this._elementRef.nativeElement.contains((e as any).target)) {
			this._elementRef.nativeElement.querySelector('.select').classList.remove('select--active');
		}
	}


	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
		if (this.values.length > 0) {
			this.selectValue(this.values[0]);
		}
	}

	ngAfterViewInit() {
		window.addEventListener('click', this.onClick);
	}
	ngOnDestroy() {
		window.removeEventListener('click', this.onClick); // Need Fix
	}


	public selectValue(value: any): void {
		this._selectedValue = value;
		this.onValueSelected.emit(this._selectedValue);
	}

	public get selectedValue(): any {
		return this._selectedValue;
	}

}
