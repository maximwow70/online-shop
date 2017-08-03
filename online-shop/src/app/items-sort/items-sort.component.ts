import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'items-sort',
	templateUrl: './items-sort.component.html',
	styleUrls: ['./items-sort.component.scss']
})
export class ItemsSortComponent implements OnInit {

	private _sortValues: string[] = [];
	private _selectedSort: string;
	constructor() {
		this._sortValues = [
			"Name",
			"Cost",
			"Something"
		];
		this._selectedSort = this._sortValues[0];
	}

	ngOnInit() {
	}

	public onSortValueSelected(value: string): void {
		this._selectedSort = value;
		console.log(this._selectedSort);
	}

	public get selectedSort(): string {
		return this._selectedSort;
	}
	public get sortValues(): string[] {
		return this._sortValues;
	}

}
