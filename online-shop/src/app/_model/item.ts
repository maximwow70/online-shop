import { FeatureList } from "app/_model/feature-list";
import { Feature } from "app/_model/feature";

export class Item {

    private _id: string;

    private _name: string;
    private _description: string;

    private _featureLists: FeatureList[];

    private _photosUrl: string[] = [];
    private static basePhotoUrl: string = 'assets/items/';

    public get id(): string {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }
    public get description(): string {
        return this._description;
    }
    public get photosUrl(): string[] {
        return this._photosUrl;
    }
    public get featureLists(): FeatureList[] {
        return this._featureLists;
    }

    constructor(id: string, name: string, description: string, featureLists: FeatureList[], photosUrl: string[]) {
        this._id = id;
        this._name = name;
        this._description = description;

        this._featureLists = featureLists;

        this._photosUrl = photosUrl.map(pUrl => Item.basePhotoUrl + pUrl);
    }

    public static toJSON(item: Item): any {
        return {
            id: item.id,
            name: item.name,
            description: item.description,
            featureLists: item.featureLists.map(fl => FeatureList.toJSON(fl)),
            photosUrl: item.photosUrl
        };
    }
    public static fromJSON(json: any): Item {
        return new Item(
            json.id,
            json.name,
            json.description,
            json.featureLists ? json.featureLists.map(fl => FeatureList.fromJSON(fl)) : [],
            json.photosUrl
        );
    }

}
