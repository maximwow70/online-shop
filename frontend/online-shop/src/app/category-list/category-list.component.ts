import { Component, OnInit, Input, ElementRef } from '@angular/core';

declare var Ps: any;

@Component({
	selector: 'category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
	
	@Input() categories: any;
	private _selectedCategory: string = '';

	private _updateScrollInterval: any = null;

	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
		
	}
	
	ngAfterViewInit() {
		Ps.initialize(this._elementRef.nativeElement.querySelector('.category-list'));
		this._updateScrollInterval = setInterval(() => {
			Ps.update(this._elementRef.nativeElement.querySelector('.category-list'));
		}, 150);
	}

	ngOnDestroy() {
		clearInterval(this._updateScrollInterval);
	}
}
