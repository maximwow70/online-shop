/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernate;
import entity.Item;
import java.util.List;
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
    
    public void close() {
        if(session!=null) {
            session.close();
        }
    }
}
