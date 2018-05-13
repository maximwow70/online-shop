package by.dream.team.shop.service;

import by.dream.team.shop.dao.ColorDAO;
import by.dream.team.shop.domain.Color;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Dmitry Kovalenko
 */
@Service
public class ColorRestService {

    @Autowired
    private ColorDAO colorDAO;

    public List<Color> getAll() {
        return colorDAO.getAll();
    }
}
