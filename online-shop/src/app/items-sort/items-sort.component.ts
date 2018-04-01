import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { SortType } from "app/_model/sort-type";
import { DropdownValue } from "app/ui/dropdown/dropdown.component";
import { ItemService } from "app/_services/item.service";

export class ItemsSortData {
	private _sortTypes: SortType[] = [];
	private _isSortByIncrease: boolean = null;

	public get sortTypes(): SortType[] {
		return this._sortTypes;
	}
	public get isSortByIncrease(): boolean {
		return this._isSortByIncrease;
	}

	constructor(sortTypes: SortType[], isSortByIncrease: boolean) {
		this._sortTypes = sortTypes;
		this._isSortByIncrease = isSortByIncrease;
	}
}

@Component({
	selector: 'items-sort',
	templateUrl: './items-sort.component.html',
	styleUrls: ['./items-sort.component.scss']
})
export class ItemsSortComponent implements OnInit {

	@Input() set sortTypes(sortTypes: SortType[]) {
		this.sortTypesDropdown = sortTypes.map(st => new DropdownValue(st.id, st.name));
		// if (
		// 	this.sortTypesDropdown.length > 0
		// 	&& !this.sortTypesDropdown.some(std => std.equals(this.selectedTypeDropdown))
		// ) {
		// 	this.onSortTypeSelected(this.sortTypesDropdown[0]);
		// }
	};
	@Input() set selectedSortType(sortType: SortType) {
		this.selectedTypeDropdown = new DropdownValue(sortType.id, sortType.name);
	}
	@Input() isSortByIncrease: boolean = true;
	@Input() set availableRanges(ranges: number[]) {
		this.availableRangesDropdown = ranges.map(r => new DropdownValue(0, r.toString()));
	}
	@Input() set selectedRange(range: number) {
		if (range) {
			this.selectedRangeDropdown = new DropdownValue(0, range.toString());
		} else {
			this.selectedRangeDropdown = this.availableRangesDropdown.length > 0 ? this.availableRangesDropdown[0] : null;
		}
	}
	@Input() isItemsViewAsList: boolean = false;

	@Output() onTypeSelected: EventEmitter<SortType> = new EventEmitter<SortType>();
	@Output() onDirectionChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() onRangeSelected: EventEmitter<number> = new EventEmitter<number>();
	@Output() onItemsViewChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	public sortTypesDropdown: DropdownValue[] = [];
	public selectedTypeDropdown: DropdownValue = null;
	public availableRangesDropdown: DropdownValue[] = [];
	public selectedRangeDropdown: DropdownValue = null;

	constructor(
		private _itemData: ItemService
	) { }

	ngOnInit() {
	}

	public onSortTypeSelected(value: DropdownValue): void {
		this.selectedTypeDropdown = value;
		const selectedType = new SortType(
			this.selectedTypeDropdown.id,
			this.selectedTypeDropdown.name
		);
		this.onTypeSelected.emit(selectedType);
	}

	public toggleSortDirection(): void {
		this.isSortByIncrease = !this.isSortByIncrease;
		this.onDirectionChange.emit(this.isSortByIncrease);
	}

	public rangeSelected(range: DropdownValue): void {
		this.selectedRangeDropdown = range;
		this.onRangeSelected.emit(parseInt(this.selectedRangeDropdown.name));
	}

	public setItemsView(isViewAsList: boolean): void {
		this.isItemsViewAsList = isViewAsList;
		this.onItemsViewChange.emit(this.isItemsViewAsList);
	}


}
