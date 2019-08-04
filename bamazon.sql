DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price DECIMAL(10, 2) NULL,
    stock_quantity INT,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Logitech C920 webcam", "Electronics", 56.00, 100), 
    ("AMD Ryzen 7 2700X", "Electronics", 251.89, 8), 
    ("Bed Pillow", "Home", 44.85, 290), 
    ("Google Chromecast (3rd Generation)", "Electronics", 35.00, 253),
    ("Chuckit! Ultra Ball Medium (2 PACK)", "Pet Supplies", 4.20, 800),
    ("adidas Glider Soccer Ball", "Sports", 12.00, 134),
    ("SmartSticks Peanut Butter Chews (10 Pack)", "Pet Supplies", 5.69, 80),
    ("Tachikara GAUGE Ball Pressure Gauge", "Sports", 8.91, 10),
    ("Nest (T3007ES) Learning Thermostat", "Home", 227.99, 73),
    ("iRobot Roomba 690", "Home", 297.49, 3)