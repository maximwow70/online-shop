import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserDataService } from "app/_services/user-data.service";
import { User } from "app/_model/user";
import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemColorService } from "app/_services/item-color.service";
import { UserDashboardTheme } from "app/_model/user-dashboard-theme";

declare var Ps;

@Component({
	selector: 'user-dashboard',
	templateUrl: './user-dashboard.component.html',
	styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
	
	private _updateScrollInterval: any = null;

	private _user: User;

	constructor(
		private _elementRef: ElementRef,
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
		private _userData: UserDataService,
	) { }

	ngOnInit() {
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

	public getVMTheme(): {class: string} {
		switch(this._userData.activeTheme) {
			case(UserDashboardTheme.LIGHT): return {
				class: '--light'
			}
			case(UserDashboardTheme.DARK): return {
				class: '--dark'
			}
			default: return null;
		}
	}

	public get user(): User {
		return this._userData.user;
	}
	public get isLogIn(): boolean {
		return this._userData.isLogIn;
	}

}
