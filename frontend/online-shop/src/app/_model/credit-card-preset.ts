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

    public equals(other: CreditCardPreset): boolean {
        if (!other) {
            return false;
        }
        return this.id === other.id
            && this.name === other.name
            && this.creditCard.equals(other.creditCard);
    }

    public static toJSON(creditCardPreset: CreditCardPreset): any {
        return {
            id: creditCardPreset.id,
            name: creditCardPreset.name,
            creditCard: CreditCard.toJSON(creditCardPreset.creditCard)
        }
    }
    public static fromJSON(json: any): CreditCardPreset {
        return new CreditCardPreset(
            json.name,
            CreditCard.fromJSON(json.creditCard),
            json.id
        );
    }
}