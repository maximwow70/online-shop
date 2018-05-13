package by.dream.team.shop.dao;

import by.dream.team.shop.domain.Item;

import java.util.Collection;
import java.util.List;

/**
 * @author Dmitry Kovalenko
 */
public interface ItemDAO extends DAO<Item> {

    List<Item> getByIds(Collection<Integer> ids);

    //List<Integer> getItemIdsBySearchParameters();
}
