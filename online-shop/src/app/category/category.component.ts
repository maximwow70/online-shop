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

	public get parentStack(): Category[] {
		return this._parentStack;
	}
	public get childrenToShow(): Category[] {
		return this._parentStack.length > 0 ? this._parentStack[this.parentStack.length - 1].children : [];
	}

	private _updateScrollInterval: any = null;

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
			this._selectedCategories.push(child);
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

}
