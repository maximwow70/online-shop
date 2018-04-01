import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Category } from "app/_model/category";

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

	public get parentStack(): Category[] {
		return this._parentStack;
	}
	public get childrenToShow(): Category[] {
		return this._parentStack.length > 0 ? this._parentStack[this.parentStack.length - 1].children : [];
	}


	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
		this.parentStack.push(this.category);
	}

	public toggleRoot(): void {
		if (this._parentStack.length > 1) {
			this._elementRef.nativeElement.querySelector('.category').classList.add('open');
		} else {
			this._elementRef.nativeElement.querySelector('.category').classList.toggle('open');
		}
		this._parentStack = [this.category];
	}
	public toggleChild(child: Category): void {
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
	public toggleParent(parent: Category): void {
		let currentParent = this._parentStack[this._parentStack.length - 1];
		while (this._parentStack.length > 0 && !parent.equals(currentParent)) {
			this._parentStack.pop();
			currentParent = this._parentStack[this._parentStack.length - 1];
		}
	}

	public isCategorySelected(category: Category): boolean {
		return !category.hasChildren
			? this._selectedCategories.some(c => category.equals(c))
			: category.children && category.children.length > 0
				? category.children.every(c => this.isCategorySelected(c))
				: false;
	}

}
