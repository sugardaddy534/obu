package com.umat.fooddelivery.repository;

import com.umat.fooddelivery.model.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends MongoRepository<Restaurant, String> {
    
    List<Restaurant> findByNameContainingIgnoreCase(String name);
    
    @Query("{'categories': ?0}")
    List<Restaurant> findByCategory(String category);
    
    List<Restaurant> findByRatingGreaterThanEqual(double rating);
    
    List<Restaurant> findByDeliveryFeeIsLessThanEqual(double maxFee);
}

