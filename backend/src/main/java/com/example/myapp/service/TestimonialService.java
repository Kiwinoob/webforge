package com.example.myapp.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;

import java.util.concurrent.ExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; 

import com.example.myapp.model.Testimonial; 
import java.util.List;
import java.util.ArrayList; 

@Service
public class TestimonialService {
    
    private final Firestore firestore; 

    @Autowired 
    public TestimonialService(Firestore firestore) {
        this.firestore = firestore; 
    }

    // Get all testimonials
    public List<Testimonial> getAllTestimonials() throws ExecutionException, InterruptedException {
        ApiFuture<QuerySnapshot> future = firestore.collection("testimonials").get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        List<Testimonial> testimonials = new ArrayList<>();

        for (QueryDocumentSnapshot document : documents) {
            testimonials.add(document.toObject(Testimonial.class));
        }
        return testimonials; 
    }
}
