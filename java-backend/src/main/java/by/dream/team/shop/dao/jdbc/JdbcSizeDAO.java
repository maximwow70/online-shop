package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.SizeDAO;
import by.dream.team.shop.domain.Size;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Repository
public class JdbcSizeDAO implements SizeDAO {
    private RowMapper<Size> rowMapper = (resultSet, i) -> extract(resultSet);

    @Autowired
    private JdbcOperationsHandler operationsHandler;

    @Override
    public Size get(final Integer id) {
        return null;
    }

    @Override
    public boolean add(final Size object) {
        return false;
    }

    @Override
    public boolean remove(final Integer id) {
        return false;
    }

    @Override
    public boolean update(final Size object) {
        return false;
    }

    @Override
    public List<Size> getAll() {
        String query = "SELECT * FROM Size";
        return operationsHandler.query(query, rowMapper);
    }

    private Size extract(ResultSet resultSet) throws SQLException {
        Size size = new Size();
        size.setId(resultSet.getInt("id"));
        size.setTitle(resultSet.getString("title"));
        return size;
    }

    @Override
    public List<Size> getByIds(Collection<Integer> ids) {
        String query = "SELECT * FROM size WHERE id in :ids";
        Map<String, Object> namedParameters = Collections.singletonMap("ids", ids);
        return operationsHandler.query(query, namedParameters, rowMapper);
    }
}
