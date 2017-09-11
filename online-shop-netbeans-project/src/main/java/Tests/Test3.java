/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Tests;

import Enums.SortType;
import com.google.gson.Gson;
import com.mycompany.online.shop.netbeans.entity.Item.Item;
import hibernate.HibernateUtil;
import hibernate.ItemDAO;
import java.util.ArrayList;
import java.util.List;
import presentation.ItemPresentation;

/**
 *
 * @author admin
 */
public class Test3 {
    public static void main(String... args) {
        ItemDAO i = new ItemDAO(HibernateUtil.getSessionFactory().openSession());
        List<Item> list = i.getItemList();
            list = Item.sortItems(list, SortType.COST, false);
        List<ItemPresentation> list1 = new ArrayList<>();
        for(Item item : list) {
            System.out.println(item.minCost());
        }
        i.close();
    }
}
