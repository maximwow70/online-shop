import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Category } from "app/_model/category";

declare var Ps: any;

@Component({
	selector: 'category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

	@Input() category: Category = null;

	private _selectedCategories: Category[] = [];

	private _parentStack: Category[] = [];
	private _childrenToShow: Category[] = [];

	private _updateScrollInterval: any = null;

	public get parentStack(): Category[] {
		return this._parentStack;
	}
	public get childrenToShow(): Category[] {
		return this._parentStack.length > 0 ? this._parentStack[this.parentStack.length - 1].children : [];
	}


	constructor(
		private _elementRef: ElementRef
	) {
	}

	ngOnInit() {
		this.parentStack.push(this.category);
	}

	ngAfterViewInit() {
		Ps.initialize(this._elementRef.nativeElement.querySelector('.category-values_container'));
		this._updateScrollInterval = setInterval(() => {
			Ps.update(this._elementRef.nativeElement.querySelector('.category-values_container'));
		}, 150);
	}

	ngOnDestroy() {
		clearInterval(this._updateScrollInterval);
	}

	public onRootClick(): void {
		if (this._parentStack.length > 1) {
			this._elementRef.nativeElement.querySelector('.category').classList.add('category--open');
		} else {
			this._elementRef.nativeElement.querySelector('.category').classList.toggle('category--open');
		}
		this._parentStack = [];
		this._parentStack.push(this.category);
	}
	public onChildClick(child: Category): void {
		if (!child.hasChildren) {
			if (!this._selectedCategories.some(c => c.equals(child))) {
				this._selectedCategories.push(child);
			} else {
				this._selectedCategories = this._selectedCategories.filter(c => !c.equals(child));
			}
		} else {
			this._parentStack.push(child);
		}
	}
	public onParentClick(parent: Category): void {
		let currentParent = this._parentStack[this._parentStack.length - 1];
		while (this._parentStack.length > 0 && !parent.equals(currentParent)) {
			this._parentStack.pop();
			currentParent = this._parentStack[this._parentStack.length - 1];
		}
	}

	public isCategorySelected(category: Category): boolean {
		if (!category.hasChildren) {
			return this._selectedCategories.some(c => category.equals(c));
		} else if (category.children && category.children.length > 0) {
			let isAllChildrenSelected = true;
			category.children.map(child => {
				if (this.isCategorySelected(child) !== true) {
					isAllChildrenSelected = false;
				}
			});
			return isAllChildrenSelected;
		} else {
			return false;
		}
	}

}
