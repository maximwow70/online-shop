/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main.objects;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 *
 * @author admin
 */
public class FeatureList {

    private String name;
    private Set<Feature> features;

    public FeatureList() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Feature> getFeatures() {
        return features;
    }

    public void setFeatures(String features) {
        Gson gson = new Gson();
        Type type = new TypeToken<Set<Feature>>() {
        }.getType();
        this.features = gson.fromJson(features, type);
    }

}
