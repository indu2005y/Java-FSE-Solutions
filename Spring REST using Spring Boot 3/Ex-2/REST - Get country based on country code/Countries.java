package com.cognizant.spring_learn3.config;

import java.util.List;

import com.cognizant.spring_learn3.model.Country;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JacksonXmlRootElement(localName="countries")
public class Countries {

    @JacksonXmlProperty(localName="country")
    @JacksonXmlElementWrapper(useWrapping=false)

    private List<Country> country;

    public List<Country> getCountry() {
        return country;
    }

    public void setCountry(List<Country> country) {
        this.country = country;
    }

}