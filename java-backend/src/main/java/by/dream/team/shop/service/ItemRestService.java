package by.dream.team.shop.service;


import by.dream.team.shop.dao.ItemDAO;
import by.dream.team.shop.domain.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

/**
 * @author Dmitry Kovalenko
 */
@Service
public class ItemRestService {

    @Autowired
    private ItemDAO itemDAO;


    public List<Item> getAll() {
        return itemDAO.getAll();
    }

    public Item get(Integer id) {
        return itemDAO.get(id);
    }

    public List<Item> getByIds(Collection<Integer> ids) {
        if (ids.isEmpty()) {
            return Collections.emptyList();
        } else {
            return itemDAO.getByIds(ids);
        }
    }
}
