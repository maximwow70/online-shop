/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import javax.persistence.*;

/**
 *
 * @author admin
 */
@Entity
@Table(name = "feature")
public class Feature implements java.io.Serializable{
    
    private Long id;
    private String key;
    private String value;
    private FeatureList name;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "feature_key", unique = false, nullable = false)
    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    @Column(name = "feature_value", unique = false, nullable = true)
    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @PrimaryKeyJoinColumn
    public FeatureList getName() {
        return name;
    }

    public void setName(FeatureList name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "{" +"key=" + key + ", value=" + value + '}';
    }
    
}
