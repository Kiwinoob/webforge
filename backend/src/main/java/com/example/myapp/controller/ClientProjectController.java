package com.example.myapp.controller;

import com.example.myapp.model.ClientProject; 
import com.example.myapp.service.ClientProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import java.util.List; 

@RestController
@CrossOrigin(origins = "*") // CORS configuration for localhost
public class ClientProjectController {
    
    private final ClientProjectService clientProjectService; 

    @Autowired 
    public ClientProjectController(ClientProjectService clientProjectService) {
        this.clientProjectService = clientProjectService; 
    }

    @GetMapping("/clientproject/get")
    public ResponseEntity<List<ClientProject>> getAllClientProjects() {
        try {
            return new ResponseEntity<>(clientProjectService.getAllClientProjects(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
