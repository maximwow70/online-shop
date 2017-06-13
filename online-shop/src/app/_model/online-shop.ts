import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemData } from "app/_model/item-data";

export class OnlineShop {

    private _itemDataList: ItemData[];

    constructor() {
        this._itemDataList = [];
    }
    
    public addItemData(itemData: ItemData): void {
        this._itemDataList.push(itemData);
    }
    
    public setItemList(itemDataList: ItemData[]): void {
        this._itemDataList = itemDataList;
    }

    public get itemList(): ItemData[] {
        return this._itemDataList;
    }

}
