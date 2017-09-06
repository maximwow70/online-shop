/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Else;

import entity.Item;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author admin
 */
public class Helper {
    public static String convertArrayToString(int[] array) {
        String str = "(";
        for(int el : array) {
            str+=(el+", ");
        }
        //Удаление ненужной запятой
        str = str.substring(0, str.length()-2)+")";
        return str;
    }
    
    public static List<Item> getItem(List<Item> items, int page, int countOnPage) {
        List<Item> newItems = new ArrayList<>();
        for(int i = countOnPage*(page-1);i < countOnPage*page;i++) {
            newItems.add(items.get(i));
        }
        return newItems;
    }
}
