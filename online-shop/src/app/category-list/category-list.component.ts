import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
	selector: 'category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
	
	@Input() categories: any;
	
	private _selectedCategory: string = '';

	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
	}

	public onToggleCategory(event, categoryNumber): void {
		let category = this._elementRef.nativeElement.querySelectorAll('.category')[categoryNumber]
		
		category.classList.toggle('category--open');
		if (!category.classList.contains('category--open')){
			this._selectedCategory = '';
		}
	}

	public onCategorySelect(categoryName: string): void {
		this._selectedCategory = categoryName;
	}

	public isCategorySelected(categoryName: string): boolean {
		return (this._selectedCategory === categoryName);
	}

}
