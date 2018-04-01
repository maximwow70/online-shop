/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.online.shop.netbeans.entity.Item;

import javax.persistence.*;

/**
 *
 * @author admin
 */
@Entity
@Table(name = "photo")
public class Photo implements java.io.Serializable{
    
    private Long id;
    private String Photo;
    private Item owner;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id",unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "photo", unique = true, nullable = false)
    public String getPhoto() {
        return Photo;
    }

    public void setPhoto(String Photo) {
        this.Photo = Photo;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @PrimaryKeyJoinColumn
    public Item getOwner() {
        return owner;
    }

    public void setOwner(Item owner) {
        this.owner = owner;
    }

    @Override
    public String toString() {
        return Photo;
    }
    
}
