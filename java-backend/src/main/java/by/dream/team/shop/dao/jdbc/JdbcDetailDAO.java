package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.DetailDAO;
import by.dream.team.shop.domain.Color;
import by.dream.team.shop.domain.Detail;
import by.dream.team.shop.domain.Size;
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
public class JdbcDetailDAO implements DetailDAO {

    @Autowired
    private JdbcOperationsHandler operationsHandler;

    private RowMapper<Detail> rowMapper = (resultSet, index) -> extract(resultSet);

    @Override
    public Detail get(Integer id) {
        return null;
    }

    @Override
    public boolean add(Detail object) {
        return false;
    }

    @Override
    public boolean remove(Integer id) {
        return false;
    }

    @Override
    public boolean update(Detail object) {
        return false;
    }

    @Override
    public List<Detail> getAll() {
        return null;
    }

    @Override
    public Map<Integer, List<Detail>> getDetailMapByItemIds(Collection<Integer> itemIds) {
        String query = "SELECT detail.*, color.title as color, size.title as size FROM detail " +
                "LEFT JOIN color ON color.id = detail.color_id " +
                "LEFT JOIN size ON size.id = detail.size_id " +
                "WHERE detail.item_id IN (:itemIds)";
        Map<String, Object> namedParameters = Collections.singletonMap("itemIds", itemIds);
        List<Detail> details = operationsHandler.query(query, namedParameters, rowMapper);

        Map<Integer, List<Detail>> detailMap = new HashMap<>(itemIds.size());
        for (Detail detail : details) {
            Integer itemId = detail.getItemId();
            if (!detailMap.containsKey(itemId)) {
                detailMap.put(itemId, new ArrayList<>());
            }
            detailMap.get(itemId).add(detail);
        }
        return detailMap;
    }

    private Detail extract(ResultSet resultSet) throws SQLException {
        Color color = new Color();
        color.setId(resultSet.getInt("color_id"));
        color.setTitle(resultSet.getString("color"));

        Size size = new Size();
        size.setId(resultSet.getInt("size_id"));
        size.setTitle(resultSet.getString("size"));

        Detail detail = new Detail();
        detail.setSize(size);
        detail.setColor(color);
        detail.setId(resultSet.getInt("id"));
        detail.setItemId(resultSet.getInt("item_id"));
        detail.setCount(resultSet.getInt("count"));
        detail.setCost(resultSet.getDouble("cost"));
        return detail;
    }
}
