import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

export enum NotifyType {
	SUCCESS,
	ERROR
}

export class Notify {
	private _id: number = null;
	private _type: NotifyType = null;
	private _title: string = null;
	private _message: string = null;

	public get id(): number {
		return this._id;
	}
	public get type(): NotifyType {
		return this._type;
	}
	public get title(): string {
		return this._title;
	}
	public get message(): string {
		return this._message;
	}

	constructor(id: number, type: NotifyType, title: string, message: string) {
		this._id = id;
		this._type = type;
		this._title = title;
		this._message = message;
	}

	public equals(other: Notify): boolean {
		if (!other) {
			return false;
		}
		return this._id === other._id
			&& this._type === other._type
			&& this._title === other._title
			&& this._message === other._message;
	}
}

@Injectable()
export class NotifyManager {

	private DEFAULT_TIME: number = 3000;
	private _notifyId: number = 0;

	private _notifyList: Notify[] = [];
	private _notifyListSubject: Subject<Notify[]> = new Subject<Notify[]>();

	public get notifyList(): Notify[] {
		return this._notifyList;
	}
	public get notifyListObservable(): Observable<Notify[]> {
		return this._notifyListSubject;
	}

	constructor() {
		
	}

	private onNotify(notifyType: NotifyType, message: string, time: number = this.DEFAULT_TIME): void {
		let notify = new Notify(
			this._notifyId > 2000000 ? this._notifyId = 0 : this._notifyId++,
			notifyType,
			notifyType === NotifyType.SUCCESS ? 'Success!' : 'Oops!',
			message
		);
		this._notifyList.push(notify);
		this._notifyListSubject.next(this._notifyList);
		setTimeout(() => {
			this._notifyList = this._notifyList.filter(n => !n.equals(notify));
			this._notifyListSubject.next(this._notifyList);
		}, time);
	}

	public success(message: string, time: number = this.DEFAULT_TIME): void {
		this.onNotify(NotifyType.SUCCESS, message, time);
	}

	public error(message: string, time: number = this.DEFAULT_TIME): void {
		this.onNotify(NotifyType.ERROR, message, time);
	}

}
