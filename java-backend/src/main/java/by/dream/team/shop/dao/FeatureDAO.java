package by.dream.team.shop.dao;

import by.dream.team.shop.domain.Feature;

import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * @author Dmitry Kovalenko
 */
public interface FeatureDAO extends DAO<Feature> {
    Map<Integer, List<Feature>> getFeatureMapByFeatureListIds(Collection<Integer> ids);
}
