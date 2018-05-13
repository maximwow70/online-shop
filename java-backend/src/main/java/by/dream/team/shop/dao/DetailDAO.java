package by.dream.team.shop.dao;

import by.dream.team.shop.domain.Detail;

import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * @author Dmitry Kovalenko
 */
public interface DetailDAO extends DAO<Detail>{

    Map<Integer, List<Detail>> getDetailMapByItemIds(Collection<Integer> itemIds);
}
