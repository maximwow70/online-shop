import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
	selector: 'user-cart-payment',
	templateUrl: './user-cart-payment.component.html',
	styleUrls: ['./user-cart-payment.component.scss']
})
export class UserCartPaymentComponent implements OnInit {

	@Input() orderStatus: boolean = false;

	@Output() onDone: EventEmitter<void> = new EventEmitter<void>();
	@Output() onBackToDelivery: EventEmitter<void> = new EventEmitter<void>();

	constructor() { }

	ngOnInit() {
	}

	public done(): void {
		this.onDone.emit();
	}
	public backToDelivery(): void {
		this.onBackToDelivery.emit();
	}

}
