package by.dream.team.shop.exception;

/**
 * @author Dmitry Kovalenko
 */
public class DataException extends RuntimeException {

    public DataException(final String message, Throwable cause) {
        super(message, cause);
    }

    public DataException(final String message) {
        super(message);
    }
}
