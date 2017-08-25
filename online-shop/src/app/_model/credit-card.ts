export enum CreditCardType{
    VISA = 0,
    MASTERCARD = 1
}

export class CreditCard {

    private _type: CreditCardType;

    private _firstName: string;
    private _lastName: string;

    private _number: number;

    private _month: number;
    private _year: number;

    private _cvv: number;


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
        return this._firstName + ' ' + this._lastName;
    }

    public get number(): number {
        return this._number;
    }
    public set number(number: number) {
    //     this._number = number.toString().length < 12 
    //         ? number 
    //         : parseInt(number.toString().substring(0, 12));
        this._number = number;
        console.log(this._number);
    }

    public get month(): number {
        return this._month;
    }
    public set month(month: number) {
        this._month = month < 13 && month > 0 
            ? month
            : 1; 
    }
    public set year(year: number) {
        this._year = year;
    }
    public get year(): number {
        return this._year;
    }

    public get cvv(): number {
        return this._cvv;
    }
    public set cvv(cvv: number) {
        this._cvv = cvv > 999
            ? 0
            : cvv;
    }

    constructor(type: CreditCardType) {
        this._type = type;
    }
}
