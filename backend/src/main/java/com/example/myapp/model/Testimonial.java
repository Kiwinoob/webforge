package com.example.myapp.model;

public class Testimonial {
    private Integer id;
    private String quote;
    private String author;
    private String title;
    private String company;

    // Getters
    public Integer getId() {
        return this.id; 
    }

    public String getQuote() {
        return this.quote; 
    }

    public String getAuthor() {
        return this.author; 
    }

    public String getTitle() {
        return this.title; 
    }

    public String getCompany() {
        return this.company;
    }
}
