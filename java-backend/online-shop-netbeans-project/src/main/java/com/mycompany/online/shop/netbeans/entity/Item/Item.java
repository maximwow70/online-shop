/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.online.shop.netbeans.entity.Item;

import Enums.SortType;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.*;

/**
 *
 * @author admin
 */
@Entity
@Table(name = "item")
public class Item implements java.io.Serializable{
    
    private Long id;
    private String article;
    private String name;
    private String description;
    private Date date;
    private Category category;
    private Set<Photo> photos = new LinkedHashSet<Photo>();
    private Set<FeatureList> featureLists = new LinkedHashSet<FeatureList>();
    private Set<ItemData> itemData = new LinkedHashSet<ItemData>();
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "article", unique = true, nullable = false)
    public String getArticle() {
        return article;
    }

    public void setArticle(String article) {
        this.article = article;
    }

    @Column(name = "name", unique = false, nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "description", unique = false, nullable = true)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date", unique = false, nullable = false)
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    
    @ManyToOne(fetch = FetchType.LAZY)
    @PrimaryKeyJoinColumn
    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "owner", cascade = CascadeType.ALL)
    public Set<Photo> getPhotos() {
        return photos;
    }

    public void setPhotos(Set<Photo> photos) {
        this.photos = photos;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "owner", cascade = CascadeType.ALL)
    public Set<FeatureList> getFeatureLists() {
        return featureLists;
    }

    public void setFeatureLists(Set<FeatureList> featureLists) {
        this.featureLists = featureLists;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "owner", cascade = CascadeType.ALL)
    public Set<ItemData> getItemData() {
        return itemData;
    }

    public void setItemData(Set<ItemData> itemCountData) {
        this.itemData = itemCountData;
    }

    @Override
    public String toString() {
        return "{" + "\"id\":" + id + ", \"article\":\"" + article + "\", \"name\":\"" + name + "\", \"description\":\"" + description + "\", \"photos\":" + photos + ", \"featureLists\":" + featureLists + ", \"itemData\":" + itemData + '}';
    }
    
    public double maxCost() {
        double maxCost = 0;
        for(ItemData data : this.getItemData()) {
            double cost = data.getCost();
            if(cost>maxCost) {
                maxCost = cost;
            }
        }
        return maxCost;
    }
    
    public double minCost() {
        double minCost = 100000000;
        for(ItemData data : this.getItemData()) {
            double cost = data.getCost();
            if(cost<minCost) {
                minCost = cost;
            }
        }
        return minCost;
    }
    
    public static List<Item> sortItems(List<Item> oldList, final SortType type, final boolean isSortByIncrease) {
        Collections.sort(oldList, new Comparator<Item>() {
            @Override
            public int compare(Item item1, Item item2) {
                int compare;
                switch(type) {
                    case COST:
                        if(isSortByIncrease)
                            compare = (int)(item1.minCost()-item2.minCost());
                        else
                            compare = (int)(item2.maxCost()-item1.maxCost());
                        break;
                    case NAME:
                        if(isSortByIncrease)
                            compare = item1.getName().compareToIgnoreCase(item2.getName());
                        else
                            compare = item2.getName().compareToIgnoreCase(item1.getName());
                        break;
                    case DATE:
                        if(isSortByIncrease)
                            compare = item2.getDate().compareTo(item1.getDate());
                        else
                            compare = item1.getDate().compareTo(item2.getDate());
                        break;
                    default:
                        compare = 1;
                        break;
                }
                return compare;
            }
        });
        return oldList;
    }

}
