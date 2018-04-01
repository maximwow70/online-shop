package by.dream.team.shop.spring;

import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.Environment;
import org.springframework.core.env.MutablePropertySources;
import org.springframework.core.env.PropertySource;

import java.util.List;

/**
 * Класс, расширяющий {@link PropertySourcesPlaceholderConfigurer} с сохранением русерсов .properties в {@link #environment}.
 * @author Dmitry Kovalenko
 */
public class PropertySourcesConfigurer
    extends PropertySourcesPlaceholderConfigurer {

    private Environment environment;
    private List<PropertySource> sourceList;

    /**
     * Настройка источников .properties в виде списка для удобства xml конфигурации.
     *
     * @param propertySources Список источников .properties ресурсов.
     */
    public void setPropertySources(final List<PropertySource> propertySources) {

        this.sourceList = propertySources;
        MutablePropertySources sources = new MutablePropertySources();
        copyListToPropertySources(this.sourceList, sources);
        super.setPropertySources(sources);
    }

    /**
     * Метод для сохранения environment, для последующего заполнения.
     *
     * @param environment окружение для сохранения ресурсов.
     */
    @Override
    public void setEnvironment(final Environment environment) {
        super.setEnvironment(environment);
        this.environment = environment;
    }

    /**
     * Копирование ресурсов в окружение {@link #environment}.
     */
    public void init() {
        MutablePropertySources envPropSources = ((ConfigurableEnvironment) environment).getPropertySources();
        copyListToPropertySources(this.sourceList, envPropSources);
    }

    /**
     * Копирование ресурсов в контейнер.
     *
     * @param list список ресурсов.
     * @param sources контейнер для ресурсов.
     */
    private void copyListToPropertySources(final List<PropertySource> list, final MutablePropertySources sources) {
        list.forEach(sources::addFirst);
    }
}
