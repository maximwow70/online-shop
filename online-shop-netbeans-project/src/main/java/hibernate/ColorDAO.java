/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hibernate;

import entity.Color;
import org.hibernate.HibernateException;
import org.hibernate.Session;

/**
 *
 * @author admin
 */
public class ColorDAO {
    
    private Session session;
    
    public ColorDAO(Session session) {
        this.session = session;
    }
    
    public Color getColor(Long id) {
        Color color;
        try {
            color = (Color)session.get(Color.class, id);
        } catch(HibernateException e) {
            color = null;
        }
        return color;
    }
    
    public boolean addColor(String color) {
        return false;
    }
}
