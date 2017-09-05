import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { Datapicker } from "app/ui/datapicker/datapicker";
import { Color } from "app/_model/color";
import { CategoryListService } from "app/_services/category-list/category-list.service";
import { Category } from "app/_model/category";

@Component({
	selector: 'items-search',
	templateUrl: './items-search.component.html',
	styleUrls: ['./items-search.component.scss']
})
export class ItemsSearchComponent implements OnInit {

	@Output() onSearch: EventEmitter<{name: string, colors: Color[], sizes: string[], cost: {min: number, max: number}}> 
		= new EventEmitter<{name: string, colors: Color[], sizes: string[], cost: {min: number, max: number}}>();

	private _availableCategories: Category[] = [];
	private _availableColors: Color[] = [];
	private _availableSizes: string[] = [];
	private _availableCost: { min: number, max: number };


	public selectedName: string = '';
	private _selectedColors: Color[] = [];
	private _selectedSizes: string[] = [];
	private _selectedCost: { min: number, max: number };

	constructor(
		private _elementRef: ElementRef,
		private _categoryList: CategoryListService
	) {
		this._availableColors = [
			new Color('black'),
			new Color('white'),
			new Color('dark grey'),
			new Color('red'),
			new Color('blue'),
			new Color('eggplant'),
			new Color('green'),
			new Color('military'),
			new Color('multicolor')
		];
		this._availableSizes = [
			'xs',
			's',
			'm',
			'l',
			'xl'
		];
		this._availableCost = {
			min: 0,
			max: 8000
		};
		this._categoryList.getCategoryList().then(categories => this._availableCategories = categories);
	}

	ngOnInit() {
	}

	public onColorsSelected(selectedColors: Color[]): void {
		this._selectedColors = selectedColors;
	}
	public onSizesSelected(selectedSizes: string[]): void {
		this._selectedSizes = selectedSizes;
	}
	public onCostSelected(selectedCost: {min: number, max: number}): void {
		this._selectedCost = selectedCost;
	}

	public onSearchClick(): void {
		this.onSearch.emit({
			name: this.selectedName,
			colors: this._selectedColors,
			sizes: this._selectedSizes,
			cost: this._selectedCost
		});
	}

	public get availableCategories(): Category[] {
		return this._availableCategories;
	}
	public get availableColors(): Color[] {
		return this._availableColors;
	}
	public get availableSizes(): string[] {
		return this._availableSizes;
	}
	public get availableCost(): { min: number, max: number } {
		return this._availableCost;
	}


}
