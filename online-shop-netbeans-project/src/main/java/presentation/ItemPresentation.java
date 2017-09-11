/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package presentation;

import com.mycompany.online.shop.netbeans.entity.Item.Item;
import com.mycompany.online.shop.netbeans.entity.Item.ItemData;
import com.mycompany.online.shop.netbeans.entity.Item.Photo;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 *
 * @author admin
 */
public class ItemPresentation {
    ItemInfo item;
    private Set<ColorPresentation> colors = new LinkedHashSet<>();
    private Set<SizePresentation> sizes = new LinkedHashSet<>();
    private double cost;
    private boolean isNew = false;
    
    public ItemPresentation (Item item){
        this.item = new ItemInfo(item);
        double max = 0;
        double min = 100000000;
        for(ItemData data : item.getItemData())  {
            colors.add(new ColorPresentation(data.getColor()));
            sizes.add(new SizePresentation(data.getSize()));
            double cost = data.getCost();
            if(cost >= max) {
                max = cost;
            }
            if(cost <= min) {
                min = cost;
            }
        }
        this.cost = max;
        Date date = new Date();
        Date itemDate = item.getDate();
        isNew = (date.getTime() - itemDate.getTime() < (3600000*24*2));
        
    }
    private class ItemInfo {
        private Long id;
        private String article;
        private String name;
        private String description;
        private Set<String> photosUrl = new LinkedHashSet<>();
        
        public ItemInfo(Item item) {
            this.id = item.getId();
            this.article = item.getArticle();
            this.name = item.getName();
            this.description = item.getDescription();
            for(Photo photo : item.getPhotos()) {
                this.photosUrl.add(photo.getPhoto());
            }
        }
    }
}
