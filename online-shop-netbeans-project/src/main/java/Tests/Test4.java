/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Tests;

import other.Helper;
import entity.Item.Item;
import hibernate.HibernateUtil;
import hibernate.ItemDAO;
import java.util.Date;
import java.util.List;

/**
 *
 * @author admin
 */
public class Test4 {
    public static void main(String... args) {
        int[] color = null;
        int[] size = {};
        String name = "";
        int max = 1000;
        int min = 0;
        int currentPage1 = 1;
        int currentPage2 = 2;
        int range = 1;
        ItemDAO i = new ItemDAO(HibernateUtil.getSessionFactory().openSession());
        Date date = new Date();
//        for(int k = 0; k < 1000; k ++) {
//            List<Item> items = i.getItemList(name, min, max, color, size, currentPage2, range);
//            //items = Helper.getItem(items, currentPage1, range);
//            int countOfPages = items.size()/range;
//            items = Helper.getItems(items, currentPage1, range);
//            System.out.println(countOfPages);
//        }
        for(int k = 0; k < 1; k ++) {
            List<Item> items = i.getItemList(name, min, max, color, size, currentPage1, range);
            Long countOfPages = i.getItemsCount(name, min, max, color, size);
            System.out.println(items);
            System.out.println((int)(countOfPages/range));
        }
        Date date1 = new Date();
        System.out.println(date1.getTime()-date.getTime());
        i.close();
    }
}
