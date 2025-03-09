package com.umat.fooddelivery.controller;

import com.umat.fooddelivery.model.AdminUser;
import com.umat.fooddelivery.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
    private AuthService authService;
    
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");
        
        boolean authenticated = authService.authenticate(username, password);
        
        Map<String, Object> response = new HashMap<>();
        if (authenticated) {
            response.put("success", true);
            response.put("message", "Authentication successful");
            // In a real application, you would generate and return a JWT token
            response.put("token", "sample-token-" + System.currentTimeMillis());
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            response.put("message", "Invalid credentials");
            return ResponseEntity.status(401).body(response);
        }
    }
    
    @PostMapping("/register")
    public ResponseEntity<AdminUser> register(@RequestBody AdminUser user) {
        return ResponseEntity.ok(authService.createAdminUser(user));
    }
}

