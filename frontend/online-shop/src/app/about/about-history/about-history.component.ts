import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
	selector: 'about-history',
	templateUrl: './about-history.component.html',
	styleUrls: ['./about-history.component.scss']
})

export class AboutHistoryComponent implements OnInit {

	private _histories: {year: number, description: string}[] = [];
	
	constructor() { 
		this._histories = [
			{
				year: 2007,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam blanditiis laudantium recusandae minima, aliquam similique! Doloremque pariatur voluptas quasi impedit.'
			},
			{
				year: 2009,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam blanditiis laudantium recusandae minima, aliquam similique! Doloremque pariatur voluptas quasi impedit.'
			},
			{
				year: 2010,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam blanditiis laudantium recusandae minima, aliquam similique! Doloremque pariatur voluptas quasi impedit.'
			},
			{
				year: 2012,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam blanditiis laudantium recusandae minima, aliquam similique! Doloremque pariatur voluptas quasi impedit.'
			},
			{
				year: 2014,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam blanditiis laudantium recusandae minima, aliquam similique! Doloremque pariatur voluptas quasi impedit.'
			},
			{
				year: 2017,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam blanditiis laudantium recusandae minima, aliquam similique! Doloremque pariatur voluptas quasi impedit.'
			},
		];
	}

	ngOnInit() {
	}


	public get histories(): {year: number, description: string}[] {
		return this._histories;
	}

}
