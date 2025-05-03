package com.example.myapp.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/project")
public class ProjectController {

  @GetMapping("/hello")
  public String sayHello() {
    return "Hello from Spring Boot!";
  }
}