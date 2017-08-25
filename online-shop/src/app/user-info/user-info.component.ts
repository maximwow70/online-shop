import { Component, OnInit } from '@angular/core';
import { UserDataService } from "app/_services/user-data/user-data.service";
import { Router } from "@angular/router";
import { User } from "app/_model/user";
import { CreditCard, CreditCardType } from "app/_model/credit-card";

@Component({
	selector: 'user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

	private _creditCard: CreditCard = null;

	constructor(
		private _router: Router,
		private _userData: UserDataService
	) { 
		this._creditCard = new CreditCard(CreditCardType.VISA);
	}

	ngOnInit() {
	}

	public logOut(): void {
		this._userData.logOut();
		this._router.navigate(['user/login']);
	}

	public get user(): User {
		return this._userData.user;
	}

	public get creditCard(): CreditCard {
		return this._creditCard;
	}

}
