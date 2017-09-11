import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CreditCard } from "app/_model/credit-card";
import { CreditCardPreset } from "app/_model/credit-card-preset";

@Component({
	selector: 'credit-card-preset',
	templateUrl: './credit-card-preset.component.html',
	styleUrls: ['./credit-card-preset.component.scss']
})
export class CreditCardPresetComponent implements OnInit {

	@Input() preset: CreditCardPreset = null;

	@Output() onEdit: EventEmitter<void> = new EventEmitter<void>();

	constructor() { }

	ngOnInit() {
	}

	public edit(): void {
		this.onEdit.emit();
	}

}
