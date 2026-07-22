package com.cognizant.spring_learn3.config;

import java.io.IOException;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import com.cognizant.spring_learn3.model.Country;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

@Configuration
public class CountryConfig {

    @Bean
    public List<Country> countryList() throws IOException {

        XmlMapper mapper = new XmlMapper();

        Countries countries = mapper.readValue(
                new ClassPathResource("country.xml").getInputStream(),
                Countries.class);

        return countries.getCountry();

    }

}