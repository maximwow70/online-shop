import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { Datapicker } from "app/ui/datapicker/datapicker";
import { Color } from "app/_model/color";
import { CategoryListService } from "app/_services/category-list/category-list.service";
import { Size } from "app/_model/size";

@Component({
	selector: 'items-search',
	templateUrl: './items-search.component.html',
	styleUrls: ['./items-search.component.scss']
})
export class ItemsSearchComponent implements OnInit {

	@Output() onSearch: EventEmitter<{name: string, colors: Color[], sizes: Size[], cost: {min: number, max: number}}> 
		= new EventEmitter<{name: string, colors: Color[], sizes: Size[], cost: {min: number, max: number}}>();

	private _availableCategories: any[] = [];
	private _availableColors: Color[] = [];
	private _availableSizes: Size[] = [];
	private _availableCost: { min: number, max: number };


	public selectedName: string = '';
	private _selectedColors: Color[] = [];
	private _selectedSizes: Size[] = [];
	private _selectedCost: { min: number, max: number } = {min: null, max: null};


	public get availableCategories(): any[] {
		return this._availableCategories;
	}
	public get availableColors(): Color[] {
		return this._availableColors;
	}
	public get availableSizes(): Size[] {
		return this._availableSizes;
	}
	public get availableCost(): { min: number, max: number } {
		return this._availableCost;
	}


	constructor(
		private _elementRef: ElementRef,
		private _categoryList: CategoryListService
	) {
		this._availableColors = [
			new Color(1,'black'),
			new Color(2,'white'),
			new Color(3,'dark grey'),
			new Color(4,'red'),
			new Color(5,'blue'),
			new Color(6,'eggplant'),
			new Color(7,'green'),
			new Color(8,'military'),
			new Color(9,'multicolor')
		];
		this._availableSizes = [
			new Size(0 ,'xs'),
			new Size(1, 's'),
			new Size(2, 'm'),
			new Size(3, 'l'),
			new Size(4, 'xl'),
			new Size(5, 'xxl')
		];
		this._availableCost = {
			min: 0,
			max: 8000
		};
		this._selectedCost = this._availableCost;
		this._availableCategories = this._categoryList.getCategoryList();
	}

	ngOnInit() {
		this.onSearchClick();
	}

	public onColorsSelected(selectedColors: Color[]): void {
		this._selectedColors = selectedColors;
	}
	public onSizesSelected(selectedSizes: Size[]): void {
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

}
