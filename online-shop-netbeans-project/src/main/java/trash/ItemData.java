/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package trash;

import java.sql.Date;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 *
 * @author admin
 */
public class ItemData {

    private Item item;
    private Set<ItemCountData> itemCountDataList = new LinkedHashSet<>();
    private int cost;
    private boolean isNew;

    public ItemData() {
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Set<ItemCountData> getItemCountDataList() {
        return itemCountDataList;
    }

    public void addItemCountDataList(ItemCountData itemCountDataList) {
        this.itemCountDataList.add(itemCountDataList);
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public boolean isIsNew() {
        return isNew;
    }

    public void setIsNew(Date date) {
        this.isNew = true;
    }

}
