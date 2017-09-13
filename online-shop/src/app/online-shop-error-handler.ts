import { Injectable } from '@angular/core';
import { ErrorHandler } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class OnlineShopErrorHandler implements ErrorHandler {

    private _errorSubject: Subject<any> = new Subject<any>();

    public get errorObservable(): Observable<any> {
        return this._errorSubject;
    }

    constructor() {
    }

    public handleError(error: any): void {
        this._errorSubject.next(error);
    }
}