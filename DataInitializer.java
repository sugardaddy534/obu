package com.umat.fooddelivery.config;

import com.umat.fooddelivery.model.MenuItem;
import com.umat.fooddelivery.model.Restaurant;
import com.umat.fooddelivery.service.PaymentService;
import com.umat.fooddelivery.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {
    
    @Autowired
    private RestaurantService restaurantService;
    
    @Autowired
    private PaymentService paymentService;
    
    @Override
    public void run(String... args) {
        // Initialize payment methods
        paymentService.initializeDefaultPaymentMethods();
        
        // Initialize Ghanaian dishes if no restaurants exist
        if (restaurantService.findAllRestaurants().isEmpty()) {
            Restaurant obuRes = new Restaurant();
            obuRes.setName("ObuRes");
            obuRes.setImageUrl("/placeholder.svg?height=400&width=600");
            obuRes.setAddress("UMAT Esikado Campus, Tarkwa, Ghana");
            obuRes.setPhone("+233 123 456 789");
            obuRes.setCategories(Arrays.asList("Ghanaian", "Local", "Traditional"));
            obuRes.setRating(4.8);
            obuRes.setDeliveryTimeMinutes(45);
            obuRes.setDeliveryFee(10.0);
            obuRes.setPaymentMethods(Arrays.asList("Pay on Delivery", "MTN Mobile Money"));
            
            // Create menu items
            List<MenuItem> menuItems = Arrays.asList(
                createMenuItem("Jollof Rice with Chicken", "Spicy rice cooked in tomato sauce with grilled chicken", 35.0),
                createMenuItem("Waakye with Fish", "Rice and beans with fried fish and stew", 30.0),
                createMenuItem("Banku with Tilapia", "Fermented corn and cassava dough with grilled tilapia", 45.0),
                createMenuItem("Fufu with Light Soup", "Pounded cassava and plantain with spicy soup", 40.0),
                createMenuItem("Kenkey with Fried Fish", "Fermented corn dough with fried fish and pepper sauce", 25.0),
                createMenuItem("Tuo Zaafi", "Millet or corn flour pudding with vegetable soup", 35.0)
            );
            
            obuRes.setMenu(menuItems);
            
            restaurantService.saveRestaurant(obuRes);
        }
    }
    
    private MenuItem createMenuItem(String name, String description, double price) {
        MenuItem item = new MenuItem();
        item.setName(name);
        item.setDescription(description);
        item.setPrice(price);
        item.setCurrency("GH₵");
        item.setImageUrl("/placeholder.svg?height=200&width=300");
        item.setCategory("Local Dishes");
        item.setAvailable(true);
        item.setLocalDish(true);
        return item;
    }
}

