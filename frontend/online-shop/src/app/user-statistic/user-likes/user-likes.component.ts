import { Component, OnInit, ElementRef } from '@angular/core';

import * as echarts from "echarts/dist/echarts.min.js";

export class UserLikesData {
	private _month: string = null;
	private _data: number = null;

	public get month(): string {
		return this._month;
	}
	public get data(): number {
		return this._data;
	}

	constructor(month: string, data: number) {
		this._month = month;
		this._data = data;
	}
}

@Component({
	selector: 'user-likes',
	templateUrl: './user-likes.component.html',
	styleUrls: ['./user-likes.component.scss']
})
export class UserLikesComponent implements OnInit {

	private _resizeListener: any = null;

	private _chart: any = null;
	private _data: UserLikesData[] = null;

	public get total(): number {
		let total = 0;
		this._data.map(d => total += d.data);
		return total;
	}
	
	constructor(
		private _elementRef: ElementRef
	) {
		this._data = [
			new UserLikesData("January", 143),
			new UserLikesData("February", 120),
			new UserLikesData("March", 23),
			new UserLikesData("April", 48),
			new UserLikesData("May", 10),
			new UserLikesData("June", 4),
			new UserLikesData("Jule", 12),
			new UserLikesData("September", 6),
			new UserLikesData("October", 64),
			new UserLikesData("November", 232),
			new UserLikesData("December", 465),
		];
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		this._chart = echarts.init(this._elementRef.nativeElement.querySelector(".user-likes--chart"));

		const option = {
			tooltip: {
				trigger: 'item',
				formatter: "{b} : {c}"
			},
			grid: {
				left: '40px',
				right: '40px',
				bottom: '30px',
				top: '5px'
			},
			xAxis: {
				data: this._data.map(d => d.month),
				boundaryGap: false,
				axisLine: {
					lineStyle: {
						color: 'rgba(58, 64, 91, 0.2)'
					}
				},
				splitLine: {
					show: true
				},
				axisLabel: {
					textStyle: {
						color: '#3A405B',
						fontFamily: "ubuntu--b, Arial, Helvetica, sans-serif",
						fontSize: 14
					}
				}
			},
			yAxis: {
				axisLine: {
					lineStyle: {
						color: 'rgba(58, 64, 91, 0.2)'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#3A405B',
						fontFamily: "ubuntu--b, Arial, Helvetica, sans-serif",
						fontSize: 14
					}
				}
			},
			series: [{
				name: 'orders',
				data: this._data.map(d => d.data),
				type: 'line',
				smooth: true,
				symbolSize: 10,
				areaStyle: {
					normal: {
						color: 'rgba(58, 64, 91, 0.2)'
					}
				},
				lineStyle: {
					normal: {
						width: 3,
						color: '#3A405B'
					}
				},
				itemStyle: {
					normal: {
						color: "rgba(58, 64, 91, 0.2)",
						borderColor: "#3A405B",
						borderWidth: 4
					}
				}
			}]
		};

		this._chart.setOption(option);

		this._resizeListener = () => this._chart.setOption(option);
		window.addEventListener("resize", this._resizeListener);
	}

	ngOnDestroy() {
		window.removeEventListener("resize", this._resizeListener);
	}


}
