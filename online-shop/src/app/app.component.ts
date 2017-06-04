import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';

	private _responseFromServer = 'pesos';

	constructor(private _http: Http) {
		this.getResponseFromServer();
	}

	private getResponseFromServer(): void {
		this._http.get('TestServlet')
			.map(response => response.json()).subscribe(
				response => this._responseFromServer = response.toString()
			);
	}

	public get responseFromServer(): string {
		return this._responseFromServer;
	}
}
