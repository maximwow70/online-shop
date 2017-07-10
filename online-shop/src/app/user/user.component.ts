import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

	constructor(
		private _router: Router
	) { }

	ngOnInit() {
		this._router.navigate(['/user', 'login']);
	}

}
