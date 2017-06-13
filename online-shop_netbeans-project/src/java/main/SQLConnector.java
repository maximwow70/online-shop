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
        return statement.executeQuery(url);
    }
    
    public static Set<Item> getAllItems() {
        connect();
        Set<Item> set = new LinkedHashSet<>();
        try {
            ResultSet res = initResultSet("SELECT * FROM Item");
            while(res.next()) {
                Item item = new Item();
                item.setId(res.getString("item_id"));
                item.setName(res.getString("item_name"));
                item.setDescription(res.getString("item_description"));
                item.setPhotosUrl(res.getString("item_images"));
                item.setIsNew(res.getString("item_date"));
                set.add(item);
            }
            for(Item item : set) {
                Set<String> colors = new LinkedHashSet<>();
                res = initResultSet("SELECT item_color FROM Item_color WHERE item_id = \""+item.getId()+"\"");
                while(res.next()) {
                    colors.add(res.getString("item_color"));
                }
                item.setColors(colors);
                Set<String> sizes = new LinkedHashSet<>();
                res = initResultSet("SELECT item_size FROM Item_size WHERE item_id = \""+item.getId()+"\"");
                while(res.next()) {
                    sizes.add(res.getString("item_size"));
                }
                item.setSizes(sizes);
                res = initResultSet("SELECT item_cost FROM Item_cost WHERE item_id = \""+item.getId()+"\"");
                res.next();
                item.setCost(res.getInt("item_cost"));
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(SQLConnector.class.getName()).log(Level.SEVERE, null, ex);
        }
        return set;
    }
    
    public static Set<Item> getItems(String name, String[] color, String[] size, int minCost, int maxCost) {
        String URL = "SELECT * FROM Item ";
                URL+= "WHERE item_name like \"%"+name+"%\"";
        if(color.length!=0) {
            URL += "\n AND ( ";
            for(int i = 0; i < color.length; i++) {
                if(i != 0)
                    URL+= " OR \n";
                URL += " item_id LIKE (SELECT item_id from Item_color where item_color = \""+color[i]+"\")";
            }
            URL += " ) ";
        }
        if(size.length!=0) {
            URL += "\n AND ( ";
            for(int i = 0; i < size.length; i++) {
                if(i != 0)
                    URL+= " OR \n";
                URL += " item_id LIKE (SELECT item_id from Item_size where item_size = \""+size[i]+"\")";
            }
            URL += " ) ";
        }
        URL += "\n AND item_id like (SELECT item_id FROM Item_cost WHERE item_cost > "+minCost+" AND item_cost < "+maxCost+")";
        return null;//initItems(URL);
    }
    
    public static Item getItem(String id) {
        return null;//initItem("SELECT * FROM Item WHERE item_id = \""+id+"\";");
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
    public static void main(String[] args) {
        SQLConnector.getAllItems();
    }
}
