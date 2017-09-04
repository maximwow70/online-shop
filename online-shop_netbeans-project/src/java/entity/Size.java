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
@Table(name = "size")
public class Size implements java.io.Serializable{
    private long id;
    private String size;
    private Set<Item> items = new HashSet<Item>();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
    
    @Column(name = "size", unique = true, nullable = false)
    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable( name = "sizes",
            joinColumns = {
                @JoinColumn(name = "size")
            },
            inverseJoinColumns = {
                @JoinColumn(name = "item")
            }
    )
    public Set<Item> getItems() {
        return items;
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }
    
    
}
