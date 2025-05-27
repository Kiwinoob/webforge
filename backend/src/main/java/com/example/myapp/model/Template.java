package com.example.myapp.model;

import java.util.List;

public class Template {
    private String id;
    private List<String> pages;
    
    // Default constructor
    public Template() {}
    
    // Constructor with parameters
    public Template(String id, List<String> pages) {
        this.id = id;
        this.pages = pages;
    }
    
    // Getters and setters
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public List<String> getPages() {
        return pages;
    }
    
    public void setPages(List<String> pages) {
        this.pages = pages;
    }
}
