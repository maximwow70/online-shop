import { Component, OnInit } from '@angular/core';

const lineChartOptions = {
	responsive: true,
	scales: {
		xAxes: [
			{
				ticks: {
					fontColor: '#3A405B',
					fontFamily: 'ubuntu--b, Arial, Helvetica, sans-serif',
					fontSize: '14'
				}
			}
		],
		yAxes: [
			{
				ticks: {
					fontColor: '#3A405B',
					fontFamily: 'ubuntu--b, Arial, Helvetica, sans-serif',
					fontSize: '14'
				}
			}
		]
	},
	elements: {
		point: {
			radius: 4,
			hitRadius: 5,
			borderWidth: 4,
			hoverRadius: 4,
			hoverBorderWidth: 4
		}
	}
}
const lineChartColors = [
	{
		backgroundColor: 'rgba(161,166,187,0.2)',
		borderColor: '#3A405B',
		pointBackgroundColor: '#fff',
		pointBorderColor: '#3A405B',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: '#EB4E36'
	}
]
const doughnutChartColors = [
	{
		backgroundColor: [
			'rgba(235, 78, 54, 0.7)',
			'rgba(232, 198, 59, 0.7)',
			'rgba(67, 210, 158, 0.7)',
			'rgba(81, 221, 233, 0.7)',
			'rgba(58, 64, 91, 0.7)',
			'rgba(161, 166, 187, 0.7)',
		],
		borderColor: '#FFF',
		hoverBackgroundColor: [
			'rgba(235, 78, 54, 0.8)',
			'rgba(232, 198, 59, 0.8)',
			'rgba(67, 210, 158, 0.8)',
			'rgba(81, 221, 233, 0.8)',
			'rgba(58, 64, 91, 0.8)',
			'rgba(161, 166, 187, 0.8)'
		],
		hoverBorderColor: '#F0F2F7'
	}
]

@Component({
	selector: 'user-statistic',
	templateUrl: './user-statistic.component.html',
	styleUrls: ['./user-statistic.component.scss']
})
export class UserStatisticComponent implements OnInit {

	private _orderStatistic: any;

	private _likeStatistic: any;
	private _categoryLikeStatistic: any;

	private _cashStatistic: any;

	constructor() {
		this._orderStatistic = {
			data: [{ data: [12, 7, 8, 16, 2, 4, 9], label: 'Orders' }],
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			options: lineChartOptions,
			colors: lineChartColors,
			legend: false,
			type: 'line',
			total: 145
		};

		this._likeStatistic = {
			data: [{ data: [120, 76, 82, 16, 56, 34, 20], label: 'Likes' }],
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			options: lineChartOptions,
			colors: lineChartColors,
			legend: false,
			type: 'line',
			total: 256
		};
		this._categoryLikeStatistic = {
			data: [600, 450, 350, 200, 150, 45],
			labels: ['Man Cloth', 'Phones', 'Toys', 'Books', 'Computes', 'Other'],
			type: 'doughnut',
			options: {
				legend: {
					position: 'right'
				}
			},
			colors: doughnutChartColors
		};

		this._cashStatistic = {
			data: [{ data: [13, 34, 15, 59, 42, 16, 62], label: 'Cash' }],
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			options: lineChartOptions,
			colors: lineChartColors,
			legend: false,
			type: 'line',
			total: 190
		};
	}

	ngOnInit() {
	}

	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}

	public get orderStatistic(): any {
		return this._orderStatistic;
	}
	public get likeStatistic(): any {
		return this._likeStatistic;
	}
	public get categoryLikeStatistic(): any {
		return this._categoryLikeStatistic;
	}
	public get cashStatistic(): any {
		return this._cashStatistic;
	}

}
