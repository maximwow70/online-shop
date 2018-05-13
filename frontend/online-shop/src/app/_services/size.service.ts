import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Category } from "app/_model/category";
import { Size } from "app/_model/size";

import 'rxjs';
import { ApplicationService } from '../application.service';

@Injectable()
export class SizeService {

	constructor(
		private _http: Http,
		private _application: ApplicationService
	) { }

	public getSizes(category: Category): Promise<Size[]> {
		return this._http.get(`${this._application.apiBase}size`, "").map(res =>
			res.json().map(s => Size.fromJSON(s))
		).toPromise();
	}

}
