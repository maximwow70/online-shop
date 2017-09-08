/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Tests;

import hibernate.HibernateUtil;
import hibernate.ItemDataDAO;

/**
 *
 * @author admin
 */
public class TestItemDataDAO {
    public static void main(String... args) {
        ItemDataDAO i = new ItemDataDAO(HibernateUtil.getSessionFactory().openSession());
        System.out.println(i.getMaxCost());
    }
}
