package com.example.myapp.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.example.myapp.model.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ProjectService {

    private final Firestore firestore;

    @Autowired
    public ProjectService(Firestore firestore) {
        this.firestore = firestore;
    }

    // Create a new project
    public Project createProject(Project project) throws ExecutionException, InterruptedException {
        DocumentReference docRef = firestore.collection("projects").document();
        project.setId(docRef.getId());
        ApiFuture<WriteResult> result = docRef.set(project);
        result.get();
        return project;
    }

    // Get a project by ID
    public Project getProject(String id) throws ExecutionException, InterruptedException {
        DocumentReference docRef = firestore.collection("projects").document(id);
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot document = future.get();
        return document.exists() ? document.toObject(Project.class) : null;
    }

    // List all projects
    public List<Project> getAllProjects() throws ExecutionException, InterruptedException {
        ApiFuture<QuerySnapshot> future = firestore.collection("projects").get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        List<Project> projects = new ArrayList<>();
        
        for (QueryDocumentSnapshot document : documents) {
            projects.add(document.toObject(Project.class));
        }
        return projects;
    }

    // Update a project
    public Project updateProject(String id, Project project) throws ExecutionException, InterruptedException {
        DocumentReference docRef = firestore.collection("projects").document(id);
        project.setId(id);
        ApiFuture<WriteResult> result = docRef.set(project);
        result.get();
        return project;
    }

    // Delete a project
    public boolean deleteProject(String id) throws ExecutionException, InterruptedException {
        DocumentReference docRef = firestore.collection("projects").document(id);
        ApiFuture<WriteResult> result = docRef.delete();
        result.get();
        return true;
    }
}