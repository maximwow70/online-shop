/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package other;

import entity.Item.Item;
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
}
