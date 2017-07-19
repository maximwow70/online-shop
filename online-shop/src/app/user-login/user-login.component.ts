import { Component, OnInit } from '@angular/core';
import { UserDataService } from "app/_services/user-data/user-data.service";

@Component({
	selector: 'user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

	public userSignIn: { mail: string, password: string } = { mail: '', password: '' };

	public userSignUp: { mail: string, password: string, confirmPassword: string } = { mail: '', password: '', confirmPassword: '' };

	private _isSignInActive: boolean = true;

	constructor(
		private _userData: UserDataService
	) { }

	ngOnInit() {
	}

	public onUserSignIn(event: Event): void {
		event.preventDefault();
		this._userData.logInUser(this.userSignIn.mail, this.userSignIn.password);
	}

	public onUserSignUp(event: Event): void {
		event.preventDefault();
		console.log(this.userSignUp);
	}


	public onSignInActivate(): void {
		this._isSignInActive = true;
	}
	public onSignUpActivate(): void {
		this._isSignInActive = false;
	}

	public get isSignInActive(): boolean {
		return this._isSignInActive;
	}

	public get isLogIn(): boolean {
		return this._userData.isLogIn;
	}

}
