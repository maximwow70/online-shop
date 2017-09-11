/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package presentation;

import com.mycompany.online.shop.netbeans.entity.Item.Feature;
import com.mycompany.online.shop.netbeans.entity.Item.FeatureList;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 *
 * @author admin
 */
public class FeatureListPresentation {
        private String name;
        private Set<FeaturePresentation> features = new LinkedHashSet<>();

        public FeatureListPresentation(FeatureList list) {
            this.name = list.getName();
            for(Feature feature : list.getFeatures()) {
                this.features.add(new FeaturePresentation(feature));
            }
        }
        
    }
