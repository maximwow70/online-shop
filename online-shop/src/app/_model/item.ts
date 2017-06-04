export class Item {
    
    private _id: string;

    private _name: string;
    private _description: string;

    private _photoUrl: string;
    
    constructor(id: string, name: string, description: string, photoUrl: string) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._photoUrl = photoUrl;
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
    public get photoUrl(): string {
        return this._photoUrl;
    }
}
