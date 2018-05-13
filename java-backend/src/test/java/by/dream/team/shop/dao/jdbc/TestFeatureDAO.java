package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.dao.FeatureDAO;
import by.dream.team.shop.domain.Feature;
import by.dream.team.shop.spring.ApplicationConfiguration;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * @author Dmitry Kovalenko
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {ApplicationConfiguration.class})
public class TestFeatureDAO {

    @Autowired
    private FeatureDAO featureDAO;

    @Test
    public void testGetFeatureMapByFeatureListIds() {
        List<Integer> ids = Arrays.asList(1,2);
        Map<Integer, List<Feature>> featureMap = featureDAO.getFeatureMapByFeatureListIds(ids);
        assertNotNull(featureMap);
        assertEquals(featureMap.size(), 2);
        assertEquals(featureMap.get(1).size(), 4);
    }
}
