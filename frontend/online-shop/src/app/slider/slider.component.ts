import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
	selector: 'slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


	private _items: any[] = [];

	private _activeSlideNumber;
	private _slideListVM;
	constructor(
		private _elementRef: ElementRef
	) {
		this._items.push({
			photoUrl: 'assets/slider/shoes1.jpg',
			name: 'Perfect Shoes',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur odio dolores ducimus impedit nisi ullam ratione quibusdam quisquam illo rerum tenetur enim voluptate eveniet, nesciunt quia ipsam quidem veniam.'
		});
		this._items.push({
			photoUrl: 'assets/slider/bag.jpg',
			name: 'Nice Bag',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur odio dolores ducimus impedit nisi ullam ratione quibusdam quisquam illo rerum tenetur enim voluptate eveniet, nesciunt quia ipsam quidem veniam.'
		});
		this._items.push({
			photoUrl: 'assets/slider/jacket.jpg',
			name: "Man's Jacket",
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur odio dolores ducimus impedit nisi ullam ratione quibusdam quisquam illo rerum tenetur enim voluptate eveniet, nesciunt quia ipsam quidem veniam.'
		});
		this._items.push({
			photoUrl: 'assets/slider/hat.jpg',
			name: 'The best Hat',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur odio dolores ducimus impedit nisi ullam ratione quibusdam quisquam illo rerum tenetur enim voluptate eveniet, nesciunt quia ipsam quidem veniam.'
		});

		this._activeSlideNumber = 1;
	}

	ngOnInit() {
		this._slideListVM = this._elementRef.nativeElement.querySelector('.slider-slide_list');
	}
	
	public onPrevActive(): void {
		this._activeSlideNumber = (this._activeSlideNumber > 0) ? this._activeSlideNumber - 1 : 0;
	}
	public onNextActive(): void {
		this._activeSlideNumber = (this._activeSlideNumber < this._items.length - 1) ? this._activeSlideNumber + 1 : this._items.length - 1;
	}
	public onActivateSlide(slideNumber: number): void {
		this._activeSlideNumber = slideNumber;
	}

	
	public get slidesCount(): any[] {
		let count = [];
		for (let  i = 0; i < this._items.length; i++){
			count.push(i);
		}
		return count;
	}
	private updateVM(): any {
		return {
			items: this._items,
			activeSlideNumber: this._activeSlideNumber
		};
	}
	public get vm(): any {
		return this.updateVM();
	}
}
