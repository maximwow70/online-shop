import { Component, OnInit, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { Datapicker } from "app/ui/datapicker/datapicker";
import { Color } from "app/_model/color";
import { CategoryService } from "app/_services/category.service";
import { Size } from "app/_model/size";
import { Category } from "app/_model/category";
import { CostRange } from "app/_model/cost-range";


@Component({
	selector: 'items-search',
	templateUrl: './items-search.component.html',
	styleUrls: ['./items-search.component.scss']
})
export class ItemsSearchComponent implements OnInit {

	@Input() categories: Category[] = [];
	@Input() colors: Color[] = [];
	@Input() sizes: Size[] = [];
	@Input() cost: CostRange = new CostRange(null, null);

	@Output() onSearch: EventEmitter<{ name: string, colors: Color[], sizes: Size[], cost: CostRange }>
	= new EventEmitter<{ name: string, colors: Color[], sizes: Size[], cost: CostRange }>();

	public selectedName: string = '';
	private _selectedColors: Color[] = [];
	private _selectedSizes: Size[] = [];
	private _selectedCost: CostRange = new CostRange(null, null);

	constructor(
		private _elementRef: ElementRef,
		private _categoryList: CategoryService
	) {
	}

	ngOnInit() {
		this._selectedCost = this.cost;
		this.onSearchClick();
	}

	public onColorsSelected(selectedColors: Color[]): void {
		this._selectedColors = selectedColors;
	}
	public onSizesSelected(selectedSizes: Size[]): void {
		this._selectedSizes = selectedSizes;
	}
	public onCostSelected(selectedCost: CostRange): void {
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
