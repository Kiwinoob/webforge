package com.example.myapp.controller;

import com.example.myapp.model.Template;
import com.example.myapp.service.TemplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List; 

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/templates")
@CrossOrigin(origins = "*")
public class TemplateController {
    
    private static final Logger logger = LoggerFactory.getLogger(TemplateController.class);
    
    @Autowired
    private TemplateService templateService;
    
    // Get template by ID
    @GetMapping("/{id}")
    public ResponseEntity<Template> getTemplateById(@PathVariable String id) {
        try {
            Template template = templateService.getTemplateById(id);
            if (template != null) {
                return ResponseEntity.ok(template);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (ExecutionException | InterruptedException e) {
            logger.error("Error retrieving template with ID {}: ", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
      // Get all templates
    @GetMapping
    public ResponseEntity<List<Template>> getAllTemplates() {
        try {
            List<Template> templates = templateService.getAllTemplates();
            return ResponseEntity.ok(templates);
        } catch (ExecutionException | InterruptedException e) {
            logger.error("Error retrieving all templates: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
}
