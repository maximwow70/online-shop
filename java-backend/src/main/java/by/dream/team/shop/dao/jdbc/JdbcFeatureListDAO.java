package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.FeatureDAO;
import by.dream.team.shop.dao.FeatureListDAO;
import by.dream.team.shop.domain.Feature;
import by.dream.team.shop.domain.FeatureList;
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
import java.util.stream.Collectors;

/**
 * @author Dmitry Kovalenko
 */
@Repository
public class JdbcFeatureListDAO implements FeatureListDAO {

    @Autowired
    private JdbcOperationsHandler operationsHandler;

    @Autowired
    private FeatureDAO featureDAO;

    private RowMapper<FeatureList> rowMapper = (resultSet, i) -> extract(resultSet);

    @Override
    public FeatureList get(Integer id) {
        return null;
    }

    @Override
    public boolean add(FeatureList object) {
        return false;
    }

    @Override
    public boolean remove(Integer id) {
        return false;
    }

    @Override
    public boolean update(FeatureList object) {
        return false;
    }

    @Override
    public List<FeatureList> getAll() {
        return null;
    }

    @Override
    public Map<Integer, List<FeatureList>> getFeatureListsByItemIds(Collection<Integer> itemIds) {
        String query = "SELECT * FROM feature_list WHERE item_id IN (:ids)";
        Map<String, Object> namedParameters = Collections.singletonMap("ids", itemIds);
        List<FeatureList> featureLists = operationsHandler.query(query, namedParameters, rowMapper);

        List<Integer> featureListIds = featureLists.stream()
                .map(FeatureList::getId)
                .collect(Collectors.toList());
        Map<Integer, List<Feature>> featureMap = featureDAO.getFeatureMapByFeatureListIds(featureListIds);
        featureLists.forEach(
                featureList -> {
                    List<Feature> features = featureMap.get(featureList.getId());
                    featureList.setFeatures(features);
                }
        );
        Map<Integer, List<FeatureList>> featureListMap = new HashMap<>(itemIds.size());
        for (FeatureList featureList : featureLists) {
            Integer itemId = featureList.getItemId();
            if (!featureListMap.containsKey(itemId)) {
                featureListMap.put(itemId, new ArrayList<>());
            }
            featureListMap.get(itemId).add(featureList);
        }
        return featureListMap;
    }

    private FeatureList extract(ResultSet resultSet) throws SQLException {
        FeatureList featureList = new FeatureList();
        featureList.setId(resultSet.getInt("id"));
        featureList.setItemId(resultSet.getInt("item_id"));
        featureList.setName(resultSet.getString("name"));
        return featureList;
    }
}
