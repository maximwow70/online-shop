package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.PhotoDAO;
import by.dream.team.shop.domain.Photo;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Dmitry Kovalenko
 */
@Repository
public class JdbcPhotoDAO implements PhotoDAO {
    @Override
    public Photo get(final Integer id) {
        return null;
    }

    @Override
    public boolean add(final Photo object) {
        return false;
    }

    @Override
    public boolean remove(final Integer id) {
        return false;
    }

    @Override
    public boolean update(final Photo object) {
        return false;
    }

    @Override
    public List<Photo> getAll() {
        return null;
    }
}
