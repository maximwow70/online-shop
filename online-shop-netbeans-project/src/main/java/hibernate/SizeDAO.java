/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernate;

import com.mycompany.online.shop.netbeans.entity.Item.Size;
import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.Session;

/**
 *
 * @author admin
 */
public class SizeDAO {
    
    private Session session;
    
    public SizeDAO(Session session) {
        this.session = session;
    }
    
    public List<Size> getAllSizes() {
        List<Size> sizes = null;
        try {
            sizes = session.createCriteria(Size.class).list();
        } catch(HibernateException e) {
            System.out.println("Error: getAllSizes");
            e.printStackTrace();
        }
        return sizes;
    }
    
    public void close() {
        if(session!=null) {
            session.close();
        }
    }
}
