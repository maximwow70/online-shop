/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main.objects;

import com.google.gson.Gson;
import java.util.HashSet;
import java.util.LinkedHashSet;

/**
 *
 * @author admin
 */
public class Item {
    
    private String id;
    private String name;
    private String description;
    private HashSet photosUrl;
    
    public Item(String id, String name, String description, String photosUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        Gson gson = new Gson();
        this.photosUrl = gson.fromJson(photosUrl, LinkedHashSet.class);
    }
}
