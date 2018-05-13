package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.FeatureListDAO;
import by.dream.team.shop.domain.FeatureList;
import by.dream.team.shop.spring.ApplicationConfiguration;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * @author Dmitry Kovalenko
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {ApplicationConfiguration.class})
public class TestFeatureListDAO {

    @Autowired
    private FeatureListDAO featureListDAO;

    @Test
    public void testGetFeatureListsByItemIds() {
        List<Integer> itemIds = Collections.singletonList(1);
        Map<Integer, List<FeatureList>> featureListMap = featureListDAO.getFeatureListsByItemIds(itemIds);
        assertNotNull(featureListMap);
        assertEquals(featureListMap.size(), 1);
        assertEquals(featureListMap.get(1).size(), 2);
        assertEquals(featureListMap.get(1).get(0).getFeatures().size(), 4);
    }
}
