/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.util.HashSet;
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
    private Set<Photo> photos = new HashSet<Photo>();
    private Set<Color> colors = new HashSet<Color>();
    private Set<Size> sizes = new HashSet<Size>();
    private Set<FeatureList> featureLists = new HashSet<FeatureList>();
    private int count;
    private int price;
    
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

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "owner", cascade = CascadeType.ALL)
    public Set<Photo> getPhotos() {
        return photos;
    }

    public void setPhotos(Set<Photo> photos) {
        this.photos = photos;
    }

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable( name = "colors",
            joinColumns = {
                @JoinColumn(name = "item")
            },
            inverseJoinColumns = {
                @JoinColumn(name = "color")
            }
    )
    public Set<Color> getColors() {
        return colors;
    }

    public void setColors(Set<Color> colors) {
        this.colors = colors;
    }
    
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable( name = "sizes",
            joinColumns = {
                @JoinColumn(name = "item")
            },
            inverseJoinColumns = {
                @JoinColumn(name = "size")
            }
    )
    public Set<Size> getSizes() {
        return sizes;
    }

    public void setSizes(Set<Size> sizes) {
        this.sizes = sizes;
    }
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "owner", cascade = CascadeType.ALL)
    public Set<FeatureList> getFeatureLists() {
        return featureLists;
    }

    public void setFeatureLists(Set<FeatureList> featureLists) {
        this.featureLists = featureLists;
    }

    @Column(name = "count", unique = false, nullable = false)
    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    @Column(name = "price", nullable = false)
    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
    
    
}
