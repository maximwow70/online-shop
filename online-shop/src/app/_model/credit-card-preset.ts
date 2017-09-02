import { CreditCard } from "app/_model/credit-card";

export class CreditCardPreset {

    private _id: number = null;
    private _name: string = null;
    private _creditCard: CreditCard = null;

    public get id(): number {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }
    public get creditCard(): CreditCard {
        return this._creditCard;
    }

    constructor(name: string, creditCard: CreditCard, id: number = null) {
        this._name = name;
        this._creditCard = creditCard;
        this._id = id;
    }
}