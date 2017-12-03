import { Component, OnInit, ElementRef } from '@angular/core';

import * as echarts from "echarts/dist/echarts.min.js";

export class UserOrdersData {
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
	selector: 'user-orders',
	templateUrl: './user-orders.component.html',
	styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {

	private _resizeListener: any = null;

	private _chart: any = null;
	private _data: UserOrdersData[] = null;

	public get total(): number {
		let total = 0;
		this._data.map(d => total += d.data);
		return total;
	}

	constructor(
		private _elementRef: ElementRef
	) {
		this._data = [
			new UserOrdersData("January", 12),
			new UserOrdersData("February", 7),
			new UserOrdersData("March", 8),
			new UserOrdersData("April", 16),
			new UserOrdersData("May", 2),
			new UserOrdersData("June", 4),
			new UserOrdersData("Jule", 0),
			new UserOrdersData("September", 1),
			new UserOrdersData("October", 8),
			new UserOrdersData("November", 6),
			new UserOrdersData("December", 15),
		];
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		this._chart = echarts.init(this._elementRef.nativeElement.querySelector(".user-orders--chart"));

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
