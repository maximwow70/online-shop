/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Tests;

import Enums.SortType;

/**
 *
 * @author admin
 */
public class SimpleTest {
    public static void main(String... args) {
        
        for(SortType sortType : SortType.values()) {
            System.out.println(sortType.ordinal()+"-->"+sortType.getName());
        }
    }
}
