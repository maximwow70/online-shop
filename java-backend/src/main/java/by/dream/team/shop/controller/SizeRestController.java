package by.dream.team.shop.controller;

import by.dream.team.shop.domain.Size;
import by.dream.team.shop.service.SizeRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/size")
public class SizeRestController {

    @Autowired
    private SizeRestService sizeRestService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Size> getAll() {
        return sizeRestService.getAll();
    }
}