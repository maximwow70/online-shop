import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Category } from "app/_model/category";
import { Size } from "app/_model/size";

import 'rxjs';

@Injectable()
export class SizeService {

	constructor(
		private _http: Http
	) { }

	public getSizes(category: Category): Promise<Size[]> {
		return this._http.get('GetSizes?categoryId=' + JSON.stringify(category.id), '').map(res =>
			res.json().map(s => Size.fromJSON(s))
		).toPromise();
	}

}
