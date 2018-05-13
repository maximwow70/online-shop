package by.dream.team.shop.controller;

import by.dream.team.shop.domain.Item;
import by.dream.team.shop.service.ItemRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Dmitry Kovalenko
 */
@RestController
@RequestMapping("/api/item")
public class ItemRestController {

    @Autowired
    private ItemRestService itemRestService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Item get(@PathVariable("id") final Integer id) {
        return itemRestService.get(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Item> getAll() {
        return itemRestService.getAll();
    }

    @RequestMapping(value = "/byIds", method = RequestMethod.GET)
    public List<Item> getByIds(@RequestParam("ids") List<Integer> ids) {
        return itemRestService.getByIds(ids);
    }
}
