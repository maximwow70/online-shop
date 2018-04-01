import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Range } from 'app/ui/range/range';
@Component({
	selector: 'range-map-zoom',
	templateUrl: './range-map-zoom.component.html',
	styleUrls: ['./range-map-zoom.component.scss']
})
export class RangeMapZoomComponent implements OnInit {

	@Input() min: number;
	@Input() max: number;
	@Input() step: number;
	@Input() startValue: number;

	private _currentValue: number;
	
	private _range: Range;
	constructor(
		private _elementRef: ElementRef
	) { 
	}

	ngOnInit() {
	}
	ngAfterViewInit() {
		this._range = new Range(
			this._elementRef.nativeElement.querySelector('.range')
		);
		this._currentValue = this.startValue + 1;
	}
	
	public get points(): number[] {
		let numbers = [];
		let range = 100 / 100 / (this.max - this.min);
		for (let i = 0; i <= this.max - this.min; i++){
			numbers.push(
				isFinite(range * i) ? range * i : 0
			);
		}
		return numbers;
	}

}
