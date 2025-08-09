package com.example.myapp.model;

public class ConceptProject {
    private Integer id;
    private String title;
    private String description;
    private String defaultImage;
    private String hoverImage;
    private String imageAlt;
    private String tags;
    private String url;

    // Getters
    public Integer getId() {
        return this.id; 
    }

    public String getTitle() {
        return this.title; 
    }

    public String getDescription() {
        return this.description; 
    }

    public String getDefaultImage() {
        return this.defaultImage; 
    }

    public String getHoverImage() {
        return this.hoverImage;
    }

    public String imageAlt() {
        return this.imageAlt; 
    }

    public String getTags() {
        return this.tags; 
    }

    public String getURL() {
        return this.url; 
    }
}
