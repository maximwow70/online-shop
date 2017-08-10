import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'user-cart-delivery',
	templateUrl: './user-cart-delivery.component.html',
	styleUrls: ['./user-cart-delivery.component.scss']
})
export class UserCartDeliveryComponent implements OnInit {

	@Output() onBackToCheckout: EventEmitter<void> = new EventEmitter<void>();
	@Output() onProceedToDone: EventEmitter<void> = new EventEmitter<void>();

	private _countriesToDelivery: string[] = [];

	public get countriesToDelivery(): string[] {
		return this._countriesToDelivery;
	}

	constructor() { 
		this._countriesToDelivery = [
			'USA',
			'Canada',
			'Russia',
			'Germany',
			'China',
			'Belarus',
			'Brazil'
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
