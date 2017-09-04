import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemData } from "app/_model/item-data";
import { Size } from "app/_model/size";

export class ItemDataPresentation {

    private _item: Item;

    private _colors: Color[];
    private _sizes: Size[];
    private _cost: number;

    private _isNew: boolean;

    public get item(): Item {
        return this._item;
    }
    public get colors(): Color[] {
        return this._colors;
    }
    public get sizes(): Size[] {
        return this._sizes;
    }
    public get cost(): number {
        return this._cost
    }
    public get isNew(): boolean {
        return this._isNew;
    }

    constructor(item: Item, colors: Color[], sizes: Size[], cost: number, isNew: boolean) {
        this._item = item;
        this._colors = colors;
        this._sizes = sizes;
        this._cost = cost;
        this._isNew = isNew;
    }


    public static fromJSON(itemData: any): ItemDataPresentation {
        return new ItemDataPresentation(
            Item.fromJSON(itemData.item),
            itemData.colors.map(color => Color.fromJSON(color)),
            itemData.sizes.map(size => Size.fromJSON(size)),
            itemData.cost,
            itemData.isNew
        );
    } 
    
}
