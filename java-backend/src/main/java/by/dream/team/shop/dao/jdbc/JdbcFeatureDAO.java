package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.FeatureDAO;
import by.dream.team.shop.domain.Feature;
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
public class JdbcFeatureDAO implements FeatureDAO {

    @Autowired
    private JdbcOperationsHandler operationsHandler;

    private RowMapper<Feature> rowMapper = (resultSet, index) -> extract(resultSet);

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

    @Override
    public Map<Integer, List<Feature>> getFeatureMapByFeatureListIds(Collection<Integer> ids) {
        String query = "SELECT * FROM feature WHERE feature_list_id IN (:ids)";
        Map<String, Object> namedParameters = Collections.singletonMap("ids", ids);
        List<Feature> features =operationsHandler.query(query, namedParameters, rowMapper);
        Map<Integer, List<Feature>> featureMap = new HashMap<>(ids.size());
        for (Feature feature : features) {
            Integer featureListId = feature.getFeatureListId();
            if (!featureMap.containsKey(featureListId)) {
                featureMap.put(featureListId, new ArrayList<>());
            }
            featureMap.get(featureListId).add(feature);
        }
        return featureMap;
    }

    private Feature extract(ResultSet resultSet) throws SQLException {
        Feature feature = new Feature();
        feature.setId(resultSet.getInt("id"));
        feature.setFeatureListId(resultSet.getInt("feature_list_id"));
        feature.setKey(resultSet.getString("key"));
        feature.setValue(resultSet.getString("value"));
        return feature;
    }
}
