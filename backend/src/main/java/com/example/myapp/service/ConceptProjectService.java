package com.example.myapp.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;

import java.util.concurrent.ExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; 

import com.example.myapp.model.ConceptProject; 
import java.util.List;
import java.util.ArrayList; 

@Service
public class ConceptProjectService {
    
    private final Firestore firestore; 

    @Autowired 
    public ConceptProjectService(Firestore firestore) {
        this.firestore = firestore; 
    }

    // Get all concept projects
    public List<ConceptProject> getAllConceptProjects() throws ExecutionException, InterruptedException {
        ApiFuture<QuerySnapshot> future = firestore.collection("concept-projects").get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        List<ConceptProject> conceptProjects = new ArrayList<>();

        for (QueryDocumentSnapshot document : documents) {
            conceptProjects.add(document.toObject(ConceptProject.class));
        }
        return conceptProjects; 
    }
}
