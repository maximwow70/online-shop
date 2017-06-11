import { Item } from "app/_model/item";
import { Color } from "app/_model/color";

export class OnlineShop {

    private _itemList: { item: Item, cost: number }[] = [];

    constructor() {

    }

    public setItemList(itemList: Item[]): void {
        for (let i = 0; i < itemList.length; i++) {
            this._itemList.push({
                item: itemList[i],
                cost: 0
            });
        }
    }

    public addItem(item: Item): void {
        this._itemList.push({
            item: item,
            cost: 0
        });
    }

    public setItemCost(item: Item, cost: number): void {
        this._itemList.find(itemList => itemList.item.id === item.id).cost = cost;
    }

    public get itemList(): { item: Item, cost: number }[] {
        return this._itemList;
    }

}
