import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

export enum NotifyType {
	SUCCESS,
	ERROR
}

export class Notify {
	private _id: number = null;
	private _type: NotifyType = null;
	private _template: string = null;

	public get id(): number {
		return this._id;
	}
	public get type(): NotifyType {
		return this._type;
	}
	public get template(): string {
		return this._template;
	}

	constructor(id: number, type: NotifyType, template: string) {
		this._id = id;
		this._type = type;
		this._template = template;
	}

	public equals(other: Notify): boolean {
		if (!other) {
			return false;
		}
		return this._id === other._id
			&& this._type === other._type
			&& this._template === other._template;
	}
}

@Injectable()
export class NotifyManager {

	private DEFAULT_TIME: number = 5000;

	private _notifyList: Notify[] = [];
	private _notifyListSubject: Subject<Notify[]> = new Subject<Notify[]>();

	public get notifyList(): Notify[] {
		return this._notifyList;
	}
	public get notifyListObservable(): Observable<Notify[]> {
		return this._notifyListSubject;
	}

	constructor() {
		// this.success('success', 10000000);
		// this.success('success', 2000000);
		// this.success('success', 1000000);
		// this.error('error', 1000000);
	}

	private onNotify(notifyType: NotifyType, template: string, time: number = this.DEFAULT_TIME): void {
		let notify = new Notify(
			this._notifyList.length,
			notifyType,
			template
		);
		this._notifyList.push(notify);
		this._notifyListSubject.next(this._notifyList);
		setTimeout(() => {
			this._notifyList = this._notifyList.filter(n => !n.equals(notify));
			this._notifyListSubject.next(this._notifyList);
		}, time);
	}

	public success(template: string, time: number = this.DEFAULT_TIME): void {
		this.onNotify(NotifyType.SUCCESS, template, time);
	}

	public error(template: string, time: number = this.DEFAULT_TIME): void {
		this.onNotify(NotifyType.ERROR, template, time);
	}

}
