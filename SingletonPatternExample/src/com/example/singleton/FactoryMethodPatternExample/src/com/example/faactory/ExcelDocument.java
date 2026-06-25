package com.example.faactory;

public class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Excel Document Opened");
    }
}
