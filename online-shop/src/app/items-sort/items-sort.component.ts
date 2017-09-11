import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { SortType } from "app/_model/sort-type";
import { DropdownValue } from "app/ui/dropdown/dropdown.component";
import { ItemService } from "app/_services/item.service";

@Component({
	selector: 'items-sort',
	templateUrl: './items-sort.component.html',
	styleUrls: ['./items-sort.component.scss']
})
export class ItemsSortComponent implements OnInit {

	@Input() sortTypes: SortType[] = [];

	@Output() onTypeSelected: EventEmitter<SortType> = new EventEmitter<SortType>();

	private _selectedType: SortType = null;

	public get selectedType(): SortType {
		return this._selectedType;
	}

	public sortTypesDropdown: DropdownValue[] = [];
	public selectedTypeDropdown: DropdownValue = null;

	constructor(
		private _itemData: ItemService
	) {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes["sortTypes"]) {
			this.sortTypesDropdown = this.sortTypes.map(st => new DropdownValue(st.id, st.name));
			this.onSortTypeSelected(this.sortTypesDropdown[0]);
		}
	}

	ngOnInit() {
	}

	public onSortTypeSelected(value: DropdownValue): void {
		this.selectedTypeDropdown = value;
		this._selectedType = new SortType(
			this.selectedTypeDropdown.id,
			this.selectedTypeDropdown.name
		);
		this.onTypeSelected.emit(this._selectedType);
	}


}
