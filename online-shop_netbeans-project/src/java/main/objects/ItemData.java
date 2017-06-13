/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main.objects;

import java.util.Set;

/**
 *
 * @author admin
 */
public class ItemData {

    private Item item;
    private Set<String> colors;
    private Set<String> sizes;
    private int cost;
    private boolean isNew;
    private Set<FeatureList> featureLists;
    
    public ItemData() {}
 
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

    public void setIsNew(String date) {
        this.isNew = false;
    }

    public Set<FeatureList> getFeatureLists() {
        return featureLists;
    }

    public void setFeatureLists(Set<FeatureList> features) {
        this.featureLists = features;
    }
    
}
