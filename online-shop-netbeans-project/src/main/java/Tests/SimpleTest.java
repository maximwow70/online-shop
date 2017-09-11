/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Tests;

import Enums.SortType;
import com.google.gson.Gson;
import com.mycompany.online.shop.netbeans.entity.Item.Size;
import hibernate.HibernateUtil;
import hibernate.SizeDAO;
import java.util.ArrayList;
import java.util.List;
import presentation.SizePresentation;

/**
 *
 * @author admin
 */
public class SimpleTest {
    public static void main(String... args) {
        SizeDAO sizeDAO = new SizeDAO(HibernateUtil.getSessionFactory().openSession());
        List<Size> sizes = sizeDAO.getAllSizes();
        List<SizePresentation> list = new ArrayList<>();
        for(Size size : sizes) {
            list.add(new SizePresentation(size));
        }
        sizeDAO.close();
        Gson gson = new Gson();
        System.out.println(gson.toJson(list));
    }
}
