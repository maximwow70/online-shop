/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernate;
import Enums.SortType;
import other.Helper;
import com.mycompany.online.shop.netbeans.entity.Item.Item;
import java.util.List;
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
    
    public List<Item> getItemList(String name, int min, int max, int[] color, int[] size, int currentPage, int range, SortType sortType, int direction) {
        boolean colorValid = color!=null&&color.length>0;
        boolean sizeValid = size!=null&&size.length>0;
        String query = "FROM Item item"+" WHERE item.name LIKE '%"+name+"%' AND EXISTS(\n";
        query+="SELECT data.id FROM ItemData data\n";
        if(colorValid) {
            query+="inner join data.color color\n"; 
        }
        if(sizeValid) {
            query+=" inner join data.size size\n";
        }
        query+=" WHERE data.cost > "+min+" AND data.cost < "+max+" AND data.owner.id = item.id\n";
        if(colorValid) {
            query+=" AND data.color.id = color.id AND data.color.id IN"+Helper.convertArrayToString(color)+"\n";
        }
        if(sizeValid) {
            query+=" AND data.size.id = size.id AND data.size.id IN"+Helper.convertArrayToString(size)+"\n";
        }
        query+=")\n";
        if(sortType!=SortType.DEFAULT) {
            query+=" ORDER BY\n";
            switch(sortType) {
                case COST:query+="";break;
            }
        }
        //System.out.println(query);
        Query q = session.createQuery(query).setFirstResult(range*(currentPage-1)).setMaxResults(range);
        List<Item> list = q.list();
        return list;
    }
    
    public Long getItemsCount(String name, int min, int max, int[] color, int[] size) {
        boolean colorValid = color!=null&&color.length>0;
        boolean sizeValid = size!=null&&size.length>0;
        String query = "SELECT COUNT(item.id) FROM Item item"+" WHERE item.name LIKE '%"+name+"%' AND EXISTS(\n";
        query+="SELECT data.id FROM ItemData data\n";
        if(colorValid) {
            query+="inner join data.color color\n"; 
        }
        if(sizeValid) {
            query+=" inner join data.size size\n";
        }
        query+=" WHERE data.cost > "+min+" AND data.cost < "+max+" AND data.owner.id = item.id\n";
        if(colorValid) {
            query+=" AND data.color.id = color.id AND data.color.id IN"+Helper.convertArrayToString(color)+"\n";
        }
        if(sizeValid) {
            query+=" AND data.size.id = size.id AND data.size.id IN"+Helper.convertArrayToString(size)+"\n";
        }
        query+=")";
        Query q = session.createQuery(query);
        Long count = (Long)q.uniqueResult();
        return count;
    }
    
    public void close() {
        if(session.isOpen()) {
            session.close();
        }
    }
}
