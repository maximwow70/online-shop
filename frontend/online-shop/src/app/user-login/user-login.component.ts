import { Component, OnInit, ElementRef } from '@angular/core';
import { UserDataService } from "app/_services/user-data.service";
import { ActivatedRoute, Router } from "@angular/router";

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
		private _router: Router,
		private _userData: UserDataService,
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
		
	}
	ngAfterViewInit() {
		this.onSignInActivate();
	}

	public onUserSignIn(event: Event): void {
		event.preventDefault();
		this._userData.logIn(this.userSignIn.mail, this.userSignIn.password);
		this._router.navigate(['user/info']);
	}

	public onUserSignUp(event: Event): void {
		event.preventDefault();
		console.log(this.userSignUp);
	}


	public onSignInActivate(): void {
		this._isSignInActive = true;
		let signInInputVM = this._elementRef.nativeElement.querySelector('.user_sign_in-mail');
		if (signInInputVM){
			setTimeout(() => signInInputVM.focus());
		}
	}
	public onSignUpActivate(): void {
		this._isSignInActive = false;
		let signUpInputVM = this._elementRef.nativeElement.querySelector('.user_sign_up-mail');
		if (signUpInputVM){
			setTimeout(() => signUpInputVM.focus());
		}
	}

	public get isSignInActive(): boolean {
		return this._isSignInActive;
	}

	public get isLogIn(): boolean {
		if (this._userData.isLogIn === true){
			this._router.navigate(['user/info']);
		}
		return this._userData.isLogIn;
	}

}
