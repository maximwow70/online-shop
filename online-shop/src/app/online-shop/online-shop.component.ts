import { Component, OnInit, ElementRef } from '@angular/core';

import { OnlineShop } from "app/_model/online-shop";
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";

import { ColorService } from "app/_services/color.service";

import { Select } from "app/ui/select/select";
import { Route, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ItemData } from "app/_model/item-data";
import { ItemDataPresentation } from "app/_model/item-data-presentation";
import { Size } from "app/_model/size";
import { ItemService } from "app/_services/item.service";
import { Category } from "app/_model/category";
import { CategoryService } from "app/_services/category.service";
import { SizeService } from "app/_services/size.service";
import { CostRange } from "app/_model/cost-range";
import { SortType } from "app/_model/sort-type";

@Component({
	selector: 'online-shop',
	templateUrl: './online-shop.component.html',
	styleUrls: ['./online-shop.component.scss']
})
export class OnlineShopComponent implements OnInit {

	private _onlineShop: OnlineShop;

	private _pages: number = null;

	private _availableCategories: Category[] = [];
	private _availableColors: Color[] = [];
	private _availableSizes: Size[] = [];
	private _availableCost: CostRange = new CostRange(null, null);

	private _availableSortTypes: SortType[] = [];
	private _selectedSortType: SortType = new SortType(null, null);
	private _isSortByIncrease: boolean = true;
	private _availableRanges: number[] = [];
	private _selectedRange: number = null;

	private _searchParams: { name: string, colors: Color[], sizes: Size[], cost: { min: number, max: number } } = null;
	
	private _selectedPage: number = null;

	public get pages(): number {
		return this._pages;
	}
	public get selectedPage(): number {
		return this._selectedPage;
	}

	public get itemList(): ItemDataPresentation[] {
		return this._onlineShop.itemList;
	}

	public get availableCategories(): Category[] {
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

	public get availableSortTypes(): SortType[] {
		return this._availableSortTypes;
	}
	public get selectedSortType(): SortType {
		return this._selectedSortType;
	}
	public get isSortByIncrease(): boolean {
		return this._isSortByIncrease;
	}
	public get availableRanges(): number[] {
		return this._availableRanges;
	}
	public get selectedRange(): number {
		return this._selectedRange;
	}


	constructor(
		private _elementRef: ElementRef,
		private _router: Router,
		private _itemData: ItemService,
		private _colorData: ColorService,
		private _sizeData: SizeService,
		private _categoryData: CategoryService
	) {

		this._onlineShop = new OnlineShop();
		this._selectedPage = 1;
		this._availableRanges = [
			20,
			50,
			100,
			200
		];
		this._selectedRange = this._availableRanges[0];

		Promise.all([
			this._categoryData.getCategoryList(),
			this._colorData.getColors(),
			this._sizeData.getSizes(new Category(null, null, null, null)),
			this._itemData.getMaxCost(),
			this._itemData.getSortTypes()
		]).then(([
			categories,
			colors,
			sizes,
			maxCost,
			sortTypes
		]) => {
			this._availableCategories = categories;
			this._availableColors = colors;
			this._availableSizes = sizes;
			this._availableCost = new CostRange(0, maxCost);
			this._availableSortTypes = sortTypes;
			this._selectedSortType = this._availableSortTypes[0];
			this.loadItemListByParams();
		});
		// this._categoryData.getCategoryList().then(categories => this._availableCategories = categories);
		// this._colorData.getColors().then(colors => this._availableColors = colors);
		// this._sizeData.getSizes(new Category(null, null, null, null)).then(sizes => this._availableSizes = sizes);
		// this._itemData.getMaxCost().then(maxCost => this._availableCost = new CostRange(0, maxCost));
		//this._itemData.getSortTypes().then(sortTypes => {this._availableSortTypes = sortTypes;this._selectedSortType = this._availableSortTypes[0];});

		// this._itemData.getItemListJSON().then(itemDataList =>
		// 	this._onlineShop.setItemList(itemDataList)
		// );
	}

	ngOnInit() {
	}

	public loadItemListByParams(): void {
		this._itemData.getItemList(
			this._searchParams ? this._searchParams.name : '',
			this._searchParams ? this._searchParams.colors : [],
			this._searchParams ? this._searchParams.sizes : [],
			this._searchParams ? this._searchParams.cost : { min: null, max: null },
			this._selectedRange,
			this._selectedPage,
			this._selectedSortType,
			this._isSortByIncrease
		).then(itemDataSearch => {
			this._onlineShop.setItemList(itemDataSearch.itemDataPresentationList);
			this._pages = itemDataSearch.totalPages;
		});
	}

	public onSearch(params: { name: string, colors: Color[], sizes: Size[], cost: { min: number, max: number } }): void {
		this._searchParams = params;
		this.loadItemListByParams();
	}

	public onSortTypeSelected(sortType: SortType): void {
		this._selectedSortType = sortType;
		this.loadItemListByParams();
	}
	public onSortDirectionChange(isSortByIncrease: boolean): void {
		this._isSortByIncrease = isSortByIncrease;
		this.loadItemListByParams();
	}
	public onRangeSelected(range: number): void {
		this._selectedRange = range;
		this.loadItemListByParams();
	}

	public onPageSelected(page: number): void {
		this._selectedPage = page;
		this.loadItemListByParams();
	}


	public onItemLiked(item: Item): void {
		console.log(item);
	}
	public onItemClicked(item: Item): void {
		this._router.navigate(['/products', item.id]);
	}

	public getClassByColor(color: Color): string {
		return this._colorData.getClassByColor(color);
	}


}
