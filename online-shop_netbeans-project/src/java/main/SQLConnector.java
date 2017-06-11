/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import main.objects.Item;

/**
 *
 * @author admin
 */
public class SQLConnector {
    
    private static final String url = "jdbc:mysql://localhost:3306/online-shop"; 
    private static final String userName = "root";
    private static final String password = "root";
    private static Connection connection = null;
    private static Statement statement = null;
    
    private static void connect() {
        try {
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            connection = DriverManager.getConnection(url, userName, password);
            statement = connection.createStatement();
        } catch(ClassNotFoundException | InstantiationException | IllegalAccessException | SQLException e) {
            System.out.println("connect failed");
            e.printStackTrace();
        }
    }
    
    private static ResultSet initResultSet(String url) throws SQLException {
        connect();
        return statement.executeQuery(url);
    }
    
    private static Set<Item> initItems(String url){
        Set<Item> set = new LinkedHashSet<>();
        try {
        ResultSet result = initResultSet(url);
            while(result.next()) {
                set.add(new Item(result.getString("item_id"),result.getString("item_name"),result.getString("item_description"),result.getString("item_images")));
            }
        } catch (SQLException ex) {
            Logger.getLogger(SQLConnector.class.getName()).log(Level.SEVERE, null, ex);
        }
        return set;
    }
    
    private static Item initItem(String url) {
        Item item = null;
        try {
        ResultSet result = initResultSet(url);
        result.next();
        item = new Item(result.getString("item_id"),result.getString("item_name"),result.getString("item_description"),result.getString("item_images"));
        } catch (SQLException ex) {
            Logger.getLogger(SQLConnector.class.getName()).log(Level.SEVERE, null, ex);
        }
        return item;
    }
    
    public static Set<Item> getAllItems() {
        return initItems("SELECT * FROM Item");
    }
    
    public static Set<Item> getItems(String name, String color, String size, int minCost, int maxCost) {
        String URL = "";
//        Select * from Item where 
//        item_name like "%hat%" AND
//        item_id like (Select item_id from Item_color where item_color = "green") AND
//        item_id like (Select item_id from Item_size where item_size = "biggest!") AND
//        item_id like (Select item_id from Item_cost where item_cost > 10000 AND item_cost<0)
        return initItems(URL);
    }
    
    public static Item getItem(String id) {
        return initItem("SELECT * FROM Item WHERE item_id = \""+id+"\";");
    }
    public static int getItemCost(String id) {
        int cost = -1;
        try {
            ResultSet res = initResultSet("SELECT item_cost FROM Item_cost WHERE item_id = \""+id+"\"");
            res.next();
            cost = res.getInt("item_cost");
        } catch (SQLException ex) {
            Logger.getLogger(SQLConnector.class.getName()).log(Level.SEVERE, null, ex);
        }
        return cost;
    }
    public static LinkedHashSet<String> getItemColors(String id) {
        LinkedHashSet<String> set = new LinkedHashSet<>();
        try {
            ResultSet res = initResultSet("SELECT item_color FROM Item_color WHERE item_id = \""+id+"\"");
            while(res.next()) {
                set.add(res.getString("item_color"));
            }
        } catch (SQLException ex) {}
        return set;
    }
    public static LinkedHashSet<String> getItemSizes(String id) {
        LinkedHashSet<String> set = new LinkedHashSet<>();
        try {
            ResultSet res = initResultSet("SELECT item_size FROM Item_size WHERE item_id = \""+id+"\"");
            while(res.next()) {
                set.add(res.getString("item_size"));
            }
        } catch (SQLException ex) {}
        return set;
    }
    public static int getCount(String id, String colorId, String sizeId) {
        int count = 0;
        try {
            ResultSet res = initResultSet("SELECT COUNT(item_id) as count FROM Item_count WHERE id = \""+id+"\" AND item_color_article = \""+colorId+"\" AND item_size_article = \""+sizeId+"\"");
            res.next();
            count = res.getInt(count);
        } catch(SQLException ex) {}
        return count;
    }
}
