import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'paginator',
	templateUrl: './paginator.component.html',
	styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
	
	@Input() pages: number;
	@Input() startPage: number;
	
	@Output() selectedPage: EventEmitter<number> = new EventEmitter<number>();
	
	private _selectedPage: number;

	constructor() { }

	ngOnInit() {
		if (this.startPage < 1 || this.startPage == undefined){
			this.startPage = 1;
		} else if (this.startPage > this.pages) {
			this.startPage = this.pages;
		}
		this._selectedPage = this.startPage;
	}
	
	public onPageSelect(page: number): void {
		this._selectedPage = page;
		this.selectedPage.emit(this._selectedPage);
	}
	public onPrevSelect(): void {
		this.onPageSelect(
			(this._selectedPage > 1) ? (this._selectedPage - 1) : 1
		);
	}
	public onNextSelect(): void {
		this.onPageSelect(
			(this._selectedPage < this.pages) ? (this._selectedPage + 1) : this.pages
		);
	}

	
	public isPageSelected(page: number): boolean {
		return page === this._selectedPage;
	}


	public updateVM() : any {
		let pages = [];
		for (let page = 1; page < this.pages + 1; page++){
			if ((page > this._selectedPage - 4) && (page < this._selectedPage + 4)){
				pages.push(page);
			}
		}
		return {
			pages: pages,
		}
	}
	public get vm(): any {
		return this.updateVM();
	}

}
