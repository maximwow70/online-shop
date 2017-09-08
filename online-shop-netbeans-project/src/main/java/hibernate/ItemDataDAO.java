/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernate;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;

/**
 *
 * @author admin
 */
public class ItemDataDAO {
    
    private Session session;
    
    public ItemDataDAO(Session session) {
        this.session = session;
    }
    
    public double getMaxCost() {
        double maxCost = 10000;
        try {
            Query query = session.getNamedQuery("getMaxCost");
            maxCost = (double)query.uniqueResult();
        } catch(HibernateException e) {
            System.out.println("Error:ItemDataDAP.getMaxCost");
        }
        return maxCost;
    }
    
    public void close() {
        if(session.isOpen()) {
            session.close();
        }
    }
}
