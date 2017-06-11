export class User {

    private _id: string;
    private _name: string;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }

    public get id(): string {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }

    public static fromObject(obj: {id: string, name: string}): User {
        return new User(
            obj.id,
            obj.name
        );
    }
}
