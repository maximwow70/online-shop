/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity.Item;

import javax.persistence.*;

/**
 *
 * @author admin
 */
@NamedQueries({
    @NamedQuery(name = "getMaxCost", query = "SELECT MAX(data.cost) FROM ItemData data")
})

@Entity
@Table(name = "data")
public class ItemData implements java.io.Serializable{
    
    private Long id;
    private Color color;
    private Size size;
    private int count;
    private double cost;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @PrimaryKeyJoinColumn
    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @PrimaryKeyJoinColumn
    public Size getSize() {
        return size;
    }

    public void setSize(Size size) {
        this.size = size;
    }

    @Column(name = "count", unique = false, nullable = false)
    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    @Column(name = "cost", nullable = false)
    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
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
        return "{" + "color=" + color + ", size=" + size + ", count=" + count + ", cost=" + cost + '}';
    }
    
}
