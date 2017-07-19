import { Component, OnInit } from '@angular/core';
import { UserDashboardTheme } from "app/_model/user-dashboard-theme";
import { UserDataService } from "app/_services/user-data/user-data.service";

@Component({
	selector: 'user-settings',
	templateUrl: './user-settings.component.html',
	styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

	private _themes: {value: UserDashboardTheme, class: string}[] = null;

	constructor(
		private _userData: UserDataService
	) { 
		this._themes = [
			{
				value: UserDashboardTheme.LIGHT,
				class: 'light'
			},
			{
				value: UserDashboardTheme.DARK,
				class: 'dark'
			}
		]
	}

	ngOnInit() {
	}

	public onActivateTheme(theme: UserDashboardTheme): void {
		this._userData.activateTheme(theme);
		console.log(this._userData.activeTheme);
	}

	public get themes(): {value: UserDashboardTheme, class: string}[]{
		return this._themes;
	}

	public get activeTheme(): UserDashboardTheme {
		return this._userData.activeTheme;
	}

}
