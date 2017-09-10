import { Injectable } from '@angular/core';
import { Category } from "app/_model/category";

@Injectable()
export class CategoryListService {


	private _categoryList: Category[] = [];

	constructor() {
		this._categoryList = [
			new Category(
				0,
				'Hi-Tech',
				true,
				[
					new Category(
						1,
						'Phones',
						false,
						null
					),
					new Category(
						2,
						'TV',
						false,
						null
					),
					new Category(
						3,
						'Video Games',
						false,
						null
					),
					new Category(
						4,
						'Computes',
						true,
						[
							new Category(
								5,
								'Monitors',
								false,
								null
							),
							new Category(
								6,
								'Mouses',
								true,
								[
									new Category(
										100,
										'Mouse 1',
										false,
										null
									),
									new Category(
										101,
										'Mouse 2',
										false,
										null
									)
								]
							),
							new Category(
								7,
								'Processors',
								true,
								[
									new Category(
										105,
										'Processor 1',
										false,
										null
									),
									new Category(
										106,
										'Processor 4',
										false,
										null
									)
								]
							),
							new Category(
								8,
								'System blocks',
								false,
								null
							),
						]
					)
				]
			),
			new Category(
				20,
				'Shoes',
				true,
				[
					new Category(
						21,
						'Leather Shoes',
						false,
						null
					),
					new Category(
						999,
						'Test long name test long name test long name test long name test long name',
						true,
						[]
					),
					new Category(
						22,
						'Cotton Shoes',
						false,
						null
					),
					new Category(
						23,
						'Leather Shoes special edition',
						false,
						null
					),
					new Category(
						24,
						'Cotton Shoes special edition',
						false,
						null
					),
					new Category(
						25,
						'Cotton Shoes special edition 1',
						false,
						null
					),
					new Category(
						26,
						'Cotton Shoes special edition 2',
						false,
						null
					),
					new Category(
						27,
						'Cotton Shoes special edition 3',
						false,
						null
					),
					new Category(
						28,
						'Cotton Shoes special edition 4',
						false,
						null
					),
					new Category(
						29,
						'Cotton Shoes special edition 5',
						false,
						null
					),
					new Category(
						30,
						'Cotton Shoes special edition 6',
						false,
						null
					),
					new Category(
						31,
						'Cotton Shoes special edition 7',
						false,
						null
					),
					new Category(
						32,
						'Cotton Shoes special edition 8',
						false,
						null
					),
					new Category(
						33,
						'Cotton Shoes special edition 9',
						false,
						null
					),
				]
			)
		];
	}

	public getCategoryList(): Promise<Category[]> {
		return new Promise<Category[]>((resolve,reject) => {
			resolve(this._categoryList);
		});
	}
}
