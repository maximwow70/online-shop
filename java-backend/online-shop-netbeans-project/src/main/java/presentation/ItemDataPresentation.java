/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package presentation;

import com.mycompany.online.shop.netbeans.entity.Item.FeatureList;
import com.mycompany.online.shop.netbeans.entity.Item.Item;
import com.mycompany.online.shop.netbeans.entity.Item.ItemData;
import com.mycompany.online.shop.netbeans.entity.Item.Photo;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 *
 * @author admin
 */
public class ItemDataPresentation {
    private Long id;
    private String article;
    private String name;
    private String description;
    private Set<String> photos = new LinkedHashSet<String>();
    private Set<FeatureListPresentation> featureLists = new LinkedHashSet<FeatureListPresentation>();
    private Set<DataPresentation> itemData = new LinkedHashSet<DataPresentation>();
    
    public ItemDataPresentation (Item item){
        this.id = item.getId();
        this.article = item.getArticle();
        this.name = item.getName();
        this.description = item.getDescription();
        for(Photo photo : item.getPhotos()) {
            this.photos.add(photo.getPhoto());
        }
        for(FeatureList list : item.getFeatureLists()) {
            this.featureLists.add(new FeatureListPresentation(list));
        }
        for(ItemData data : item.getItemData()) {
            this.itemData.add(new DataPresentation(data));
        }
    }
}
