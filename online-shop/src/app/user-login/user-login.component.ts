import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

	public userSignIn: {mail: string, password: string} = {mail: '', password: ''};

	public userSignUp: {mail: string, password: string, confirmPassword: string} = {mail: '', password: '', confirmPassword: ''};

	private _isSignInActive: boolean = true;

	constructor() { }

	ngOnInit() {
	}

	public onUserSignIn(event: Event) {
		event.preventDefault();
		console.log(this.userSignIn);
	}

	public onUserSignUp(event: Event) {
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

}
