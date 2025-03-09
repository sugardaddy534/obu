package com.umat.fooddelivery.service;

import com.umat.fooddelivery.model.Restaurant;
import com.umat.fooddelivery.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {
    
    @Autowired
    private RestaurantRepository restaurantRepository;
    
    public List<Restaurant> findAllRestaurants() {
        return restaurantRepository.findAll();
    }
    
    public Optional<Restaurant> findRestaurantById(String id) {
        return restaurantRepository.findById(id);
    }
    
    public List<Restaurant> searchRestaurants(String query) {
        return restaurantRepository.findByNameContainingIgnoreCase(query);
    }
    
    public List<Restaurant> findRestaurantsByCategory(String category) {
        return restaurantRepository.findByCategory(category);
    }
    
    public Restaurant saveRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }
    
    public void deleteRestaurant(String id) {
        restaurantRepository.deleteById(id);
    }
}

