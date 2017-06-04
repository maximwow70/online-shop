import { Item } from "app/_model/item";
import { Color } from "app/_model/color";

export class OnlineShop {

    private _itemList: {item: Item, cost: number}[] = [];
    
    constructor() {

    }

    public addItem(item: Item, cost: number): void{
        this._itemList.push({
            item: item,
            cost: cost
        });
    }

    public get itemList(): {item: Item, cost: number}[]{
        return this._itemList;
    }

}
