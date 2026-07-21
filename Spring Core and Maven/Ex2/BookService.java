package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository repository;

    public BookService() {
        System.out.println("Book Service Created");
    }

    public void setRepository(BookRepository repository) {
        this.repository = repository;
    }

    public void service() {
        System.out.println("BookService Method Called");
        repository.display();
    }
}