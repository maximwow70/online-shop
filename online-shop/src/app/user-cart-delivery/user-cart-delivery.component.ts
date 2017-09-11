import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DropdownValue } from "app/ui/dropdown/dropdown.component";

@Component({
	selector: 'user-cart-delivery',
	templateUrl: './user-cart-delivery.component.html',
	styleUrls: ['./user-cart-delivery.component.scss']
})
export class UserCartDeliveryComponent implements OnInit {

	@Output() onBackToCheckout: EventEmitter<void> = new EventEmitter<void>();
	@Output() onProceedToDone: EventEmitter<void> = new EventEmitter<void>();

	private _countriesToDelivery: DropdownValue[] = [];

	public get countriesToDelivery(): DropdownValue[] {
		return this._countriesToDelivery;
	}

	constructor() { 
		this._countriesToDelivery = [
			new DropdownValue(1, 'USA'),
			new DropdownValue(2, 'Canada'),
			new DropdownValue(3, 'Brazil')
		];
	}

	ngOnInit() {
	}

	public backToCheckout(): void {
		this.onBackToCheckout.emit();
	}
	public proceedToDone(): void {
		this.onProceedToDone.emit();
	}

}
