package Tests;


import com.mycompany.online.shop.netbeans.entity.Item.Color;
import com.mycompany.online.shop.netbeans.entity.Item.Feature;
import com.mycompany.online.shop.netbeans.entity.Item.FeatureList;
import com.mycompany.online.shop.netbeans.entity.Item.Item;
import com.mycompany.online.shop.netbeans.entity.Item.ItemData;
import com.mycompany.online.shop.netbeans.entity.Item.Photo;
import com.mycompany.online.shop.netbeans.entity.Item.Size;
import hibernate.CategoryDAO;
import hibernate.HibernateUtil;
import java.util.Date;
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
        for(int i = 4;i<7;i++) {
            Transaction t = s.beginTransaction();
            Item item = new Item();
            item.setArticle("ebqwda"+i);
            item.setDescription("danwfjnqw dwi jdawoidj awd");
            item.setName("name");
            item.setDate(new Date());
            item.setCategory(new CategoryDAO(s).getCategory((long)1));
            Feature feature = new Feature();
            feature.setKey("key");
            feature.setValue("value");
            FeatureList featureList = new FeatureList();
            featureList.setName("name");
            Color color = new Color();
            color.setColor("yellow"+i);
            Size size = new Size();
            size.setSize("big"+i);
            ItemData data = new ItemData();
            data.setCount(12);
            data.setCost(123);
            Photo photo = new Photo();
            photo.setPhoto("photo"+i);
            try{

                s.save(feature);
                s.save(featureList);
                s.save(item);
                s.save(color);
                s.save(size);
                s.save(photo);
                s.save(data);

                size.getItems().add(data);
                color.getItems().add(data);
                data.setSize(size);
                data.setColor(color);
                data.setOwner(item);
                item.getItemData().add(data);


                photo.setOwner(item);
                item.getPhotos().add(photo);

                featureList.getFeatures().add(feature);
                feature.setName(featureList);
                item.getFeatureLists().add(featureList);
                featureList.setOwner(item);

                s.saveOrUpdate(item);
                s.saveOrUpdate(feature);
                s.saveOrUpdate(featureList);
                s.saveOrUpdate(size);
                s.saveOrUpdate(color);
                s.saveOrUpdate(photo);
                s.saveOrUpdate(data);
                t.commit();

            } catch( HibernateException e) {
                t.rollback();
                e.printStackTrace();
            }
        }
        s.close();
    }
}
