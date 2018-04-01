import { Item } from "app/_model/item";
import { Color } from "app/_model/color";
import { ItemData } from "app/_model/item-data";
import { ItemDataPresentation } from "app/_model/item-data-presentation";

export class OnlineShop {

    private _itemDataList: ItemDataPresentation[];

    public get itemList(): ItemDataPresentation[] {
        return this._itemDataList;
    }

    constructor() {
        this._itemDataList = [];
    }
    
    public addItemData(itemData: ItemDataPresentation): void {
        this._itemDataList.push(itemData);
    }
    
    public setItemList(itemDataList: ItemDataPresentation[]): void {
        this._itemDataList = itemDataList;
    }

}
