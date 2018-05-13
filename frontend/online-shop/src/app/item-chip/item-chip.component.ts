import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'app/_model/item';

@Component({
	selector: 'item-chip',
	templateUrl: './item-chip.component.html',
	styleUrls: ['./item-chip.component.scss']
})
export class ItemChipComponent implements OnInit {

	@Input() item: Item = null;

	constructor() { }

	ngOnInit() {
	}
}
