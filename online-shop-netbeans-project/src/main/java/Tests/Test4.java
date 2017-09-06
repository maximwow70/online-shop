/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Tests;

import Else.Helper;
import hibernate.HibernateUtil;
import hibernate.ItemDAO;

/**
 *
 * @author admin
 */
public class Test4 {
    public static void main(String... args) {
        int[] color = {1,2};
        int[] size = {1,2,3};
        String name = "";
        int max = 1000;
        int min = 0;
        ItemDAO i = new ItemDAO(HibernateUtil.getSessionFactory().openSession());
        System.out.println(i.getItemList(name, min, max, color, size));
    }
    
}
