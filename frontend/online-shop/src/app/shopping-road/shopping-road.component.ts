import { Component, OnInit, ElementRef } from '@angular/core';

declare var $: any;

@Component({
	selector: 'shopping-road',
	templateUrl: './shopping-road.component.html',
	styleUrls: ['./shopping-road.component.scss']
})
export class ShoppingRoadComponent implements OnInit {

	constructor(
		private _elementRef: ElementRef
	) {
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		let element = this._elementRef.nativeElement.querySelector('.shopping_road-road');
		$(element).animated('flipInX');
	}

}
