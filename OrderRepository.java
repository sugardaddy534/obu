package com.umat.fooddelivery.repository;

import com.umat.fooddelivery.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {
    
    List<Order> findByOrderStatus(String orderStatus);
    
    List<Order> findByCustomerPhone(String customerPhone);
    
    List<Order> findByCreatedAtBetween(LocalDateTime start, LocalDateTime end);
    
    List<Order> findByPaymentMethod(String paymentMethod);
    
    List<Order> findByPaymentStatus(String paymentStatus);
}

