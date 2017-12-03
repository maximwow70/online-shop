import { Component, OnInit, ElementRef } from '@angular/core';

import * as echarts from "echarts/dist/echarts.min.js";

export class UserCategoryLikesData {
	private _category: string = null;
	private _likes: number = null;

	public get category(): string {
		return this._category;
	}
	public get likes(): number {
		return this._likes;
	}

	constructor(category: string, likes: number) {
		this._category = category;
		this._likes = likes;
	}
}

@Component({
	selector: 'user-category-likes',
	templateUrl: './user-category-likes.component.html',
	styleUrls: ['./user-category-likes.component.scss']
})
export class UserCategoryLikesComponent implements OnInit {

	private _resizeListener: any = null;

	private _chart: any = null;
	private _data: UserCategoryLikesData[] = null;

	constructor(
		private _elementRef: ElementRef
	) {
		this._data = [
			new UserCategoryLikesData("Man Cloth", 600),
			new UserCategoryLikesData("Phones", 450),
			new UserCategoryLikesData("Toys", 350),
			new UserCategoryLikesData("Books", 200),
			new UserCategoryLikesData("Computes", 150),
			new UserCategoryLikesData("Other", 45)
		];
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		this._chart = echarts.init(this._elementRef.nativeElement.querySelector(".user-category-likes--chart"));

		const colors = [
			'rgba(235, 78, 54, 0.7)',
			'rgba(232, 198, 59, 0.7)',
			'rgba(67, 210, 158, 0.7)',
			'rgba(81, 221, 233, 0.7)',
			'rgba(161, 166, 187, 0.7)',
			'rgba(58, 64, 91, 0.7)',
		];

		const option = {
			tooltip: {
				trigger: 'item',
				formatter: "{b} : {c} ({d}%)"
			},
			legend: {
				x: "center",
				y: "bottom",
				data: this._data.map(d => d.category),
				textStyle: {
					color: '#3A405B',
					fontFamily: "ubuntu--b, Arial, Helvetica, sans-serif",
					fontSize: 13
				}
			},
			series: [
				{
					name: 'Category Likes',
					type: 'pie',
					radius: ['50%', '70%'],
					center: ['50%', '42%'],
					avoidLabelOverlap: false,
					data: this._data.sort((a, b) => a.likes - b.likes).map((d, i, arr) => {
						return {
							value: d.likes,
							name: d.category,
							itemStyle: { normal: { color: colors[i > arr.length ? arr.length % i : i] } }
						}
					}),
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								color: '#3A405B',
								fontFamily: "ubuntu--b, Arial, Helvetica, sans-serif",
								fontSize: 20
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					animationType: 'scale',
					animationEasing: 'elasticOut',
					animationDelay: () => Math.random() * 200
				}
			]
		};

		this._chart.setOption(option);

		this._resizeListener = () => this._chart.setOption(option);
		window.addEventListener("resize", this._resizeListener);
	}

	ngOnDestroy() {
		window.removeEventListener("resize", this._resizeListener);
	}

}
