/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernate;

import com.mycompany.online.shop.netbeans.entity.Item.Category;
import org.hibernate.Session;

/**
 *
 * @author admin
 */
public class CategoryDAO {
    
    Session session;
    
    public CategoryDAO(Session session) {
        this.session = session;
    }
    
    public Category getCategory(Long id) {
        Category category = (Category)session.get(Category.class, id);
        return category;
    }
    
    public void close() {
        if(session!=null&&session.isOpen()) {
            session.close();
        }
    }
}
