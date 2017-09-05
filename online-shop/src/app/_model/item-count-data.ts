import { Color } from "app/_model/color";
import { Size } from "app/_model/size";

export class ItemCountData {

    private _color: Color;
    private _size: Size;
    private _count: number;

    public get color(): Color {
        return this._color;
    }
    public get size(): Size {
        return this._size;
    }
    public get count(): number {
        return this._count;
    }

    constructor(color: Color, size: Size, count: number) {
        this._color = color;
        this._size = size;
        this._count = (this._count < 1) ? 1 : count;
    }

    public equals(other: ItemCountData): boolean {
        if (!other) {
            return false;
        }
        return this.color.equals(other.color)
            && this.size.equals(other.size)
            && this.count === other.count;
    }

    public static toJSON(itemCountData: ItemCountData): any {
        return {
            color: itemCountData.color,
            size: itemCountData.size,
            count: itemCountData.count
        }
    }
    public static fromJSON(json: any): ItemCountData {
        return new ItemCountData(
            Color.fromJSON(json.color),
            Size.fromJSON(json.size),
            json.count
        );
    }
}
