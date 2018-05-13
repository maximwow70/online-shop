import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationService {

	private _apiBase: string = "http://localhost:8080/api/";
	public get apiBase(): string {
		return this._apiBase;
	}

	constructor() { }

}
