/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity.Item;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

/**
 *
 * @author admin
 */
@Entity
@Table(name = "feature_list")
public class FeatureList implements java.io.Serializable{
    private Long id;
    private String name;
    private Set<Feature> features = new HashSet<Feature>();
    private Item owner;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "name", unique = false, nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "name", cascade = CascadeType.ALL)
    public Set<Feature> getFeatures() {
        return features;
    }

    public void setFeatures(Set<Feature> features) {
        this.features = features;
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
        return "{" + "name=" + name + ", features=" + features + '}';
    }
    
}
