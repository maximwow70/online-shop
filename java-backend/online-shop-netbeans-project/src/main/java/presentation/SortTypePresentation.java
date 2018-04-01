/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package presentation;

import Enums.SortType;

/**
 *
 * @author admin
 */
public class SortTypePresentation {
    private int id;
    private String name;
    
    public SortTypePresentation (SortType sortType) {
        this.id = sortType.ordinal();
        this.name = sortType.getName();
    }
}
