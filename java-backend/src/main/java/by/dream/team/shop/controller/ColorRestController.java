package by.dream.team.shop.controller;

import by.dream.team.shop.domain.Color;
import by.dream.team.shop.service.ColorRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Dmitry Kovalenko
 */
@RestController
@RequestMapping("api/color")
public class ColorRestController {

    @Autowired
    private ColorRestService colorRestService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Color> getAll() {
        return colorRestService.getAll();
    }
}
