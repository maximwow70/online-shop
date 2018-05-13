package by.dream.team.shop.domain;

/**
 * @author Dmitry Kovalenko
 */
public class Feature {

    private Integer id;
    private Integer featureListId;
    private String key;
    private String value;

    public Integer getId() {
        return id;
    }

    public void setId(final Integer id) {
        this.id = id;
    }

    public Integer getFeatureListId() {
        return featureListId;
    }

    public void setFeatureListId(final Integer featureListId) {
        this.featureListId = featureListId;
    }

    public String getKey() {
        return key;
    }

    public void setKey(final String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(final String value) {
        this.value = value;
    }
}
