package com.umat.fooddelivery.service;

import com.umat.fooddelivery.model.AdminUser;
import com.umat.fooddelivery.repository.AdminUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    
    @Autowired
    private AdminUserRepository adminUserRepository;
    
    public boolean authenticate(String username, String password) {
        Optional<AdminUser> userOpt = adminUserRepository.findByUsername(username);
        if (userOpt.isPresent()) {
            AdminUser user = userOpt.get();
            // In a real application, you would use a password encoder
            return user.getPassword().equals(password);
        }
        return false;
    }
    
    public AdminUser createAdminUser(AdminUser user) {
        // In a real application, you would encode the password
        return adminUserRepository.save(user);
    }
}

