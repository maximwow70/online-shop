import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

declare var Ps: any;

export class DropdownValue {
	private _id: number = null;
	private _name: string = null;

	public get id(): number {
		return this._id;
	}
	public get name(): string {
		return this._name;
	}

	constructor(id: number, name: string) {
		this._id = id;
		this._name = name;
	}

	public equals(other: DropdownValue): boolean {
		if (!other) {
			return false;
		}
		return this.id === other.id && this.name === other.name;
	}
}

@Component({
	selector: 'dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

	@Input() values: DropdownValue[] = [];

	@Input() selectedValue: DropdownValue = null;

	@Output() onValueSelected: EventEmitter<DropdownValue> = new EventEmitter<DropdownValue>();

	private _onClick = (e) => {
		if (!this._elementRef.nativeElement.contains((e as any).target)) {
			this._elementRef.nativeElement.querySelector('.select').classList.remove('select--active');
		}
	}
	private _updateScrollInterval: any = setInterval(
		() => Ps.update(this._elementRef.nativeElement.querySelector('.select-value_list')), 
		150
	)

	constructor(
		private _elementRef: ElementRef
	) {}

	ngOnInit() {
		if (this.values.length > 0 && !this.selectedValue) {
			this.selectValue(this.values[0]);
		}
		Ps.initialize(
			this._elementRef.nativeElement.querySelector('.select-value_list')
		);
	}

	ngAfterViewInit() {
		window.addEventListener('click', this._onClick);
	}
	ngOnDestroy() {
		window.removeEventListener('click', this._onClick);
		clearInterval(this._updateScrollInterval);
	}

	public selectValue(value: DropdownValue): void {
		this.selectedValue = value;
		this.onValueSelected.emit(this.selectedValue);
		console.log('kek');
	}

	public isValueSelected(value: DropdownValue): boolean {
		return value.equals(this.selectedValue);
	}

}
