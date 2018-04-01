/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Enums;

import com.mycompany.online.shop.netbeans.entity.Item.Item;

/**
 *
 * @author admin
 */
public enum SortType {
    
    DEFAULT,
    COST,
    NAME,
    DATE;
    
    public String getName() {
        String name = "";
        switch(this) {
            case DEFAULT: name = "DEFAULT"; break;
            case COST: name = "COST"; break;
            case NAME: name = "NAME"; break;
            case DATE: name = "DATE"; break;
        }
        return name;
    }
}
