import { Color } from "app/_model/color";

export class ItemCountData {

    private _color: Color;
    private _size: string;
    private _count: number;


    public get color(): Color {
        return this._color;
    }
    public get size(): string {
        return this._size;
    }
    public get count(): number {
        return this._count;
    }
    
    constructor(color: Color, size: string, count: number) {
        this._color = color;
        this._size = size;
        this._count = (this._count < 1) ? 1 : count;
    }

    public static fromObject(obj: any): ItemCountData {
        return new ItemCountData(
            new Color(obj.color),
            obj.size,
            obj.count
        );
    }
}
