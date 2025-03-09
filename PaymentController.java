package com.umat.fooddelivery.controller;

import com.umat.fooddelivery.model.PaymentMethod;
import com.umat.fooddelivery.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    
    @Autowired
    private PaymentService paymentService;
    
    @GetMapping("/methods")
    public ResponseEntity<List<PaymentMethod>> getAllPaymentMethods() {
        return ResponseEntity.ok(paymentService.getAllPaymentMethods());
    }
    
    @GetMapping("/methods/active")
    public ResponseEntity<List<PaymentMethod>> getActivePaymentMethods() {
        return ResponseEntity.ok(paymentService.getActivePaymentMethods());
    }
    
    @PostMapping("/methods")
    public ResponseEntity<PaymentMethod> createPaymentMethod(@RequestBody PaymentMethod paymentMethod) {
        return ResponseEntity.ok(paymentService.savePaymentMethod(paymentMethod));
    }
    
    @PutMapping("/methods/{id}")
    public ResponseEntity<PaymentMethod> updatePaymentMethod(@PathVariable String id, @RequestBody PaymentMethod paymentMethod) {
        paymentMethod.setId(id);
        return ResponseEntity.ok(paymentService.savePaymentMethod(paymentMethod));
    }
    
    @DeleteMapping("/methods/{id}")
    public ResponseEntity<Void> deletePaymentMethod(@PathVariable String id) {
        paymentService.deletePaymentMethod(id);
        return ResponseEntity.noContent().build();
    }
}

