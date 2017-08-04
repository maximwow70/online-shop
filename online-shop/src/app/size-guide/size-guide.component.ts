import { Component, OnInit, ElementRef } from '@angular/core';

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
