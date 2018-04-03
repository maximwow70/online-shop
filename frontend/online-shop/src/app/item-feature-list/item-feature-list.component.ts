import { Component, OnInit, Input } from '@angular/core';
import { FeatureList } from 'app/_model/feature-list';

@Component({
	selector: 'item-feature-list',
	templateUrl: './item-feature-list.component.html',
	styleUrls: ['./item-feature-list.component.scss']
})
export class ItemFeatureListComponent implements OnInit {

	@Input() featureList: FeatureList = null; 

	constructor() { }

	ngOnInit() {
	}

}
