create database if not exists `phone_store`;
use `phone_store`;


create table if not exists `category` (
  `id` int not null auto_increment,
  `title` varchar(100) not null,
  primary key(`id`)
);

create table if not exists `product` (
  `id` int PRIMARY KEY auto_increment,
  `category_id` int not null,
  `name` varchar(100) not null,
  `color` varchar(30) not null,
  `sale_percent` int not null default 0,
  `price` int not null,
  `manufacturer` varchar(100) not null,
  `html` varchar(10000) not null,
  foreign key (`category_id`) references `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE if not exists`user` (
  `id` int PRIMARY KEY auto_increment,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL UNIQUE,
  `password` varchar(250) NOT NULL,
  `avatar` varchar(50),
  `passwordChangedAt` date not null,
  `registryAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` datetime,
  `address` varchar(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE if not exists`staff` (
  `id` int PRIMARY KEY auto_increment,
  `avatar` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL UNIQUE,
  `registryAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` datetime NOT NULL,
  `phone` varchar(100) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE if not exists `voucher` (
  `id` varchar(50) PRIMARY KEY,
  `name` varchar(100) NOT NULL,
  `sale_percent` int NOT NULL,
  `max_price` int NOT NULL,
  `min_price_apply` int NOT NULL,
  `count` int NOT NULL,
  `expired` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE if not exists `own_voucher` (
  `voucher_id` varchar(50) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`voucher_id`, `user_id`),
  foreign key (`voucher_id`) references `voucher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (`user_id`) references `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE if not exists `shipping_method` (
  `id` int PRIMARY KEY auto_increment,
  `name` varchar(100) NOT NULL,
  `price` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE if not exists `payment` (
  `id` int auto_increment PRIMARY KEY,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE if not exists `order` (
  `id` int PRIMARY KEY auto_increment,
  `user_id` int NOT NULL,
  `voucher_id` varchar(50) NOT NULL,
  `payment_id` int NOT NULL,
  `shipping_id` int NOT NULL,
  `time_order` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `time_get` datetime NOT NULL,
  `status` varchar(50) NOT NULL check ("Confirm" or "Delivery" or "Success"),
  `sum_price` int(100) NOT NULL,
  `notetice` varchar(250) NOT NULL,
  foreign key (`voucher_id`) references `voucher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (`user_id`) references `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (`payment_id`) references `payment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (`shipping_id`) references `shipping_method`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE if not exists `order_detail` (
  `id` int PRIMARY KEY auto_increment,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `count` int NOT NULL,
  foreign key (`product_id`) references `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (`order_id`) references `order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE if not exists `review` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `user_id` int NOT NULL,
  `rating` int(10) NOT NULL,
  `image` varchar(100) NOT NULL,
  `content` varchar(500) NOT NULL,
  foreign key (`user_id`) references `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (`product_id`) references `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


create table if not exists `attribute` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `group` varchar(50) NOT NULL
);

create table if not exists `attribute_value` (
  `id` int not null auto_increment,
  `attribute_id` int(11) NOT NULL,
  `value` varchar(200) NOT NULL,
  `product_id` int not null,
  primary key(`id`),
  foreign key (`product_id`) references `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (`attribute_id`) references `attribute`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO `category` (`id`, `title`) VALUES
(1, 'CellPhone'),
(2, 'Laptop'),
(3, 'Tablet'),
(4, 'Watch');

INSERT INTO `product` (`id`, `category_id`,  `name`, `color`, `sale_percent`, `price`, `manufacturer`) VALUES
(1, 1, 'iPhone 13 128GB', 'Pink', 20, 24990000, 'Apple'),
(2, 1, 'iPhone 13 128GB', 'Black', 20, 24990000, 'Apple'),
(3, 1, 'iPhone 13 128GB', 'Green', 20, 24990000, 'Apple'),
(4, 1, 'iPhone 13 128GB', 'White', 20, 24990000, 'Apple'),
(5, 1, 'iPhone 13 128GB', 'Red', 20, 24990000, 'Apple'),
(6, 1, 'iPhone 13 128GB', 'Blue', 20, 24990000, 'Apple'),
(7, 1, 'iPhone 13 256GB', 'Pink', 20, 27990000, 'Apple'),
(8, 1, 'iPhone 13 256GB', 'Black', 20, 27990000, 'Apple'),
(9, 1, 'iPhone 13 256GB', 'Green', 20, 27990000, 'Apple'),
(10, 1, 'iPhone 13 256GB', 'White', 20, 27990000, 'Apple'),
(11, 1, 'iPhone 13 256GB', 'Red', 20, 27990000, 'Apple'),
(12, 1, 'iPhone 13 256GB', 'Blue', 20, 27990000, 'Apple'),
(13, 2, 'Apple MacBook Air M1 256GB 2020', 'White', 30, 28990000, 'Apple'),
(14, 2, 'Laptop HP Gaming Victus 15-FA0031DX 6503849', 'Black', 20, 22990000, 'Hp'),
(15, 2, 'Laptop Dell Inspiron 3511 5829BLK', 'Black', 10, 15990000, 'Dell'),
(16, 2, 'Laptop Asus Gaming Rog Strix G15 G513IH HN015W', 'Black', 20, 23990000, 'Asus'),
(17, 2, 'Laptop Lenovo Ideapad Gaming 3 15ARH7', 'Black', 20, 25490000, 'Lenevo'),
(18, 2, 'Laptop Lenovo Ideapad Gaming 3 15ARH7', 'Black', 20, 25490000, 'Lenevo'),
(19, 3, 'iPad 120 2021 WiFi 64GB', 'Silver', 20, 10990000, 'Apple'),
(20, 3, 'iPad Air 5 (2022) 64GB', 'Blue', 10, 16990000, 'Apple'),
(21, 3, 'Samsung Galaxy Tab S8 WIFI', 'Grey', 30, 17990000, 'Samsung'),
(22, 3, 'Samsung Galaxy Tab S8 Ultra 5G', 'Grey', 20, 30990000, 'Samsung'),
(23, 3, 'Xiaomi Pad 5 (6GB/256GB)', 'Grey', 10, 10490000, 'Xiaomi'),
(24, 3, 'Redmi Pad 3GB 64GB', 'Đen', 0, 6290000, 'Xiaomi'),
(25, 4, 'Đồng hồ thông minh Amazfit GTS 4 Mini', 'Black', 0, 2590000, 'Amazfit'),
(26, 4, 'Đồng hồ thông minh Amazfit GTS 4 Mini', 'White', 0, 2590000, 'Amazfit'),
(27, 4, 'Apple Watch SE 2022 40mm', 'Sliver', 15, 7490000, 'Apple'),
(28, 4, 'Samsung Galaxy S23 Ultra 256GB', 'Black', 20, 41990990, 'Samsung'),
(29, 4, 'Samsung Galaxy A34 5G 8GB 128GB', 'Black', 10, 8490000, 'Samsung');

INSERT INTO `attribute` (`id`, `name`, `group`) VALUES
(1, 'Ram capacity', 'Ram & storage'),
(2, 'Internal Storage', 'Ram & Storage'),
(3, 'Screen size', 'Screen'),
(4, 'Screen Technology', 'Screen'),
(5, 'Screen resolution', 'Screen'),
(6, 'Screen Features', 'Screen'),
(7, 'Scan frequency', 'Monitor'),
(8, 'Rear camera', 'Rear camera'),
(9, 'Record video', 'Rear camera'),
(10, 'Camera features', 'Rear camera'),
(11, 'Front camera', 'Front camera'),
(12, 'Pre-record video', 'Front camera'),
(13, 'Chipset', 'Processor & Graphics'),
(14, 'CPU Type', 'Processor & Graphics'),
(15, 'GPU', 'Processor & Graphics'),
(16, 'Battery', 'Battery & charging technology'),
(17, 'Charging technology', 'Battery & charging technology'),
(18, 'Charging port', 'Battery & charging technology'),
(19, 'SIM Card', 'Communication & Connectivity'),
(20, 'Operating system', 'Communication & connectivity'),
(21, 'NFC Technology', 'Communication & Connectivity'),
(22, 'Network Support', 'Communication & Connectivity'),
(23, 'Wi-Fi', 'Communication & Connectivity'),
(24, 'Bluetooth', 'Communication & Connectivity'),
(25, 'GPS', 'Communication & Connectivity'),
(26, 'Size', 'Design & Weight'),
(27, 'Weight', 'Design & Weight'),
(28, 'Back Material', 'Design & Weight'),
(29, 'Compatibility', 'Other Specs'),
(30, 'Water and dust resistance index', 'Other parameters'),
(31, 'Other utilities', 'Other parameters'),
(32, 'Screen model', 'Other parameters'),
(33, 'Fingerprint sensor', 'More widgets'),
(34, 'Sensor Types', 'Other Utilities'),
(35, 'Special Features', 'Other Add-ons'),
(36, 'Face Material', 'Design & Weight'),
(37, 'Image', 'Image');
