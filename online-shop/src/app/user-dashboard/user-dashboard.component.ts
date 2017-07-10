import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserDataService } from "app/_services/user-data/user-data.service";
import { User } from "app/_model/user";
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemColorService } from "app/_services/item-color/item-color.service";

declare var Ps;

@Component({
	selector: 'user-dashboard',
	templateUrl: './user-dashboard.component.html',
	styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
	
	private _updateScrollInterval: any = null;

	private _userId: string;
	private _user: User;
	
	constructor(
		private _elementRef: ElementRef,
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
		private _userData: UserDataService,
		private _itemColor: ItemColorService
	) { }

	ngOnInit() {
		this._userId = this._activatedRoute.snapshot.paramMap.get('id');

		this._userData.getUserData(this._userId).subscribe(user => {
			this._user = User.fromObject(user);
		});

		Ps.initialize(
			this._elementRef.nativeElement.querySelector('.user_dashboard-router_outlet')
		);
		this._updateScrollInterval = setInterval(
			() => Ps.update(this._elementRef.nativeElement.querySelector('.user_dashboard-router_outlet'),
			150
		));
	}

	ngOnDestroy() {
		clearInterval(this._updateScrollInterval);
	}

	public get user(): User {
		return this._user;
	}

}
