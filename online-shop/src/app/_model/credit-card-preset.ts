import { CreditCard } from "app/_model/credit-card";

export class CreditCardPreset {

    private _name: string = null;
    private _creditCard: CreditCard = null;

    public get name(): string {
        return this._name;
    }
    public get creditCard(): CreditCard {
        return this._creditCard;
    }

    constructor(name: string, creditCard: CreditCard) {
        this._name = name;
        this._creditCard = creditCard;
    }
}