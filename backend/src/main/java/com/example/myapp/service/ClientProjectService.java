package com.example.myapp.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;

import java.util.concurrent.ExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; 

import com.example.myapp.model.ClientProject; 
import java.util.List;
import java.util.ArrayList; 

@Service
public class ClientProjectService {

    private final Firestore firestore; 

    @Autowired
    public ClientProjectService(Firestore firestore) {
        this.firestore = firestore; 
    }

    // Get all client projects 
    public List<ClientProject> getAllClientProjects() throws ExecutionException, InterruptedException {
        ApiFuture<QuerySnapshot> future = firestore.collection("client-projects").get(); 
        List<QueryDocumentSnapshot> documents = future.get().getDocuments(); 
        List<ClientProject> clientProjects = new ArrayList<>(); 

        for (QueryDocumentSnapshot document : documents) {
            clientProjects.add(document.toObject(ClientProject.class));
        }
        return clientProjects; 
    }


}
