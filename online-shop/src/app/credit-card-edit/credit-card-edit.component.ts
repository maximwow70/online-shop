import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CreditCard, CreditCardType } from "app/_model/credit-card";

@Component({
	selector: 'credit-card-edit',
	templateUrl: './credit-card-edit.component.html',
	styleUrls: ['./credit-card-edit.component.scss']
})
export class CreditCardEditComponent implements OnInit {

	@Input() creditCard: CreditCard = new CreditCard(CreditCardType.VISA);

	@Output() onChange: EventEmitter<CreditCard> = new EventEmitter<CreditCard>();
	@Output() onSave: EventEmitter<void> = new EventEmitter<void>();

	public cardNumberMask = [/[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, ' ', /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, ' ', /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, ' ', /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/];
	public set cardNumber(number: string) {
		let currentNumber = parseInt(number.replace(/\D+/g, ""));
		this.creditCard.number = !isNaN(currentNumber) ? currentNumber : null;
	}
	public set cardMonth(month: string) {
		this.creditCard.month = parseInt(month);
	}
	public set cardYear(year: string) {
		this.creditCard.year = parseInt(year);
	}

	public get canSaveCard(): boolean {
		return this.creditCard.firstName.length > 0
			&& this.creditCard.lastName.length > 0;
	}

	constructor() { }

	ngOnInit() {
	}

	public change(event): void {
		this.onChange.emit(this.creditCard);
	}

	public save(): void {
		this.onSave.emit();
	}

	public isNumberPressed(event: Event): boolean {
		if (event instanceof KeyboardEvent) {
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)){
				event.preventDefault();
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}

	public getCardImageSource(creditCard: CreditCard): string {
		switch(creditCard.type) {
			case CreditCardType.MASTERCARD: {
				return 'credit-card--mastercard.svg';
			}
			case CreditCardType.VISA: {
				return 'credit-card--visa.svg'
			}
			default: {
				return null;
			}
		}
	}

}
