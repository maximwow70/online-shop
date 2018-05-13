package by.dream.team.shop.dao;

import by.dream.team.shop.domain.FeatureList;

import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * @author Dmitry Kovalenko
 */
public interface FeatureListDAO extends DAO<FeatureList> {

    Map<Integer, List<FeatureList>> getFeatureListsByItemIds(Collection<Integer> itemIds);

}
