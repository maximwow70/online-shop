import { Component, OnInit, Input, ElementRef } from '@angular/core';

declare var Ps: any;
@Component({
	selector: 'item-photos',
	templateUrl: './item-photos.component.html',
	styleUrls: ['./item-photos.component.scss']
})
export class ItemPhotosComponent implements OnInit {

	@Input() photosUrl: string[];


	private _activePhotoUrl: string;

	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
		this._activePhotoUrl = this.photosUrl[0];

		// Ps.initialize(
		// 	this._elementRef.nativeElement.querySelector('.item_photos-photo_list')
		// );
	}

	public onPhotoClicked(photoUrl: string): void {
		this._activePhotoUrl = photoUrl;
	}
	public isPhotoActive(photoUrl: string): boolean {
		return this._activePhotoUrl === photoUrl;
	}

	public get activePhotoUrl(): string {
		return this._activePhotoUrl;
	}

}
