package com.junitpractice;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorAAATest {

    Calculator cal;

    @Before
    public void setUp() {
        cal = new Calculator();
        System.out.println("Setup Executed");
    }

    @Test
    public void testMultiply() {

        // Arrange
        int a = 4;
        int b = 5;

        // Act
        int result = cal.multiply(a, b);

        // Assert
        assertEquals(20, result);
    }

    @After
    public void tearDown() {
        cal = null;
        System.out.println("Teardown Executed");
    }
}