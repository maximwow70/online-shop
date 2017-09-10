import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Item } from "app/_model/item";
import { ItemService } from "app/_services/item.service";
import { Select } from "app/ui/select/select";
import { SelectNumber } from "app/ui/select-number/select-number";
import { Color } from "app/_model/color";
import { ItemData } from "app/_model/item-data";
import { Size } from "app/_model/size";

@Component({
	selector: 'item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

	private _itemData: ItemData = null;

	private _selectedColor: Color = null;
	private _selectedSize: Size = null;
	private _selectedCount: number = null;


	public get itemData(): ItemData {
		return this._itemData;
	}

	public get availableColors(): Color[] {
		return this._itemData.getColors();
	}
	public get availableSizes(): Size[] {
		return this._itemData.getSizes(this._selectedColor);
	}
	public get availableCount(): number {
		return this._itemData.getCount(this._selectedColor, this._selectedSize);
	}

	public get selectedColor(): Color {
		return this._selectedColor;
	}
	public get selectedSize(): Size {
		return this._selectedSize;
	}
	public get selectedCount(): number {
		return this._selectedCount;
	}

	public get canAddToCard(): boolean {
		return (this._selectedCount > 0) &&
			(this._selectedColor !== null) &&
			(this._selectedSize !== null);
	}


	constructor(
		private _elementRef: ElementRef,
		private _activatedRoute: ActivatedRoute,
		private _itemService: ItemService
	) {

	}

	ngOnInit() {
		let id = this._activatedRoute.snapshot.paramMap.get('id');

		this._itemService.getItem(id).subscribe(itemData => {
			this._itemData = itemData;
			this._selectedColor = this.availableColors[0];
			this._selectedSize = this.availableSizes[0];
			this._selectedCount = this.availableCount > 0 
				? 1
				: 0;
		});
	}

	public addToCard(): void {
		//console.log(this._selectColor.getData() + " / " + this._selectSize.getData());
	}

	public onColorSelected(color): void {
		this._selectedColor = color;
		this._selectedSize = this._itemData.getSizes(color)[0];
		this._selectedCount = Math.min(this.availableCount, this._selectedCount);
	}
	public onSizeSelected(size): void {
		this._selectedSize = size;
		this._selectedCount = Math.min(this.availableCount, this._selectedCount);
	}
	public onCountChange(count): void {
		this._selectedCount = count;
	}

}
