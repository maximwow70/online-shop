package by.dream.team.shop.dao;

import by.dream.team.shop.domain.Size;

import java.util.Collection;
import java.util.List;

/**
 * @author Dmitry Kovalenko
 */
public interface SizeDAO extends DAO<Size> {

    List<Size> getByIds(Collection<Integer> ids);
}
