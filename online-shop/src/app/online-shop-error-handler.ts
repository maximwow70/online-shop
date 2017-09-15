import { Injectable } from '@angular/core';
import { ErrorHandler, Inject, Injector } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class OnlineShopErrorHandler implements ErrorHandler {

    private _errorSubject: Subject<any> = new Subject<any>();

    public get errorObservable(): Observable<any> {
        return this._errorSubject;
    }

    constructor() { }

    public handleError(error: any): void {
        this._errorSubject.next(error);
    }

}