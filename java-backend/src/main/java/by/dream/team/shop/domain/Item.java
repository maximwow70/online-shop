package by.dream.team.shop.domain;

import java.util.List;

/**
 * @author Dmitry Kovalenko
 */
public class Item {

    private Integer id;
    private String article;
    private String name;
    private String description;

    public Integer getId() {
        return id;
    }

    public void setId(final Integer id) {
        this.id = id;
    }

    public String getArticle() {
        return article;
    }

    public void setArticle(final String article) {
        this.article = article;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(final String description) {
        this.description = description;
    }
}
