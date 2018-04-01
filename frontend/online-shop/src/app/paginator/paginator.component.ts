import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'paginator',
	templateUrl: './paginator.component.html',
	styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

	@Input() pages: number;
	@Input() selectedPage: number;

	@Output() onPageSelected: EventEmitter<number> = new EventEmitter<number>();

	constructor() { }

	ngOnInit() {
		if (!this.selectedPage || this.selectedPage < 1) {
			this.selectedPage = 1;
			this.onPageSelected.emit(this.selectedPage);
		} else if (this.pages && this.selectedPage > this.pages) {
			this.selectedPage = this.pages;
			this.onPageSelected.emit(this.selectedPage);
		}
	}

	public onPageSelect(page: number): void {
		this.selectedPage = page;
		this.onPageSelected.emit(this.selectedPage);
	}
	public onPrevSelect(): void {
		this.onPageSelect(
			(this.selectedPage > 1) ? (this.selectedPage - 1) : 1
		);
	}
	public onNextSelect(): void {
		this.onPageSelect(
			(this.selectedPage < this.pages) ? (this.selectedPage + 1) : this.pages
		);
	}


	public isPageSelected(page: number): boolean {
		return page === this.selectedPage;
	}


	public updateVM(): any {
		let pages = [];
		for (let page = 1; page < this.pages + 1; page++) {
			if ((page > this.selectedPage - 4) && (page < this.selectedPage + 4)) {
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
