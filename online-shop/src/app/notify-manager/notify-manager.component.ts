import { Component, OnInit } from '@angular/core';
import { NotifyManager, Notify, NotifyType } from "app/_services/notify-manager.service";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'notify-manager',
	templateUrl: './notify-manager.component.html',
	styleUrls: ['./notify-manager.component.scss'],
	animations: [
		trigger('flyInOut', [
			transition(':enter', [
				style({ transform: 'translate(0px, 0)', opacity: '0'}),
				animate('0.5s ease-out')
			]),
    		state('static', style({transform: 'translate(-320px, 0)', opacity: '1'})),
			transition(':leave', [
				animate('0.25s ease-in', style({ transform: 'translate(0px, 0)', opacity: '0' }))
			])
		])
	]
})
export class NotifyManagerComponent implements OnInit {

	public get notifyList(): Notify[] {
		return this._notifyManager.notifyList;
	}

	constructor(
		private _notifyManager: NotifyManager
	) { }

	ngOnInit() {
	}

	public getClassByType(type: NotifyType): string {
		switch (type) {
			case NotifyType.SUCCESS: {
				return 'success';
			}
			case NotifyType.ERROR: {
				return 'error';
			}
			default: {
				return '';
			}
		}
	}


}
