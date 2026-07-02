package com.junitpractice;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testAdd() {

        // Arrange
        Calculator cal = new Calculator();

        // Act
        int result = cal.add(5, 5);

        // Assert
        assertEquals(10, result);
    }
}