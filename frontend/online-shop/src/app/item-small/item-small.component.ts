import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'app/_model/item';

@Component({
	selector: 'item-small',
	templateUrl: './item-small.component.html',
	styleUrls: ['./item-small.component.scss']
})
export class ItemSmallComponent implements OnInit {

	@Input() item: Item = null;

	constructor() { }

	ngOnInit() {
	}

}
