import { Injectable } from '@angular/core';

@Injectable()
export class CategoryListService {
	

	private _categoryList: any[] = [];

	constructor() { 
		this._categoryList.push({
			name: 'Hi-Tech',
			values: [
				'Phones',
				'TV',
				'Video Games',
				'Computes'
			]
		});
		this._categoryList.push({
			name: 'Shoes',
			values: [
				'Leather Shoes',
				'Cotton Shoes',
				'Leather Shoes light',
				'Cotton Shoes dark'
			]
		});
		this._categoryList.push({
			name: 'T-Shirt',
			values: [
				'Summer T-Shirt',
				'Winter T-Shirt',
				'Sport T-Shirt',
			]
		});
	}
	
	public getCategoryList(): any[] {
		return this._categoryList;
	}
}
