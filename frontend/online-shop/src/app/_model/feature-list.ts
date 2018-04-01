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

    constructor(name: string, features: Feature[]) {
        this._name = name;
        this._features = features;
    }

    public equals(other: FeatureList): boolean {
        if (!other) {
            return false;
        }
        let notEqualsFeatures = this.features.map(feature =>
            !other.features.some(f => feature.equals(f))
        ).concat(other.features.map(feature =>
            !this.features.some(f => feature.equals(f))
        ));
        if (notEqualsFeatures.length > 0) {
            return false;
        }
        return this.name === other.name;
    }

    public static toJSON(featureList: FeatureList): any {
        return {
            name: featureList.name,
            features: featureList.features.map(f => Feature.toJSON(f))
        }
    }
    public static fromJSON(json: any): FeatureList {
        return new FeatureList(
            json.name,
            json.features.map(f => Feature.fromJSON(f))
        );
    } 

}
