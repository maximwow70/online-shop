export class Item {
    
    private _id: string;

    private _name: string;
    private _description: string;

    private static basePhotoUrl: string = '/assets/items/';
    private _photosUrl: string[] = [];
    
    constructor(id: string, name: string, description: string, photosUrl: string[]) {
        this._id = id;
        this._name = name;
        this._description = description;

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

    public static fromJson(_json: any): Item {
        let json = JSON.parse(_json);
        return new Item(
            json.id,
            json.name,
            json.description,
            json.photosUrl
        );
    }
    public static fromObject(obj: any): Item {
        return new Item(
            obj.id,
            obj.name,
            obj.description,
            obj.photosUrl
        );
    }
    public static toJson(item: Item): string {
        return JSON.stringify(item);
    }
}
