/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.online.shop.netbeans.entity.Item;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

/**
 *
 * @author admin
 */
@Entity
@Table(name = "color")
public class Color implements java.io.Serializable{
    private Long id;
    private String color;
    private Set<ItemData> items = new HashSet<ItemData>();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "color", unique = true, nullable = false)
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "color", cascade = CascadeType.ALL)
    public Set<ItemData> getItems() {
        return items;
    }

    public void setItems(Set<ItemData> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return '{' + "\"id\":" + id + ", \"color\":" + color + '}';
    }
    
}
