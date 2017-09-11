import { Injectable } from '@angular/core';
import { Color } from "app/_model/color";
import { Item } from "app/_model/item";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

import 'rxjs';

@Injectable()
export class ColorService {

	constructor(
		private _http: Http
	) {

	}

	public getColors(): Promise<Color[]> {
		return this._http.get('GetColors', '').map(res =>
			res.json().map(c => Color.fromJSON(c))
		).toPromise();
	}

	public getClassByColor(color: Color): string {
		switch (color.name) {
			case 'white': return 'white';
			case 'black': return 'black';
			case 'brown': return 'brown';
			case 'red': return 'red';
			case 'blue': return 'blue';
			case 'green': return 'green';
			case 'dark grey': return 'dark_grey';
			case 'eggplant': return 'eggplant';
			case 'military': return 'military';
			default: return 'multicolor';
		}
	}

}
