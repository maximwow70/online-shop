import { Component, OnInit } from '@angular/core';
import { UserDataService } from "app/_services/user-data.service";
import { Router } from "@angular/router";
import { User } from "app/_model/user";
import { CreditCard, CreditCardType } from "app/_model/credit-card";
import { CreditCardPreset } from "app/_model/credit-card-preset";

@Component({
	selector: 'user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

	private _creditCard: CreditCard = null;

	private _creditCardPresetList: CreditCardPreset[] = [];

	public get user(): User {
		return this._userData.user;
	}

	public get creditCard(): CreditCard {
		return this._creditCard;
	}

	public get creditCardPresetList(): CreditCardPreset[] {
		return this._creditCardPresetList;
	}

	constructor(
		private _router: Router,
		private _userData: UserDataService
	) { 
		this._creditCard = new CreditCard(CreditCardType.MASTERCARD);

		this._creditCardPresetList = [
			new CreditCardPreset(
				'My Visa',
				new CreditCard(CreditCardType.VISA),
				0
			),
			new CreditCardPreset(
				'My MasterCard',
				new CreditCard(CreditCardType.MASTERCARD),
				1
			),
			new CreditCardPreset(
				'Another Visa (bank Moskow-Minsk)',
				new CreditCard(CreditCardType.VISA),
				2
			),
			new CreditCardPreset(
				'Some MasterCard',
				new CreditCard(CreditCardType.MASTERCARD),
				3
			),
			new CreditCardPreset(
				'Some Visa (national bank)',
				new CreditCard(CreditCardType.VISA),
				4
			),
			new CreditCardPreset(
				'Another MasterCard',
				new CreditCard(CreditCardType.MASTERCARD),
				5
			)
		];
	}

	ngOnInit() {
	}

	public logOut(): void {
		this._userData.logOut();
		this._router.navigate(['user/login']);
	}

	public onCreditCardChange($event): void {
		console.log(this._creditCard);
		console.log($event);
	}
	public onCreditCardSave(): void {

	}


}
