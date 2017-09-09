package Tests;


import com.google.gson.Gson;
import entity.Item.Item;
import hibernate.HibernateUtil;
import org.hibernate.HibernateException;
import org.hibernate.Session;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author admin
 */
public class Test2 {
    public static void main(String... args) {
        Session s = HibernateUtil.getSessionFactory().openSession();
        try{
            Item i = (Item)s.get(Item.class, new Long(1));
            System.out.println(i.toString());
        } catch(HibernateException e) {
            e.printStackTrace();
        }
        s.close();
        
    }
    
}
