export class SortType {

    private _id: number = null;
    private _name: string = null;

    public get id(): number {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    public equals(other: SortType): boolean {
        if (!other) {
            return false;
        }
        return this.id === other.id && this.name === other.name;
    }

    public static toJSON(sortType: SortType): any {
        return {
            id: sortType.id,
            name: sortType.name
        }
    }
    public static fromJSON(json: any): SortType {
        return new SortType(json.id, json.name);
    }


}
