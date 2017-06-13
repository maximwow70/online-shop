/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main.objects;

import com.google.gson.Gson;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 *
 * @author admin
 */
public class Item {
    private String id;
    private String name;
    private String description;
    private Set<String> photosUrl;

    public Item(String id, String name, String description, String photosUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        Gson gson = new Gson();
        this.photosUrl = gson.fromJson(photosUrl, LinkedHashSet.class);
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPhotosUrl(String photosUrl) {
        Gson gson = new Gson();
        this.photosUrl = gson.fromJson(photosUrl, LinkedHashSet.class);
    }
    
}
