import { ItemDataPresentation } from "app/_model/item-data-presentation";

export class ItemDataSearch {

    private _itemDataPresentationList: ItemDataPresentation[];
    private _totalPages: number;

    public get itemDataPresentationList(): ItemDataPresentation[] {
        return this._itemDataPresentationList;
    } 
    public get totalPages(): number {
        return this._totalPages;
    }

    constructor(itemDataPresentationList: ItemDataPresentation[], totalPages: number) {
        this._itemDataPresentationList = itemDataPresentationList;
        this._totalPages = totalPages;
    }

    public static toJSON(itemDataSearch: ItemDataSearch): any {
        return {
            items: itemDataSearch.itemDataPresentationList.map(idp => ItemDataPresentation.toJSON(idp)),
            countOfPages: itemDataSearch.totalPages
        }
    }
    public static fromJSON(json: any): ItemDataSearch {
        return new ItemDataSearch(
            json.items.map(i => ItemDataPresentation.fromJSON(i)),
            json.countOfPages
        );
    }
}
