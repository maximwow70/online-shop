package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.PhotoDAO;
import by.dream.team.shop.domain.Photo;
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
public class JdbcPhotoDAO implements PhotoDAO {

    @Autowired
    private JdbcOperationsHandler operationsHandler;

    private RowMapper<PhotoContainer> rowMapper = (resultSet, index) -> extract(resultSet);

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

    @Override
    public Map<Integer, List<Photo>> getPhotoMapByItemIds(Collection<Integer> itemIds) {
        String query = "SELECT item_photo.*, photo.photo as photo FROM item_photo " +
                "LEFT JOIN photo ON item_photo.photo_id = photo.id " +
                "WHERE item_photo.item_id IN (:itemIds)";
        Map<String, Object> namedParameters = Collections.singletonMap("itemIds", itemIds);
        List<PhotoContainer> photoContainers = operationsHandler.query(query, namedParameters, rowMapper);
        Map<Integer, List<Photo>> photoMap = new HashMap<>(itemIds.size());
        for (PhotoContainer photoContainer : photoContainers) {
            Integer itemId = photoContainer.getItemId();
            if (!photoMap.containsKey(itemId)) {
                photoMap.put(itemId, new ArrayList<>());
            }
            photoMap.get(itemId).add(photoContainer.getPhoto());
        }
        return photoMap;
    }

    private PhotoContainer extract(ResultSet resultSet) throws SQLException {
        Photo photo = new Photo();
        photo.setId(resultSet.getInt("photo_id"));
        photo.setPhoto(resultSet.getString("photo"));

        PhotoContainer photoContainer = new PhotoContainer();
        photoContainer.setPhoto(photo);
        photoContainer.setItemId(resultSet.getInt("item_id"));
        return photoContainer;
    }

    private static final class PhotoContainer {
        private Integer itemId;
        private Photo photo;

        public Integer getItemId() {
            return itemId;
        }

        public void setItemId(Integer itemId) {
            this.itemId = itemId;
        }

        public Photo getPhoto() {
            return photo;
        }

        public void setPhoto(Photo photo) {
            this.photo = photo;
        }
    }
}
