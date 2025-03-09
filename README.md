# ObuRes Order Management Application

This is the order management application for ObuRes Food Delivery service at UMAT Esikado Campus.

## Features

- Receive and manage orders from the ObuRes food delivery website
- Update order status (Received, Preparing, Out for Delivery, Delivered, Cancelled)
- Track payment status
- View customer information
- Filter orders by status

## Installation

### Prerequisites

- Java 11 or higher
- MongoDB (local or cloud instance)

### Installation Steps

1. Download the installer from the releases page
2. Run the installer and follow the installation wizard
3. The application will be installed to C:\Program Files\ObuRes Order Management by default
4. Shortcuts will be created on the desktop and in the Start menu

### Running the Application

You can run the application in several ways:
- Double-click the desktop shortcut
- Use the Start menu shortcut
- Run the executable directly from the installation folder

## First-time Setup

When you first run the application, a default admin user will be created:
- Username: admin
- Password: admin123

It is recommended to change this password after your first login.

## Configuration

The application uses MongoDB to store order data. By default, it connects to a local MongoDB instance.

To configure the MongoDB connection, edit the `application.properties` file in the installation directory:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/fooddelivery
spring.data.mongodb.database=fooddelivery

