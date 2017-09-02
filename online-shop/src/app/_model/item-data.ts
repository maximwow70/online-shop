import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemCountData } from "app/_model/item-count-data";

export class ItemData {

    private _item: Item;

    private _itemCountDataList: ItemCountData[];

    private _cost: number;
    private _isNew: boolean;


    public get item(): Item {
        return this._item;
    }

    public get itemCountDataList(): ItemCountData[] {
        return this._itemCountDataList;
    }

    public get cost(): number {
        return this._cost
    }
    public get isNew(): boolean {
        return this._isNew;
    }


    constructor(item: Item, itemCountDataList: ItemCountData[], cost: number, isNew: boolean) {
        this._item = item;
        this._itemCountDataList = itemCountDataList;
        this._cost = cost;
        this._isNew = isNew;
    }

    public getColors(): Color[] {
        let allColors: Color[] = this._itemCountDataList.map(icd => icd.color);
        let currentColors: Color[] = [];
        for (let i = 0; i < allColors.length; i++){
            if (!currentColors.some(c => c.name === allColors[i].name)) {
                currentColors.push(allColors[i]);
            }
        }
        return currentColors;
    }
    public getSizes(color: Color): string[] {
        return this._itemCountDataList
            .filter(data => data.color.name === color.name)
            .map(dl => dl.size);
    }
    public getCount(color: Color, size: string): number {
        let itemData = this._itemCountDataList.find(data =>
            data.color.name === color.name &&
            data.size === size
        );
        return itemData ? itemData.count : null;
    }


    public static fromJSON(itemData: any): ItemData {
        return new ItemData(
            Item.fromJSON(itemData.item),
            itemData.itemCountDataList.map(icd => ItemCountData.fromObject(icd)),
            itemData.cost,
            itemData.isNew
        );
    }
    public static toJSON(item): any {
        return item;
    }
}
