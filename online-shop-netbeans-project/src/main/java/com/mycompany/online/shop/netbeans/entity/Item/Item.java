/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.online.shop.netbeans.entity.Item;

import java.util.Date;
import java.util.HashSet;
import java.util.LinkedHashSet;
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

    @Temporal(TemporalType.DATE)
    @Column(name = "date", unique = false, nullable = false)
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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

}
