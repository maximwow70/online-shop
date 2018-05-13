package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.ColorDAO;
import by.dream.team.shop.domain.Color;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

/**
 * @author Dmitry Kovalenko
 */
@Repository
public class JdbcColorDAO implements ColorDAO {

    private RowMapper<Color> rowMapper = (resultSet, i) -> extract(resultSet);

    @Autowired
    private JdbcOperationsHandler operationsHandler;

    @Override
    public Color get(final Integer id) {
        return null;
    }

    @Override
    public boolean add(final Color object) {
        return false;
    }

    @Override
    public boolean remove(final Integer id) {
        return false;
    }

    @Override
    public boolean update(final Color object) {
        return false;
    }

    @Override
    public List<Color> getAll() {
        String query = "SELECT * FROM color";
        return operationsHandler.query(query, rowMapper);
    }

    private Color extract(ResultSet resultSet) throws SQLException {
        Color color = new Color();
        color.setId(resultSet.getInt("id"));
        color.setTitle(resultSet.getString("title"));
        return color;
    }

    @Override
    public List<Color> getByIds(Collection<Integer> ids) {
        String query = "SELECT * FROM color WHERE id in :ids";
        Map<String, Object> namedParameters = Collections.singletonMap("ids", ids);
        return operationsHandler.query(query, namedParameters, rowMapper);
    }
}
