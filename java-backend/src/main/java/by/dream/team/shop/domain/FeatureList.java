package by.dream.team.shop.domain;

import java.util.List;

/**
 * @author Dmitry Kovalenko
 */
public class FeatureList {

    private Integer id;
    private Integer itemId;
    private String name;
    private List<Feature> features;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getItemId() {
        return itemId;
    }

    public void setItemId(Integer itemId) {
        this.itemId = itemId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Feature> getFeatures() {
        return features;
    }

    public void setFeatures(List<Feature> features) {
        this.features = features;
    }
}
