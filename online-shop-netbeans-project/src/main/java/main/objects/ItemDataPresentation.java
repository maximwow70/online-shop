/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main.objects;

import java.sql.Date;
import java.util.Set;

/**
 *
 * @author admin
 */
public class ItemDataPresentation {

    private Item item;
    private Set<String> colors;
    private Set<String> sizes;
    private int cost;
    private boolean isNew;

    public ItemDataPresentation() {
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Item getItem() {
        return item;
    }

    public void setColors(Set<String> colors) {
        this.colors = colors;
    }

    public void setSizes(Set<String> sizes) {
        this.sizes = sizes;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public void setIsNew(Date date) {
        this.isNew = true;
    }

}
