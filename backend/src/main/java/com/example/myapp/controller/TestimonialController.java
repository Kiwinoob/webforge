package com.example.myapp.controller;

import com.example.myapp.model.Testimonial; 
import com.example.myapp.service.TestimonialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import java.util.List; 

@RestController 
@CrossOrigin(origins = "*") // CORS configuration for localhost 
public class TestimonialController {
    private final TestimonialService testimonialService; 

    @Autowired 
    public TestimonialController(TestimonialService testimonialService) {
        this.testimonialService = testimonialService;
    }

    @GetMapping("/testimonial/get") 
    public ResponseEntity<List<Testimonial>> getAllTestimonials() {
        try {
            return new ResponseEntity<>(testimonialService.getAllTestimonials(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
