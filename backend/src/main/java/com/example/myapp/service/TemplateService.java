package com.example.myapp.service;

import com.example.myapp.model.Template;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@Service
public class TemplateService {
    
    private static final String COLLECTION_NAME = "templates";
    
    // Get Firestore instance
    private Firestore getFirestore() {
        return FirestoreClient.getFirestore();
    }
    
    // Create a new template
    public String createTemplate(Template template) throws ExecutionException, InterruptedException {
        Firestore firestore = getFirestore();
        ApiFuture<DocumentReference> future = firestore.collection(COLLECTION_NAME).add(template);
        DocumentReference documentReference = future.get();
        return documentReference.getId();
    }
    
    // Get template by ID
    public Template getTemplateById(String templateId) throws ExecutionException, InterruptedException {
        Firestore firestore = getFirestore();
        DocumentReference documentReference = firestore.collection(COLLECTION_NAME).document(templateId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        
        if (document.exists()) {
            Template template = document.toObject(Template.class);
            if (template != null) {
                template.setId(document.getId());
            }
            return template;
        }
        return null;
    }
    
    // Get all templates
    public List<Template> getAllTemplates() throws ExecutionException, InterruptedException {
        Firestore firestore = getFirestore();
        ApiFuture<QuerySnapshot> future = firestore.collection(COLLECTION_NAME).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        
        List<Template> templates = new ArrayList<>();
        for (QueryDocumentSnapshot document : documents) {
            Template template = document.toObject(Template.class);
            template.setId(document.getId());
            templates.add(template);
        }
        return templates;
    }
    
    // Update template
    public void updateTemplate(String templateId, Template template) throws ExecutionException, InterruptedException {
        Firestore firestore = getFirestore();
        ApiFuture<WriteResult> future = firestore.collection(COLLECTION_NAME)
                .document(templateId)
                .set(template);
        future.get();
    }
    
    // Delete template
    public void deleteTemplate(String templateId) throws ExecutionException, InterruptedException {
        Firestore firestore = getFirestore();
        ApiFuture<WriteResult> future = firestore.collection(COLLECTION_NAME)
                .document(templateId)
                .delete();
        future.get();
    }
}
