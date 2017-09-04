package Tests;


import com.google.gson.Gson;
import entity.Color;
import entity.Item;
import hibernate.HibernateUtil;
import java.util.Set;
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
            Color color = (Color)s.get(Color.class, new Long(1));
            System.out.println(color.getColor());
            Set<Item> items = color.getItems();
            for(Item i : items) {
                System.out.println(i.getName());
//                Gson gson = new Gson();
//                String str = gson.toJson(i);
//                System.out.println(str);
            }
        } catch(HibernateException e) {
            
        }
        s.close();
        
    }
    
}
