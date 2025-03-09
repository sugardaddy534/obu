package com.umat.fooddelivery.controller.ui;

import com.umat.fooddelivery.model.Order;
import com.umat.fooddelivery.service.OrderService;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.*;
import javafx.scene.control.cell.PropertyValueFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.net.URL;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.ResourceBundle;

@Component
public class DashboardController implements Initializable {
    
    @FXML
    private TableView<Order> ordersTable;
    
    @FXML
    private TableColumn<Order, String> idColumn;
    
    @FXML
    private TableColumn<Order, String> customerNameColumn;
    
    @FXML
    private TableColumn<Order, String> phoneColumn;
    
    @FXML
    private TableColumn<Order, Double> totalColumn;
    
    @FXML
    private TableColumn<Order, String> statusColumn;
    
    @FXML
    private TableColumn<Order, String> paymentMethodColumn;
    
    @FXML
    private TableColumn<Order, String> paymentStatusColumn;
    
    @FXML
    private TableColumn<Order, LocalDateTime> createdAtColumn;
    
    @FXML
    private ComboBox<String> statusFilterComboBox;
    
    @FXML
    private Button refreshButton;
    
    @FXML
    private Button updateStatusButton;
    
    @FXML
    private ComboBox<String> newStatusComboBox;
    
    @Autowired
    private OrderService orderService;
    
    private ObservableList<Order> ordersList = FXCollections.observableArrayList();
    
    @Override
    public void initialize(URL location, ResourceBundle resources) {
        // Initialize table columns
        idColumn.setCellValueFactory(new PropertyValueFactory<>("id"));
        customerNameColumn.setCellValueFactory(new PropertyValueFactory<>("customerName"));
        phoneColumn.setCellValueFactory(new PropertyValueFactory<>("customerPhone"));
        totalColumn.setCellValueFactory(new PropertyValueFactory<>("totalAmount"));
        statusColumn.setCellValueFactory(new PropertyValueFactory<>("orderStatus"));
        paymentMethodColumn.setCellValueFactory(new PropertyValueFactory<>("paymentMethod"));
        paymentStatusColumn.setCellValueFactory(new PropertyValueFactory<>("paymentStatus"));
        createdAtColumn.setCellValueFactory(new PropertyValueFactory<>("createdAt"));
        
        // Format date column
        createdAtColumn.setCellFactory(column -> new TableCell<Order, LocalDateTime>() {
            private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
            
            @Override
            protected void updateItem(LocalDateTime item, boolean empty) {
                super.updateItem(item, empty);
                if (empty || item == null) {
                    setText(null);
                } else {
                    setText(formatter.format(item));
                }
            }
        });
        
        // Initialize status filter combo box
        statusFilterComboBox.getItems().addAll(
                "ALL",
                "RECEIVED",
                "PREPARING",
                "OUT_FOR_DELIVERY",
                "DELIVERED",
                "CANCELLED"
        );
        statusFilterComboBox.setValue("ALL");
        
        // Initialize new status combo box
        newStatusComboBox.getItems().addAll(
                "RECEIVED",
                "PREPARING",
                "OUT_FOR_DELIVERY",
                "DELIVERED",
                "CANCELLED"
        );
        newStatusComboBox.setValue("PREPARING");
        
        // Load orders
        loadOrders();
        
        // Add listener to status filter combo box
        statusFilterComboBox.setOnAction(event -> loadOrders());
    }
    
    @FXML
    private void handleRefresh(ActionEvent event) {
        loadOrders();
    }
    
    @FXML
    private void handleUpdateStatus(ActionEvent event) {
        Order selectedOrder = ordersTable.getSelectionModel().getSelectedItem();
        if (selectedOrder == null) {
            showAlert(Alert.AlertType.WARNING, "No Selection", "Please select an order to update");
            return;
        }
        
        String newStatus = newStatusComboBox.getValue();
        Order updatedOrder = orderService.updateOrderStatus(selectedOrder.getId(), newStatus);
        
        if (updatedOrder != null) {
            showAlert(Alert.AlertType.INFORMATION, "Success", "Order status updated successfully");
            loadOrders();
        } else {
            showAlert(Alert.AlertType.ERROR, "Error", "Failed to update order status");
        }
    }
    
    private void loadOrders() {
        String statusFilter = statusFilterComboBox.getValue();
        
        List<Order> orders;
        if ("ALL".equals(statusFilter)) {
            orders = orderService.getAllOrders();
        } else {
            orders = orderService.getOrdersByStatus(statusFilter);
        }
        
        ordersList.clear();
        ordersList.addAll(orders);
        ordersTable.setItems(ordersList);
    }
    
    private void showAlert(Alert.AlertType type, String title, String message) {
        Alert alert = new Alert(type);
        alert.setTitle(title);
        alert.setHeaderText(null);
        alert.setContentText(message);
        alert.showAndWait();
    }
}

