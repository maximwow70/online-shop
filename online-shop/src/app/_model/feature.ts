export class Feature {

    private _name: string;
    private _value: string;

    public get name(): string {
        return this._name
    }
    public get value(): string {
        return this._value;
    }

    constructor(name: string, value: string) {
        this._name = name;
        this._value = value;
    }

    public equals(other: Feature): boolean {
        if (!other) {
            return false;
        }
        return this.name === other.name
            && this.value === other.value;
    }

    public static toJSON(feature: Feature): any {
        return {
            name: feature.name,
            value: feature.value
        }
    }
    public static fromJSON(json: any): Feature {
        return new Feature(
            json.name,
            json.value
        );
    }
}
