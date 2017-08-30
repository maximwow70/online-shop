import { Component, OnInit, Input } from '@angular/core';
import { CreditCard } from "app/_model/credit-card";
import { CreditCardPreset } from "app/_model/credit-card-preset";

@Component({
	selector: 'credit-card-preset',
	templateUrl: './credit-card-preset.component.html',
	styleUrls: ['./credit-card-preset.component.scss']
})
export class CreditCardPresetComponent implements OnInit {

	@Input() preset: CreditCardPreset = null;

	constructor() { }

	ngOnInit() {
	}

}
