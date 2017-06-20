/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main;

import com.google.gson.Gson;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import main.objects.FeatureList;
import main.objects.ItemDataPresentation;
import main.objects.Item;
import main.objects.ItemCountData;
import main.objects.ItemData;
import main.objects.User;

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
        } catch (ClassNotFoundException | InstantiationException | IllegalAccessException | SQLException e) {
            System.out.println("connect failed");
            e.printStackTrace();
        }
    }

    private static ResultSet initResultSet(String url) throws SQLException {
        return statement.executeQuery(url);
    }
    
    private static boolean execute(String url) throws SQLException {
        statement.execute(url);
        return false;
    }

    public static Set<ItemDataPresentation> getAllItems() {
        connect();
        Set<ItemDataPresentation> set = new LinkedHashSet<>();
        try {
            ResultSet res = initResultSet("SELECT * FROM Item");
            while (res.next()) {
                ItemDataPresentation item = new ItemDataPresentation();
                item.setItem(new Item(res.getString("item_id"), res.getString("item_name"), res.getString("item_description"), res.getString("item_images")));
                set.add(item);
            }
            for (ItemDataPresentation item : set) {
                res = initResultSet("SELECT item_date FROM Item_date WHERE item_id = \"" + item.getItem().getId() + "\"");
                if (res.next()) {
                    item.setIsNew(res.getDate("item_date"));
                }
                Set<String> colors = new LinkedHashSet<>();
                res = initResultSet("SELECT item_color FROM Item_color WHERE item_id = \"" + item.getItem().getId() + "\"");
                while (res.next()) {
                    colors.add(res.getString("item_color"));
                }
                item.setColors(colors);
                res = initResultSet("SELECT item_cost FROM Item_cost WHERE item_id = \"" + item.getItem().getId() + "\"");
                if (res.next()) {
                    item.setCost(res.getInt("item_cost"));
                }
            }

        } catch (SQLException ex) {
            Logger.getLogger(SQLConnector.class.getName()).log(Level.SEVERE, null, ex);
        }
        return set;
    }

    public static ItemData getItemDate(String itemId) {
        connect();
        ItemData item = new ItemData();
        try {
            ResultSet res = initResultSet("SELECT * FROM Item WHERE item_id = \"" + itemId + "\"");
            res.next();
            item.setItem(new Item(res.getString("item_id"), res.getString("item_name"), res.getString("item_description"), res.getString("item_images")));
            res = initResultSet("SELECT item_date FROM Item_date WHERE item_id = \"" + itemId + "\"");
            res.next();
            item.setIsNew(res.getDate("item_date"));
            Set<String> colors = new LinkedHashSet<>();
            res = initResultSet("SELECT item_color FROM Item_color WHERE item_id = \"" + item.getItem().getId() + "\"");
            while (res.next()) {
                colors.add(res.getString("item_color"));
            }
            Set<String> sizes = new LinkedHashSet<>();
            res = initResultSet("SELECT item_size FROM Item_size WHERE item_id = \"" + item.getItem().getId() + "\"");
            while (res.next()) {
                sizes.add(res.getString("item_size"));
            }
            for (String color : colors) {
                for (String size : sizes) {
                    res = initResultSet("SELECT item_count From Item_count WHERE item_id = \"" + item.getItem().getId() + "\""
                            + " AND item_color = \"" + color + "\" AND item_size = \"" + size + "\"");
                    if (res.next()) {
                        item.addItemCountDataList(new ItemCountData(color, size, res.getInt("item_count")));
                    } else {
                        item.addItemCountDataList(new ItemCountData(color, size, 0));
                    }
                }
            }
            res = initResultSet("SELECT item_cost FROM Item_cost WHERE item_id = \"" + item.getItem().getId() + "\"");
            if (res.next()) {
                item.setCost(res.getInt("item_cost"));
            }
            Set<FeatureList> featureLists = new LinkedHashSet<>();
            res = initResultSet("SELECT feature_name,features FROM feature_list WHERE item_id = \"" + item.getItem().getId() + "\"");
            while (res.next()) {
                FeatureList featureList = new FeatureList();
                featureList.setName(res.getString("feature_name"));
                featureList.setFeatures(res.getString("features"));
                featureLists.add(featureList);
            }
            item.getItem().setFeatureLists(featureLists);

        } catch (SQLException ex) {
            Logger.getLogger(SQLConnector.class.getName()).log(Level.SEVERE, null, ex);
        }
        return item;
    }

    public static Set<ItemDataPresentation> getItems(String name, String[] color, String[] size, int minCost, int maxCost) {
        connect();
        Set<ItemDataPresentation> set = new LinkedHashSet<>();
        String URL = "SELECT * FROM Item ";
        URL += "WHERE item_name like \"%" + name + "%\"";
        if (color.length != 0) {
            URL += "\n AND ( ";
            for (int i = 0; i < color.length; i++) {
                if (i != 0) {
                    URL += " OR \n";
                }
                URL += " item_id IN (SELECT item_id from Item_color where item_color = \"" + color[i] + "\")";
            }
            URL += " ) ";
        }
        if (size.length != 0) {
            URL += "\n AND ( ";
            for (int i = 0; i < size.length; i++) {
                if (i != 0) {
                    URL += " OR \n";
                }
                URL += " item_id IN (SELECT item_id from Item_size where item_size = \"" + size[i] + "\")";
            }
            URL += " ) ";
        }
        URL += "\n AND item_id IN (SELECT item_id FROM Item_cost WHERE item_cost > " + minCost + " AND item_cost < " + maxCost + ")";
        System.out.println(URL);
        try {
            ResultSet res  = initResultSet(URL);
            while (res.next()) {
                ItemDataPresentation item = new ItemDataPresentation();
                item.setItem(new Item(res.getString("item_id"), res.getString("item_name"), res.getString("item_description"), res.getString("item_images")));
                set.add(item);
            }
            for (ItemDataPresentation item : set) {
                res = initResultSet("SELECT item_date FROM Item_date WHERE item_id = \"" + item.getItem().getId() + "\"");
                if (res.next()) {
                    item.setIsNew(res.getDate("item_date"));
                }
                Set<String> colors = new LinkedHashSet<>();
                res = initResultSet("SELECT item_color FROM Item_color WHERE item_id = \"" + item.getItem().getId() + "\"");
                while (res.next()) {
                    colors.add(res.getString("item_color"));
                }
                item.setColors(colors);
                res = initResultSet("SELECT item_cost FROM Item_cost WHERE item_id = \"" + item.getItem().getId() + "\"");
                if (res.next()) {
                    item.setCost(res.getInt("item_cost"));
                }
            }
        } catch (SQLException ex) {
            Logger.getLogger(SQLConnector.class.getName()).log(Level.SEVERE, null, ex);
        }
        return set;
    }
    
    public static boolean createUser(User user) {
        connect();
        try {
        ResultSet res = initResultSet("SELECT * FROM User WHERE user_mail = \"" + user.getMail() + "\"");
        if(res.next()) {
            return false;
        }
        execute("INSERT INTO User(user_name,user_mail,user_password) VALUES (\""+user.getName()+"\", "
                + "\""+user.getMail()+"\", \""+user.getPassword()+"\")");
        } catch(SQLException ex) {
            Logger.getLogger(SQLConnector.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
        return true;
    }
    
    public static boolean checkUser(User user) {
        connect();
        try {
            ResultSet res = initResultSet("SELECT user_id FROM User WHERE"
                    + " user_mail = \""+user.getMail()+"\" AND user_password = \""+user.getPassword()+"\"");
            if(!res.next()) {
                return false;
            }
        } catch(SQLException ex) {
            Logger.getLogger(SQLConnector.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
        String[] c = {"green"};
        String[] s = {"XXL"};
        Set<ItemDataPresentation> set = SQLConnector.getItems("", c, s, 0, 100000);
        Gson g = new Gson();
        System.out.println(g.toJson(set));
    }
}
