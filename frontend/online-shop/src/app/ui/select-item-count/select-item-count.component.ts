import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { SelectNumber } from "app/ui/select-number/select-number";

@Component({
	selector: 'select-item-count',
	templateUrl: './select-item-count.component.html',
	styleUrls: ['./select-item-count.component.scss']
})
export class SelectItemCountComponent implements OnInit {
	
	
	@Input() min: number;
	@Input() max: number;

	@Input() selectedCount: number;

	@Output() onSelectCount: EventEmitter<number> = new EventEmitter<number>();

	private _inputVM;

	constructor(private _elementRef: ElementRef) { 
	}

	ngOnInit() {
		var that = this;

		this._inputVM = this._elementRef.nativeElement.querySelector('.select_number-value');

		this._inputVM.oninput = function (event) {
			that.setValue(parseFloat(that._inputVM.value));
            that.onChange();
        }

		this.setValue(this.selectedCount);
		this.onChange();
	}

	public onDecrement(): void {
		this.setValue(parseFloat(this._inputVM.value) - 1);
		this.onChange();
	}
	public onIncrement(): void {
		this.setValue(parseFloat(this._inputVM.value) + 1);
		this.onChange();
	}

	public setValue(value): void {
        if (value < this.min) {
            this._inputVM.value = this.min;
        } else if (value > this.max) {
            this._inputVM.value = this.max;
        } else if(!isNaN(value)){
            this._inputVM.value = value;
        } else {
			this._inputVM.value = this.min;
		}
    }

	public onChange(){
		this.onSelectCount.emit(
			parseFloat(this._inputVM.value)
		);
	}

}
