package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.DetailDAO;
import by.dream.team.shop.domain.Detail;
import by.dream.team.shop.spring.ApplicationConfiguration;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;
/**
 * @author Dmitry Kovalenko
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {ApplicationConfiguration.class})
public class TestDetailDAO {

    @Autowired
    private DetailDAO detailDAO;

    @Test
    public void testGetDetailMapByItemIds() {
        List<Integer> itemIds = Collections.singletonList(1);
        Map<Integer, List<Detail>> detailMap = detailDAO.getDetailMapByItemIds(itemIds);
        assertNotNull(detailMap);
        assertEquals(detailMap.size(), 1);
        assertEquals(detailMap.get(1).size(), 4);
    }

}
