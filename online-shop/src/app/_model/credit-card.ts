export enum CreditCardType {
    VISA = 0,
    MASTERCARD = 1
}

export class CreditCard {

    private _type: CreditCardType = null;

    private _firstName: string = null;
    private _lastName: string = null;

    private _number: number = null;

    private _month: number = null;
    private _year: number = null;

    private _cvv: number = null;


    public get type(): CreditCardType {
        return this._type;
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(firstName: string) {
        this._firstName = firstName;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(lastName: string) {
        this._lastName = lastName;
    }
    public get fullName(): string {
        if (this._firstName !== null && this._lastName !== null) {
            return this._firstName + ' ' + this._lastName;
        } else {
            return null;
        }
    }

    public get number(): number {
        return this._number;
    }
    public set number(number: number) {
        //     this._number = number.toString().length < 12 
        //         ? number 
        //         : parseInt(number.toString().substring(0, 12));
        this._number = number;
    }

    public get month(): number {
        return this._month;
    }
    public set month(month: number) {
        this._month = month < 13 && month > 0
            ? month
            : null;
    }
    public set year(year: number) {
        this._year = year >= new Date().getFullYear() && year <= 9999
            ? year
            : null;
    }
    public get year(): number {
        return this._year;
    }

    public get cvv(): number {
        return this._cvv;
    }
    public set cvv(cvv: number) {
        this._cvv = cvv > 999 || cvv < 0
            ? 0
            : cvv;
    }

    constructor(type: CreditCardType) {
        this._type = type;
    }
}
