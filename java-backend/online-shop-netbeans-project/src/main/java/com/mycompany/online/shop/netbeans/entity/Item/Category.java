/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.online.shop.netbeans.entity.Item;

import java.util.LinkedHashSet;
import java.util.Set;
import javax.persistence.*;

/**
 *
 * @author admin
 */
@Entity
@Table(name = "category")
public class Category implements java.io.Serializable {
    private Long id;
    private String name;
    private Category parent;
    private Set<Category> children = new LinkedHashSet<>();
    private Set<Item> items = new LinkedHashSet<>();
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "name", unique = true, nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @PrimaryKeyJoinColumn
    public Category getParent() {
        return parent;
    }
    
    public void setParent(Category parent) {
        this.parent = parent;
    }
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "parent", cascade = CascadeType.ALL)
    public Set<Category> getChildren() {
        return children;
    }

    public void setChildren(Set<Category> children) {
        this.children = children;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "category", cascade = CascadeType.ALL)
    public Set<Item> getItems() {
        return items;
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }
    
}
