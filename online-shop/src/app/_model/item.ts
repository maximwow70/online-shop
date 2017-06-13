import { FeatureList } from "app/_model/feature-list";
import { Feature } from "app/_model/feature";

export class Item {
    
    private _id: string;

    private _name: string;
    private _description: string;

    private _featureLists: FeatureList[];

    private static basePhotoUrl: string = 'assets/items/';
    private _photosUrl: string[] = [];
    
    constructor(id: string, name: string, description: string, featureLists: FeatureList[], photosUrl: string[]) {
        this._id = id;
        this._name = name;
        this._description = description;

        this._featureLists = featureLists;

        for (let photoUrl = 0; photoUrl < photosUrl.length; photoUrl++){
            this._photosUrl.push(
                Item.basePhotoUrl + photosUrl[photoUrl]
            );
        }
    }
    
    public get id(): string{
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

    public static fromJson(_json: any): Item {
        let json = JSON.parse(_json);
        return new Item(
            json.id,
            json.name,
            json.description,
            [],
            json.photosUrl
        );
    }
    public static fromObject(obj: Item): Item {
        let featureLists = [];
        if (obj.featureLists){
            for (let i = 0; i < obj.featureLists.length; i++){
                let features = [];
                for (let j = 0; j < obj.featureLists[i].features.length; j++){
                    features.push(new Feature(
                        obj.featureLists[i].features[j].name,
                        obj.featureLists[i].features[j].value
                    ));
                }
                featureLists.push(new FeatureList(
                    obj.featureLists[i].name,
                    features
                ));
            }
        }
        return new Item(
            obj.id,
            obj.name,
            obj.description,
            featureLists,
            obj.photosUrl
        );
    }
    public static toJson(item: Item): string {
        return JSON.stringify(item);
    }

}
