export class CostRange {

    private _min: number = null;
    private _max: number = null;

    public get min(): number {
        return this._min;
    }
    public get max(): number {
        return this._max;
    }

    public get range(): number {
        return this._max - this._min;
    }

    constructor(min: number, max: number) {
        this._max = max;
        this._min = min;
    } 

    public equals(other: CostRange): boolean {
        if (!other) {
            return false;
        }
        return this._min === other.min && this._max === other.max;
    }

    public static toJSON(costRange: CostRange): any {
        return {
            min: costRange.min,
            max: costRange.max
        }
    }
    public static fromJSON(json: any): CostRange {
        return new CostRange(json.min, json.max);
    }
}
