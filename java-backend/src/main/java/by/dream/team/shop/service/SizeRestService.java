package by.dream.team.shop.service;

import by.dream.team.shop.dao.SizeDAO;
import by.dream.team.shop.domain.Size;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Dmitry Kovalenko
 */
@Service
public class SizeRestService {

    @Autowired
    private SizeDAO sizeDAO;

    public List<Size> getAll() {
        return sizeDAO.getAll();
    }
}