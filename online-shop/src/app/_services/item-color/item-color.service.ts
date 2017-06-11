import { Injectable } from '@angular/core';
import { Color } from "app/_model/color";
import { Item } from "app/_model/item";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

@Injectable()
export class ItemColorService {

	constructor(
		private _http: Http
	) {
		
	}

	public getColorsByItem(item: Item): Observable<string[]> {
		return this._http.get('GetColors' + '?id=' + item.id).map(response => response.json());
	}

	public getClassByColor(color: Color): string {
		switch (color.name){
			case 'white': return 'white';
			case 'black': return 'black';
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
