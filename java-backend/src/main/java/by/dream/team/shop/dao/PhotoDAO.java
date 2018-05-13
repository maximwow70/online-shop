package by.dream.team.shop.dao;

import by.dream.team.shop.domain.Photo;

import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * @author Dmitry Kovalenko
 */
public interface PhotoDAO extends DAO<Photo> {

    Map<Integer, List<Photo>> getPhotoMapByItemIds(Collection<Integer> itemIds);

}
