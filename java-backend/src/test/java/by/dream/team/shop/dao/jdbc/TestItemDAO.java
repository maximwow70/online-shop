package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.ItemDAO;
import by.dream.team.shop.domain.Item;
import by.dream.team.shop.spring.ApplicationConfiguration;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Collections;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * @author Dmitry Kovalenko
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {ApplicationConfiguration.class})
public class TestItemDAO {
    @Autowired
    private ItemDAO itemDAO;

    @Test
    public void testGetFeatureListsByItemIds() {
        List<Integer> itemIds = Collections.singletonList(1);
        List<Item> items = itemDAO.getByIds(itemIds);
        assertNotNull(items);
        assertEquals(items.size(), 1);
        assertEquals(items.get(0).getFeatureLists().size(), 2);
    }
}
