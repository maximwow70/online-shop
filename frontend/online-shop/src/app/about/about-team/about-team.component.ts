import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'about-team',
	templateUrl: './about-team.component.html',
	styleUrls: ['./about-team.component.scss']
})
export class AboutTeamComponent implements OnInit {

	private _teamMembers: { name: string, position: string, photoUrl: string, socialUrls: string[] }[] = [];
	public get teamMembers(): { name: string, position: string, photoUrl: string, socialUrls: string[] }[] {
		return this._teamMembers;
	}
	
	constructor() {
		this._teamMembers.push({
			name: 'Peter Anderson',
			position: 'Tecnical director',
			photoUrl: 'assets/team/team1.jpg',
			socialUrls: []
		});
		this._teamMembers.push({
			name: 'Natasha Ivanova',
			position: 'Art director',
			photoUrl: 'assets/team/team2.jpg',
			socialUrls: []
		});
		this._teamMembers.push({
			name: 'George Hendrix',
			position: 'Simple worker',
			photoUrl: 'assets/team/team3.jpg',
			socialUrls: []
		});
	}

	ngOnInit() {
	}

}
