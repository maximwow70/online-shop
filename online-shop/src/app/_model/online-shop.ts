import { Item } from "app/_model/item";
import { Color } from "app/_model/color";

export class OnlineShop {

    private _itemList: Item[] = [];
    
    constructor() {

    }

    public setItemList(itemList: Item[]): void {
        console.log(itemList);
        this._itemList = itemList;
    }

    public addItem(item: Item): void{
        this._itemList.push(item);
    }

    public get itemList(): Item[]{
        return this._itemList;
    }

}
