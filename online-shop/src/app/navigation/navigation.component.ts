import { Component, OnInit, ElementRef } from '@angular/core';
import { Select } from "app/ui/select/select";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
		private _elementRef: ElementRef
  ) { }

  ngOnInit() {
	let select = new Select(this._elementRef.nativeElement.querySelector('.navigation .select'));

  }

}
