package com.example.myapp.controller;

import com.example.myapp.model.ConceptProject;
import com.example.myapp.service.ConceptProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.RestController; 
import org.springframework.http.ResponseEntity; 

import java.util.List; 

@RestController
@CrossOrigin(origins = "*") // CORS configuration
public class ConceptProjectController {
    
    private final ConceptProjectService conceptProjectService; 

    @Autowired 
    public ConceptProjectController(ConceptProjectService conceptProjectService) {
        this.conceptProjectService = conceptProjectService; 
    }

    @GetMapping("/conceptproject/get")
    public ResponseEntity<List<ConceptProject>> getAllConceptProjects() {
        try {
            return new ResponseEntity<>(conceptProjectService.getAllConceptProjects(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
