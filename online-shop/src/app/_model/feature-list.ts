import { Feature } from "app/_model/feature";

export class FeatureList {

    private _name: string;
    private _features: Feature[];

    public get name(): string {
        return this._name;
    }
    public get features(): Feature[] {
        return this._features;
    }

    constructor (name: string, features: Feature[]) {
        this._name = name;
        this._features = features;
    }

}
