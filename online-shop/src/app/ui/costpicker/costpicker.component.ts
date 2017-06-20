import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'costpicker',
	templateUrl: './costpicker.component.html',
	styleUrls: ['./costpicker.component.scss']
})
export class CostpickerComponent implements OnInit {

	@Output() selectedCost: EventEmitter<{ min: number, max: number }> = new EventEmitter<{ min: number, max: number }>();

	@Input() min: number;
	@Input() max: number;
	@Input() step: number;

	private _selectMinInputVM;
	private _selectMaxInputVM;

	private _currentMinValue: number;
	private _currentMaxValue: number;


	private _costRangeVM;
	private _costBarVM;
	private _costRangeBarVM;
	private _costRangeControlMinVM;
	private _costRangeControlMaxVM;

	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
		var that = this;

		let selectNumbers = this._elementRef.nativeElement.querySelectorAll('.select_number-value');
		this._selectMinInputVM = selectNumbers[0];
		this._selectMaxInputVM = selectNumbers[1];

		this._selectMinInputVM.oninput = function () {
			that.setMinValue(
				parseFloat(that._selectMinInputVM.value)
			);
		}
		this._selectMaxInputVM.oninput = function () {
			that.setMaxValue(
				parseFloat(that._selectMaxInputVM.value)
			);
		}

		this._costRangeVM = this._elementRef.nativeElement.querySelector('.range');
		this._costBarVM = this._elementRef.nativeElement.querySelector('.range-bar');
		this._costRangeBarVM = this._elementRef.nativeElement.querySelector('.range-progress_bar');
		this._costRangeControlMinVM = this._costRangeVM.querySelector('.range-control--min');
		this._costRangeControlMaxVM = this._costRangeVM.querySelector('.range-control--max');


		this._costRangeControlMinVM.addEventListener('mousedown', function () {
			document.addEventListener('mousemove', onControlMinMove);
		});
		document.addEventListener('mouseup', function () {
			document.removeEventListener('mousemove', onControlMinMove);
		});
		this._costRangeControlMinVM.addEventListener('keydown', function (event) {
			if (event.keyCode == 39) {
				that.setMinValue(that._currentMinValue += (that.max - that.min) / 50);
			} else if (event.keyCode == 37) {

				that.setMinValue(that._currentMinValue -= (that.max - that.min) / 50);
			}
		});
		function onControlMinMove(event) {
			var leftX = event.clientX - that._costBarVM.getBoundingClientRect().left;
			var proportion = leftX / parseFloat(window.getComputedStyle(that._costBarVM).width);
			if (proportion > 1) {
				proportion = 1;
			} else if (proportion < 0) {
				proportion = 0;
			}
			that.setMinValue(Math.round(proportion * that.max));
		}

		this._costRangeControlMaxVM.addEventListener('mousedown', function () {
			document.addEventListener('mousemove', onControlMaxMove);
		});
		document.addEventListener('mouseup', function () {
			document.removeEventListener('mousemove', onControlMaxMove);
		});
		this._costRangeControlMaxVM.addEventListener('keydown', function (event) {
			if (event.keyCode == 39) {
				that.setMaxValue(that._currentMaxValue += (that.max - that.min) / 50);
			} else if (event.keyCode == 37) {

				that.setMaxValue(that._currentMaxValue -= (that.max - that.min) / 50);
			}
		});
		function onControlMaxMove(event) {
			var leftX = event.clientX - that._costBarVM.getBoundingClientRect().left;
			var proportion = leftX / parseFloat(window.getComputedStyle(that._costBarVM).width);
			if (proportion > 1) {
				proportion = 1;
			} else if (proportion < 0) {
				proportion = 0;
			}
			that.setMaxValue(Math.round(proportion * that.max));
		}

		this._currentMinValue = this.min;
		this._currentMaxValue = this.max;

		this.onChange();
	}

	public setMinValue(value: number): void {
		if (value < this.min) {
			this._selectMinInputVM.value = this.min;
		} else if (value > this._currentMaxValue) {
			this._selectMinInputVM.value = this._currentMaxValue;
		} else if (!isNaN(value)) {
			this._selectMinInputVM.value = value;
		} else {
			this._selectMinInputVM.value = this.min;
		}
		this._currentMinValue = parseFloat(this._selectMinInputVM.value);

		this.onChange();
	}

	public setMaxValue(value: number): void {
		if (value < this._currentMinValue) {
			this._selectMaxInputVM.value = this._currentMinValue;
		} else if (value > this.max) {
			this._selectMaxInputVM.value = this.max;
		} else if (!isNaN(value)) {
			this._selectMaxInputVM.value = value;
		} else {
			this._selectMaxInputVM.value = this.min;
		}
		this._currentMaxValue = parseFloat(this._selectMaxInputVM.value);

		this.onChange();
	}

	private onChange(): void {
		this.selectedCost.emit({
			min: this._currentMinValue,
			max: this._currentMaxValue
		});
	}

	public updateVM(): any {
		return {
			currentValue: {
				min: this._currentMinValue,
				max: this._currentMaxValue
			},
			rangeMin: {
				left: (this._currentMinValue - this.min) / this.max * 100 + "%"
			},
			rangeMax: {
				left: (this._currentMaxValue - this.min) / this.max * 100 + "%"
			},
			bar: {
				width: (this._currentMaxValue - this._currentMinValue) / this.max * 100 + "%",
				left: (this._currentMinValue - this.min) / this.max * 100 + "%"
			}
		}
	}
	public get vm(): any {
		return this.updateVM();
	}

}
