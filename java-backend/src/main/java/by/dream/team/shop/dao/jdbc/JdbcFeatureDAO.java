package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.FeatureDAO;
import by.dream.team.shop.domain.Feature;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Dmitry Kovalenko
 */
@Repository
public class JdbcFeatureDAO implements FeatureDAO {
    @Override
    public Feature get(final Integer id) {
        return null;
    }

    @Override
    public boolean add(final Feature object) {
        return false;
    }

    @Override
    public boolean remove(final Integer id) {
        return false;
    }

    @Override
    public boolean update(final Feature object) {
        return false;
    }

    @Override
    public List<Feature> getAll() {
        return null;
    }
}
