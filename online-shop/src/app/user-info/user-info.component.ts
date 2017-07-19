import { Component, OnInit } from '@angular/core';
import { UserDataService } from "app/_services/user-data/user-data.service";
import { Router } from "@angular/router";

@Component({
	selector: 'user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

	constructor(
		private _router: Router,
		private _userData: UserDataService
	) { }

	ngOnInit() {
	}

	public logOut(): void {
		this._userData.logOut();
		this._router.navigate(['user/login']);
	}

}
