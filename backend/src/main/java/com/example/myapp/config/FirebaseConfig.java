package com.example.myapp.config;


import java.io.ByteArrayInputStream;
import java.io.InputStream;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;

import jakarta.annotation.PostConstruct;

@Configuration
public class FirebaseConfig {

    @Value("${FIREBASE_SERVICE_ACCOUNT_KEY}")
    private String firebaseServiceAccountKey;

    @PostConstruct
    public void initialize() {
        try {
            InputStream serviceAccount = new ByteArrayInputStream(firebaseServiceAccountKey.getBytes());
            
            FirebaseOptions options = FirebaseOptions.builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .build();
            
            if (FirebaseApp.getApps().isEmpty()) {
                FirebaseApp.initializeApp(options); 
            }
            
            System.out.println("Firebase initialization completed");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    @Bean
    public Firestore firestore() {
        return FirestoreClient.getFirestore();
    }
}
