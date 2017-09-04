
import entity.Color;
import entity.Feature;
import entity.FeatureList;
import entity.Item;
import entity.Size;
import hibernate.HibernateUtil;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author admin
 */
public class Test {
    public static void main(String[] args) {
        Session s = HibernateUtil.getSessionFactory().openSession();
        Transaction t = s.beginTransaction();
        Item item = new Item();
        item.setArticle("ebq");
        item.setCount(2);
        item.setPrice(123);
        item.setDescription("danwfjnqw dwi jdawoidj awd");
        item.setName("name");
        Size size = new Size();
        size.setSize("small");
        Color color = new Color();
        color.setColor("green");
        Feature feature = new Feature();
        feature.setKey("key");
        feature.setValue("value");
        FeatureList featureList = new FeatureList();
        featureList.setName("name");
        try{
            s.save(feature);
            featureList.getFeatures().add(feature);
            s.save(featureList);
            s.save(size);
            s.save(color);
            s.save(item);
            item.getSizes().add(size);
            item.getColors().add(color);
            item.getFeatureLists().add(featureList);
            s.save(item);
            t.commit();
        } catch( HibernateException e) {
            t.rollback();
            e.printStackTrace();
        }
        
    }
}
