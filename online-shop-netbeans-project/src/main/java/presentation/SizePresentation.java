/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package presentation;

import com.mycompany.online.shop.netbeans.entity.Item.Size;

/**
 *
 * @author admin
 */
public class SizePresentation {
        private Long id;
        private String name;

        public SizePresentation(Size size) {
            this.id = size.getId();
            this.name = size.getSize();
        }
        
    }
