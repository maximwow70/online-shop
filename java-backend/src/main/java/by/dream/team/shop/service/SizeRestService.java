package by.dream.team.shop.service;

import by.dream.team.shop.dao.SizeDAO;
import by.dream.team.shop.model.Size;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Dmitry Kovalenko
 */
@Service
public class SizeRestService {

    @Autowired
    private SizeDAO sizeDAO;

    public List<Size> getAll() {
        return sizeDAO.getAll()
                .stream()
                .map(this::extract)
                .collect(Collectors.toList());
    }

    private Size extract(by.dream.team.shop.domain.Size Size) {
        Size sizeModel = new Size();
        sizeModel.setId(Size.getId());
        sizeModel.setName(Size.getTitle());
        return sizeModel;
    }
}