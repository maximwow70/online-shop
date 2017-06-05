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
public class Item {
    
    private String id;
    private String name;
    private String description;
    private String photosUrl;
    
    public Item(String id, String name, String description, String photosUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.photosUrl = photosUrl;
    }
}
