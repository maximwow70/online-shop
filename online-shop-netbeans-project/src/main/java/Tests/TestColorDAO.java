/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Tests;

import hibernate.ColorDAO;
import hibernate.HibernateUtil;

/**
 *
 * @author admin
 */
public class TestColorDAO {
    public static void main(String... args) {
        ColorDAO colorDAO = new ColorDAO(HibernateUtil.getSessionFactory().openSession());
        System.out.println(colorDAO.getAllColors().toString());
    }
}
