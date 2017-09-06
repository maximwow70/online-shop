/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernate;
import Else.Helper;
import entity.Item;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.hibernate.Query;
import org.hibernate.Session;

/**
 *
 * @author Я
 */
public class ItemDAO {
    
    private final Session session;
    
    public ItemDAO(Session session) {
        this.session = session;
    }
    
    public List<Item> getItemList() {
        List<Item> items = session.createCriteria(Item.class).list();
        return items;
    }
    
    public Item getItem(Long id) {
        Item item = (Item)session.get(Item.class, id);
        return item;
    }
    
    public List<Item> getItemList(String name, int min, int max, int[] color, int[] size) {
        String query = "FROM Item item"+" WHERE item.name LIKE '%%' AND EXISTS(\n";
        query+="SELECT data.id FROM ItemData data\n";
        if(color.length>0) {
            query+="inner join data.color color\n"; 
        }
        if(size.length>0) {
            query+=" inner join data.size size\n";
        }
        query+=" WHERE data.cost > "+min+" AND data.cost < "+max+" AND data.owner.id = item.id\n";
        if(color.length > 0) {
            query+=" AND data.color.id = color.id AND data.color.id IN"+Helper.convertArrayToString(color)+"\n";
        }
        if(size.length > 0) {
            query+=" AND data.size.id = size.id AND data.size.id IN"+Helper.convertArrayToString(size)+"\n";
        }
        query+=")";
        System.out.println(query);
        Query q = session.createQuery(query);
        List<Item> list = q.list();
        return list;
    }
    
    
    public void close() {
        if(session!=null) {
            session.close();
        }
    }
}
