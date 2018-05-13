package by.dream.team.shop.dao;

import java.util.List;

/**
 * @author Dmitry Kovalenko
 */
public interface DAO<T> {

    /**
     * Получение объекта из бд с указанным идентификатором.
     *
     * @param id идентификатор.
     * @return объект приведенного типа.
     */
    T get(Integer id);

    /**
     * Добавление объекта в бд.
     *
     * @param object объект для добавления.
     * @return true, если добваление прошло успешно, false - в противном случае.
     */
    boolean add(T object);

    /**
     * Удаление объекта из бд с указанным идентификатором.
     *
     * @param id идентификатор.
     * @return true, если удаление прошло успешно, false - в противном случае.
     */
    boolean remove(Integer id);

    /**
     * Обновление объекта с указанными новыми данными.
     *
     * @param object объект с новыми данными.
     * @return true, если обновление прошло успешно, false - в противном случае.
     */
    boolean update(T object);

    /**
     * Получение списка всех объектов из бд.
     *
     * @return список объектов или пустой список.
     */
    List<T> getAll();

}
