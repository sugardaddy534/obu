package com.umat.fooddelivery.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "paymentMethods")
public class PaymentMethod {
    
    @Id
    private String id;
    private String name;
    private String type; // CASH_ON_DELIVERY, MOBILE_MONEY
    private String description;
    private boolean isActive;
    
    // Constructors
    public PaymentMethod() {
    }
    
    public PaymentMethod(String name, String type, String description, boolean isActive) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.isActive = isActive;
    }
    
    // Getters and Setters
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getType() {
        return type;
    }
    
    public void setType(String type) {
        this.type = type;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public boolean isActive() {
        return isActive;
    }
    
    public void setActive(boolean active) {
        isActive = active;
    }
}

