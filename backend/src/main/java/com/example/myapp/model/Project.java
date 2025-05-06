package com.example.myapp.model;

public class Project {
    private String id;
    private String title;
    private String description;
    private String client;  
    private String category;
    private String imageUrl;
    private String projectUrl;  

  // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getClient() { return client; }
    public void setClient(String client) { this.client = client; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public String getProjectUrl() { return projectUrl; }    
    public void setProjectUrl(String projectUrl) { this.projectUrl = projectUrl; }



}