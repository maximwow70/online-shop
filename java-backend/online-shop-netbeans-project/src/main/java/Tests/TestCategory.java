/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Tests;

import com.mycompany.online.shop.netbeans.entity.Item.Category;
import hibernate.HibernateUtil;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author admin
 */
public class TestCategory {
    public static void main(String... args) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Category category = new Category();
        category.setName("cat1");
        Category category1 = new Category();
        Category category2 = new Category();
        category1.setName("cat11");
        category2.setName("cat12");
        Transaction t = session.beginTransaction();
        try {
            session.save(category);
            session.save(category1);
            session.save(category2);

            category.getChildren().add(category1);
            category.getChildren().add(category2);
            category1.setParent(category);
            category2.setParent(category);

            session.update(category);
            session.update(category1);
            session.update(category2);
            t.commit();
        } catch(HibernateException e) {
            t.rollback();
            e.printStackTrace();
        }
    }
}
