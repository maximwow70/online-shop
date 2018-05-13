package by.dream.team.shop.dao;

import by.dream.team.shop.domain.Color;

import java.util.Collection;
import java.util.List;


/**
 * @author Dmitry Kovalenko
 */
public interface ColorDAO extends DAO<Color> {

    List<Color> getByIds(Collection<Integer> ids);
}
