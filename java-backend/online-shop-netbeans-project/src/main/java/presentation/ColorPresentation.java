/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package presentation;

import com.mycompany.online.shop.netbeans.entity.Item.Color;

/**
 *
 * @author admin
 */
public class ColorPresentation {
        private Long id;
        private String name;

        public ColorPresentation(Color color) {
            this.id = color.getId();
            this.name = color.getColor();
        }
        
    }
