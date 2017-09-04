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
    private Set<ItemData> items = new HashSet<ItemData>();

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

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "size", cascade = CascadeType.ALL)
    public Set<ItemData> getItems() {
        return items;
    }

    public void setItems(Set<ItemData> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "{" + "id=" + id + ", size=" + size + '}';
    }
    
}
