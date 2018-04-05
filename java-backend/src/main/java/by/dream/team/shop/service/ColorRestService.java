package by.dream.team.shop.service;

import by.dream.team.shop.dao.ColorDAO;
import by.dream.team.shop.model.Color;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Dmitry Kovalenko
 */
@Service
public class ColorRestService {

    @Autowired
    private ColorDAO colorDAO;

    public List<Color> getAll() {
        return colorDAO.getAll()
                .stream()
                .map(this::extract)
                .collect(Collectors.toList());
    }

    private Color extract(by.dream.team.shop.domain.Color color) {
        Color colorModel = new Color();
        colorModel.setId(color.getId());
        colorModel.setTitle(color.getTitle());
        return colorModel;
    }
}
