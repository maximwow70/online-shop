/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package presentation;

import com.mycompany.online.shop.netbeans.entity.Item.Feature;

/**
 *
 * @author admin
 */
public class FeaturePresentation {
        private String key;
        private String value;

        public FeaturePresentation(Feature feature) {
            this.key = feature.getKey();
            this.value = feature.getValue();
        }
        
    }