import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Item } from "app/_model/item";
import { ItemService } from "app/_services/item/item.service";
import { Select } from "app/ui/select/select";
import { SelectNumber } from "app/ui/select-number/select-number";
import { Color } from "app/_model/color";

@Component({
	selector: 'item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

	private _item: Item;
	
	private _itemColor: Color;
	private _itemSize: string;
	private _itemCount: number;

	private _availableColors: Color[] = [];

	constructor(
		private _elementRef: ElementRef,
		private _activatedRoute: ActivatedRoute,
		private _itemService: ItemService
	) { 
		this._availableColors = [
			new Color('eggplant'),
			new Color('red'),
			new Color('black'),
			new Color('white'),
			new Color('green')
		];
	}

	ngOnInit() {
		let id = this._activatedRoute.snapshot.paramMap.get('id');

		this._itemService.getItem(id).subscribe(
			response => this._item = Item.fromObject(response)
		);
	}
	
	public addToCard(): void{
		//console.log(this._selectColor.getData() + " / " + this._selectSize.getData());
	}
	
	public onColorSelected(color): void {
		this._itemColor = color;
	}
	public onSizeSelected(size): void {
		this._itemSize = size;
	}
	public onCountChange(count): void {
		this._itemCount = count;
	}

	public get item(): Item {
		return this._item;
	}
	public get canAddToCard(): boolean {
		return (this._itemCount > 0) && (this._itemColor != undefined) && (this._itemSize != undefined);
	}

	public get availableColors(): Color[] {
		return this._availableColors;
	}
	public get availableSizes(): string[] {
		return [
			'xl',
			'l',
			'm'
		];
	}

}
