/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package presentation;

import com.mycompany.online.shop.netbeans.entity.Item.ItemData;

/**
 *
 * @author admin
 */
public class DataPresentation {
        private ColorPresentation color;
        private SizePresentation size;
        private int count;
        private double cost;

        public DataPresentation(ItemData data) {
            this.color = new ColorPresentation(data.getColor());
            this.size = new SizePresentation(data.getSize());
            this.count = data.getCount();
            this.cost = data.getCost();
        }
    }