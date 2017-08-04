import { Component, OnInit, ElementRef } from '@angular/core';

enum ItemCategory {
	SHOES = 0
}

const shoesSizeGuide = [
	{
		name: 'uk',
		sizes: [37, 38, 39, 40, 41, 42, 43]
	},
	{
		name: 'eu',
		sizes: [3, 4, 5, 6, 7, 8, 9]
	},
	{
		name: 'aus',
		sizes: [5, 6, 7, 8, 9, 10, 11]
	}
]


@Component({
	selector: 'size-guide',
	templateUrl: './size-guide.component.html',
	styleUrls: ['./size-guide.component.scss']
})
export class SizeGuideComponent implements OnInit {

	private onClick = (e) => {
		if (!this._elementRef.nativeElement.contains((e as any).target)) {
			this._elementRef.nativeElement.querySelector('.size_guide').classList.remove('size_guide--open');
		}
	}

	public get vm(): any {
		return {
			title: 'Shoes sizes:',
			sizeGuide: shoesSizeGuide
		}
	}

	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
	}
	ngAfterViewInit() {
		window.addEventListener('click', this.onClick);
	}
	ngOnDestroy() {
		window.removeEventListener('click', this.onClick); 
	}



}
