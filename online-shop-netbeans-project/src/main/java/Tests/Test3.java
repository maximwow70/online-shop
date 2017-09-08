/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Tests;

import hibernate.HibernateUtil;
import hibernate.ItemDAO;

/**
 *
 * @author admin
 */
public class Test3 {
    public static void main(String... args) {
        ItemDAO i = new ItemDAO(HibernateUtil.getSessionFactory().openSession());
        System.out.println(i.getItemList().toString());
        //System.out.println(i.getItem((long)1));
    }
}
