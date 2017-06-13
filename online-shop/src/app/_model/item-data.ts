import { Item } from "app/_model/item";
import { Color } from "app/_model/color";

export class ItemData {

    private _item: Item;

    private _colors: Color[];
    private _sizes: string[];
    private _cost: number;

    private _isNew: boolean;

    constructor(item: Item, colors: Color[], sizes: string[], cost: number, isNew: boolean) {
        this._item = item;
        this._colors = colors;
        this._sizes = sizes;
        this._cost = cost;
        this._isNew = isNew;
    }

    public get item(): Item {
        return this._item;
    }
    public get colors(): Color[] {
        return this._colors;
    }
    public get sizes(): string[] {
        return this._sizes;
    }
    public get cost(): number {
        return this._cost
    }
    public get isNew(): boolean {
        return this._isNew;
    }

    public static fromObject(itemData: any): ItemData {
        let item = Item.fromObject(itemData.item);
        let colors = [];
        for (let  i = 0; i < itemData.colors.length; i++){
            colors.push(
                new Color(itemData.colors[i])
            );
        }
        return new ItemData(
            item,
            colors,
            itemData.sizes,
            itemData.cost,
            itemData.isNew
        );
    } 
}
