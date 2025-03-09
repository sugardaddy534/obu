package com.umat.fooddelivery.repository;

import com.umat.fooddelivery.model.PaymentMethod;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentMethodRepository extends MongoRepository<PaymentMethod, String> {
    
    List<PaymentMethod> findByIsActiveTrue();
    
    List<PaymentMethod> findByType(String type);
}

