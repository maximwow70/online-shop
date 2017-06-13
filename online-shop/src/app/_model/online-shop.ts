import { Item } from "app/_model/item";
import { Color } from "app/_model/color";

export class OnlineShop {

    private _itemList: { item: Item, colors: Color[], sizes: string[], cost: number, isNew: boolean }[] = [];

    constructor() {

    }

    
    public setItemList(
        itemList: { item: Item, colors: Color[], sizes: string[], cost: number, isNew: boolean }[]
    ): void {
        this._itemList = itemList;
    }

	public addItem(item: Item): void {
        this._itemList.push({
            item: item,
            colors: [],
            sizes: [],
            cost: null,
            isNew: false
        });
    }

    public get itemList(): { item: Item, colors: Color[], cost: number }[] {
        return this._itemList;
    }

    public static itemListFromArray(itemListArray: { item: any, colors: string[], sizes: string[], cost: number, isNew: boolean }[] )
    : { item: Item, colors: Color[], sizes: string[], cost: number, isNew: boolean }[] {
        let itemList = [];
        for (let i = 0; i < itemListArray.length; i++){
            let colors = [];
            for (let j = 0; j < itemListArray[i].colors.length; j++){
                colors.push(
                    new Color(itemListArray[i].colors[j])
                );
            }
            itemList.push({
                item: Item.fromObject(itemListArray[i].item),
                colors: colors,
                sizes: itemListArray[i].sizes,
                cost: itemListArray[i].cost,
                isNew: itemListArray[i].isNew
            });
        }
        return itemList;
    }

}
