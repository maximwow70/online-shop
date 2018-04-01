import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from "app/_model/item";

@Component({
	selector: 'user-cart-checkout',
	templateUrl: './user-cart-checkout.component.html',
	styleUrls: ['./user-cart-checkout.component.scss']
})
export class UserCartCheckoutComponent implements OnInit {

	@Input() itemList: Item[] = [];

	@Output() onProceedToDelivery: EventEmitter<void> = new EventEmitter<void>();
	@Output() onBackToOrder: EventEmitter<void> = new EventEmitter<void>();

	constructor() { }

	ngOnInit() {
	}

	public proceedToDelivery(): void {
		this.onProceedToDelivery.emit();
	}

	public backToOrder(): void {
		this.onBackToOrder.emit();
	}
	

}
