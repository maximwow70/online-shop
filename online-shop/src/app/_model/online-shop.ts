import { Item } from "app/_model/item";
import { Color } from "app/_model/color";

export class OnlineShop {

    private _itemList: { item: Item, cost: number, colors: Color[] }[] = [];

    constructor() {

    }

    public setItemList(itemList: Item[]): void {
        for (let i = 0; i < itemList.length; i++) {
            this._itemList.push({
                item: itemList[i],
                cost: null,
                colors: []
            });
        }
    }
    public setItemCost(item: Item, cost: number): void {
        this._itemList.find(itemList => itemList.item.id === item.id).cost = cost;
    }
    public setItemColors(item: Item, colors: Color[]): void {
        this._itemList.find(itemList => itemList.item.id === item.id).colors = colors;
    }

    public addItem(item: Item): void {
        this._itemList.push({
            item: item,
            cost: null,
            colors: []
        });
    }

    public get itemList(): { item: Item, cost: number, colors: Color[] }[] {
        return this._itemList;
    }

}
