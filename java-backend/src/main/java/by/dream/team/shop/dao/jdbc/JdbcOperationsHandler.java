package by.dream.team.shop.dao.jdbc;

import by.dream.team.shop.exception.DataException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;

/**
 * @author Dmitry Kovalenko
 */
@Service
public class JdbcOperationsHandler {


    @Autowired
    private NamedParameterJdbcOperations namedParameterJdbcOperations;

    /**
     * Метод для вызова {@link NamedParameterJdbcOperations#update(String, Map)} и проверки на ошибки.
     * @param query Текст SQL запроса к БД.
     * @param namedParameters Параметры запроса.
     * @return true - если метод изменил хоть один кортеж базы данных, {@code false} - если метод ничего не изменил.
     */
    int update(final String query, final Map<String, Object> namedParameters) {
        try {
            return namedParameterJdbcOperations.update(query, namedParameters);
        } catch (org.springframework.dao.DataAccessException e) {
            throw new DataException(e.getMessage(), e.getCause());
        }
    }

    /**
     * Метод для вызова {@link NamedParameterJdbcOperations#queryForObject(String, Map, RowMapper)}  и проверки на ошибки.
     * @param query Текст SQL запроса к БД.
     * @param namedParameters Параметры запроса.
     * @return Объект типа {@link T}
     */
    <T> T queryForObject(final String query,
                         final Map<String, Object> namedParameters,
                         final RowMapper<T> rowMapper) {
        try {
            return namedParameterJdbcOperations.queryForObject(query, namedParameters, rowMapper);
        } catch (org.springframework.dao.DataAccessException e) {
            throw new DataException(e.getMessage(), e.getCause());
        }
    }

    /**
     * Метод для вызова {@link NamedParameterJdbcOperations#query(String, Map, RowMapper)}  и проверки на ошибки.
     * @param query Текст SQL запроса к БД.
     * @param namedParameters Параметры запроса.
     * @return Список объектов типа {@link T}.
     */
    <T> List<T> query(final String query,
                      final Map<String, Object> namedParameters,
                      final RowMapper<T> rowMapper) {
        try {
            return namedParameterJdbcOperations.query(query, namedParameters, rowMapper);
        } catch (DataAccessException e) {
            throw new DataException(e.getMessage(), e.getCause());
        }
    }

    /**
     * Метод для вызова {@link NamedParameterJdbcOperations#query(String, Map, RowMapper)} без параметров.
     * @param query Текст SQL запроса к БД.
     * @return Список объектов типа {@link T}.
     */
    <T> List<T> query(final String query, final RowMapper<T> rowMapper) {
        return query(query, Collections.emptyMap(), rowMapper);
    }
}
