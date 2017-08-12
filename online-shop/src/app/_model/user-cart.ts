import { ItemData } from "app/_model/item-data";

export class UserCart {

    private _itemDataList: ItemData[] = [];

    public get itemDataList(): ItemData[] {
        return this._itemDataList;
    }

    public get totalItemCount(): number {
        let totalCount = 0;
        this._itemDataList.map(i => {totalCount += i.cost * i.itemCountDataList.length});
        return totalCount;
    }

    constructor(itemDataList: ItemData[]) {
        this._itemDataList = itemDataList;
    }

    public static fromJSON(json: ItemData[]): UserCart {
        return new UserCart(
            json.map( i => ItemData.fromObject(i))
        );
    }

    public static toJSON(userCart: UserCart): string {
        return JSON.stringify(userCart);
    }
}
