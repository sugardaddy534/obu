package com.umat.fooddelivery.config;

import com.umat.fooddelivery.model.AdminUser;
import com.umat.fooddelivery.repository.AdminUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AdminDataInitializer implements CommandLineRunner {
    
    @Autowired
    private AdminUserRepository adminUserRepository;
    
    @Override
    public void run(String... args) {
        // Create default admin user if none exists
        if (adminUserRepository.count() == 0) {
            AdminUser admin = new AdminUser();
            admin.setUsername("admin");
            admin.setPassword("admin123"); // In a real app, use a password encoder
            admin.setRole("ADMIN");
            adminUserRepository.save(admin);
            
            System.out.println("Default admin user created: username=admin, password=admin123");
        }
    }
}

