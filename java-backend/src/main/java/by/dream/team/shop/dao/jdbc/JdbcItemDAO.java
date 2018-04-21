package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.ItemDAO;
import by.dream.team.shop.domain.Color;
import by.dream.team.shop.domain.Detail;
import by.dream.team.shop.domain.Item;
import by.dream.team.shop.exception.DataException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Dmitry Kovalenko
 */
@Repository
public class JdbcItemDAO implements ItemDAO {

    @Autowired
    private JdbcOperationsHandler operationsHandler;

    private RowMapper<Item> rowMapper = (resultSet, i) -> extract(resultSet);

    @Override
    public Item get(final Integer id) {
        String query = "SELECT " +
                "item.*, " +
                "detail.id AS detail_id, " +
                "detail.count, " +
                "color.id AS color_id, " +
                "color.title AS color_title " +
                "FROM item " +
                "LEFT JOIN detail ON item.id = detail.item_id " +
                "LEFT JOIN color ON color.id = detail.color_id " +
                "WHERE item.id = :id";
        Map<String, Object> namedParameters = new HashMap<>();
        namedParameters.put("id", id);
        List<Item> items = staff(operationsHandler.query(query, namedParameters, rowMapper));
        if (!items.isEmpty()) {
            return items.get(0);
        }
        throw new DataException("Empty Result");
    }

    @Override
    public boolean add(final Item object) {
        String query = "INSERT INTO item VALUES (id = :id, title = :title, description = :description, cost = :cost)";
        Map<String, Object> namedParameters = new HashMap<>();
        namedParameters.put("id", object.getId());
        namedParameters.put("title", object.getArticle());
        namedParameters.put("description", object.getDescription());
        namedParameters.put("cost", object.getCost());
        return operationsHandler.update(query, namedParameters) > 0;
    }

    @Override
    public boolean remove(final Integer id) {
        String query = "DELETE FROM item WHERE id = :id";
        Map<String, Object> namedParameters = new HashMap<>();
        namedParameters.put("id", id);
        return operationsHandler.update(query, namedParameters) > 0;
    }

    @Override
    public boolean update(final Item object) {
        String query = "UPDATE item SET title = :title, description = :description, cost = :cost WHERE id = :id";
        Map<String, Object> namedParameters = new HashMap<>();
        namedParameters.put("id", object.getId());
        namedParameters.put("title", object.getArticle());
        namedParameters.put("description", object.getDescription());
        namedParameters.put("cost", object.getCost());
        return operationsHandler.update(query, namedParameters) > 0;
    }

    @Override
    public List<Item> getAll() {
        String query = "SELECT " +
                "item.*, " +
                "detail.id AS detail_id, " +
                "detail.count, " +
                "color.id AS color_id, " +
                "color.title AS color_title " +
                "FROM item " +
                "LEFT JOIN detail ON item.id = detail.item_id " +
                "LEFT JOIN color ON color.id = detail.color_id ";
        return staff(operationsHandler.query(query, rowMapper));
    }

    private List<Item> staff(Collection<Item> items) {
        Map<Integer, Integer> indexMap = new HashMap<>();
        List<Item> cutItems = new ArrayList<>();
        for (Item item : items) {
            Integer itemIndex = indexMap.get(item.getId());
            if (itemIndex != null) {
                cutItems.get(itemIndex).getDetails().addAll(item.getDetails());
            } else {
                cutItems.add(item);
                indexMap.put(item.getId(), cutItems.indexOf(item));
            }
        }
        return cutItems;
    }

    private Item extract(final ResultSet resultSet) throws SQLException {
        Integer itemId = resultSet.getInt("id");
        Color color = new Color();
        color.setId(resultSet.getInt("color_id"));
        color.setTitle(resultSet.getString("color_title"));

        List<Detail> details;

        Integer detailId = resultSet.getInt("detail_id");
        if (detailId != 0) {
            details = new ArrayList<>();
            Detail detail = new Detail();
            detail.setId(resultSet.getInt("detail_id"));
            detail.setCount(resultSet.getInt("count"));
            detail.setColor(color);
            details.add(detail);
        } else {
            details = Collections.EMPTY_LIST;
        }

        Item item = new Item();
        item.setId(itemId);
        item.setCost(resultSet.getDouble("cost"));
        item.setArticle(resultSet.getString("title"));
        item.setDescription(resultSet.getString("description"));
        item.setDetails(details);
        return item;
    }
}
