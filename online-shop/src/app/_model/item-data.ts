import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemCountData } from "app/_model/item-count-data";

export class ItemData {

    private _item: Item;

    private _itemCountDataList: ItemCountData[];

    private _cost: number;
    private _isNew: boolean;

    constructor(item: Item, itemCountDataList: ItemCountData[], cost: number, isNew: boolean) {
        this._item = item;
        this._itemCountDataList = itemCountDataList;
        this._cost = cost;
        this._isNew = isNew;
    }

    public getColors(): Color[] {
        let colors: Color[] = [];
        for (let i = 0; i < this._itemCountDataList.length; i++) {
            let isColorWasAdded = colors.find(
                c => c.name === this._itemCountDataList[i].color.name
            );
            if (!isColorWasAdded){
                colors.push(this._itemCountDataList[i].color);
            }
        }

        return colors;
    }
    public getSizes(color: Color): string[] {
        let dataList = this._itemCountDataList.filter(data => data.color.name === color.name);

        let sizes = [];
        for (let i = 0; i < dataList.length; i++) {
            sizes.push(dataList[i].size)
        }

        return sizes;
    }
    public getCount(color: Color, size: string): number {
        let itemData = this._itemCountDataList.find(data =>
            data.color.name === color.name &&
            data.size === size
        );
        return itemData ? itemData.count : null;
    }

    public get item(): Item {
        return this._item;
    }
    public get cost(): number {
        return this._cost
    }
    public get isNew(): boolean {
        return this._isNew;
    }


    public static fromObject(itemData: any): ItemData {
        let item = Item.fromObject(itemData.item);
        let itemCountDataList = [];
        for (let i = 0; i < itemData.itemCountDataList.length; i++) {
            itemCountDataList.push(
                ItemCountData.fromObject(itemData.itemCountDataList[i])
            );
        }
        return new ItemData(
            item,
            itemCountDataList,
            itemData.cost,
            itemData.isNew
        );
    }
}
