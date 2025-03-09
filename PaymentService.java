package com.umat.fooddelivery.service;

import com.umat.fooddelivery.model.PaymentMethod;
import com.umat.fooddelivery.repository.PaymentMethodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {
    
    @Autowired
    private PaymentMethodRepository paymentMethodRepository;
    
    public List<PaymentMethod> getAllPaymentMethods() {
        return paymentMethodRepository.findAll();
    }
    
    public List<PaymentMethod> getActivePaymentMethods() {
        return paymentMethodRepository.findByIsActiveTrue();
    }
    
    public Optional<PaymentMethod> getPaymentMethodById(String id) {
        return paymentMethodRepository.findById(id);
    }
    
    public PaymentMethod savePaymentMethod(PaymentMethod paymentMethod) {
        return paymentMethodRepository.save(paymentMethod);
    }
    
    public void deletePaymentMethod(String id) {
        paymentMethodRepository.deleteById(id);
    }
    
    // Initialize default payment methods if none exist
    public void initializeDefaultPaymentMethods() {
        if (paymentMethodRepository.count() == 0) {
            PaymentMethod cashOnDelivery = new PaymentMethod(
                "Pay on Delivery",
                "CASH_ON_DELIVERY",
                "Pay with cash when your food arrives at your doorstep",
                true
            );
            
            PaymentMethod mtnMomo = new PaymentMethod(
                "MTN Mobile Money",
                "MOBILE_MONEY",
                "Quick and secure payments using your MTN Mobile Money account",
                true
            );
            
            paymentMethodRepository.save(cashOnDelivery);
            paymentMethodRepository.save(mtnMomo);
        }
    }
}

