import { Injectable } from '@angular/core';
import { ErrorHandler, Inject, Injector } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class OnlineShopErrorHandler implements ErrorHandler {

    private _router: Router = null;
    private _errorSubject: Subject<any> = new Subject<any>();

    public get errorObservable(): Observable<any> {
        return this._errorSubject;
    }

    constructor(
        private injector: Injector
    ) {
        this._router = this.injector.get(Router);
        console.log(this._router);
    }

    public handleError(error: any): void {
		this._router.navigate(['/error']);
        this._errorSubject.next(error);
        console.error(error);
    }

}