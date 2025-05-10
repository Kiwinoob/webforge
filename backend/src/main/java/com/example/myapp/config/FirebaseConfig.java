package com.example.myapp.config;


import java.io.IOException;
import java.io.InputStream;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.core.io.ClassPathResource;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;

import jakarta.annotation.PostConstruct;
@Configuration
public class FirebaseConfig {

    @Bean
    public FirebaseApp firebaseApp() throws IOException {
        ClassPathResource resource = new ClassPathResource("firebase-service-account-key.json");
        InputStream serviceAccount = resource.getInputStream();

        FirebaseOptions options = FirebaseOptions.builder()
            .setCredentials(GoogleCredentials.fromStream(serviceAccount))
            .setDatabaseUrl("https://<your-project-id>.firebaseio.com") // REQUIRED
            .setProjectId("<your-project-id>") // RECOMMENDED
            .build();

        return FirebaseApp.initializeApp(options);
    }

    @Bean
    @DependsOn("firebaseApp") // Ensures initialization order
    public Firestore firestore() {
        return FirestoreClient.getFirestore();
    }
}
