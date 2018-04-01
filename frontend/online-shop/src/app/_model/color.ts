export class Color {

    private _id: number;
    private _name: string;

    public get id(): number {
        return this._id;
    }
    public get name(): string{
        return this._name;
    }

    constructor(id: number, name: string){
        this._id = id;
        this._name = name;
    } 

    public equals(other: Color): boolean {
        if (!other) {
            return false;
        }
        return this.id === other.id && this.name === other.name;
    }

    public static toJSON(color: Color): any {
        return {
            id: color.id,
            name: color.name
        }
    }
    public static fromJSON(json: any): Color {
        return new Color(json.id, json.name);
    }
}
