import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
	selector: 'about-skills',
	templateUrl: './about-skills.component.html',
	styleUrls: ['./about-skills.component.scss']
})
export class AboutSkillsComponent implements OnInit {

	private _skillList: { name: string, value: number }[] = [];

	private _values = [ 85, 80, 90, 95, 82 ];
	constructor(
		private _elementRef: ElementRef
	) {
		let values = "";
		this._skillList.push({
			name: "Marketing",
			value: 0
		});
		this._skillList.push({
			name: "Reaserch",
			value: 0
		});
		this._skillList.push({
			name: "Managment",
			value: 0
		});
		this._skillList.push({
			name: "Consultancy",
			value: 0
		});
		this._skillList.push({
			name: "Promotion",
			value: 0
		});


	}

	ngOnInit() {
		let that = this;
		let initTopScroll =
			this._elementRef.nativeElement.querySelector('.about_skills')
				.offsetTop - document.documentElement.clientHeight;


		if (window.pageYOffset < initTopScroll) {
			window.addEventListener('scroll', initMagicSkills);
		} else {
			initMagicSkills();
		}

		function initMagicSkills() {
			if (window.pageYOffset > initTopScroll) {
				for (let i = 0; i < that._skillList.length; i++) {
					increaseSkillsFromArray(i);
				}
				window.removeEventListener('scroll', initMagicSkills);
			}
		}
		function increaseSkillsFromArray(index) {
			that._skillList[index].value = 0;
			let interval = setInterval(function () {
				if (that._skillList[index].value >= that._values[index]) {
					clearInterval(interval);
				} else {
					that._skillList[index].value++;
				}
			}, 1250 / that._values[index]);
		}
	}

	public get skillList(): any[] {
		return this._skillList;
	}

}
