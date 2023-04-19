drop database `phone_store`;
create database if not exists `phone_store`;
use `phone_store`;


create table if not exists `category` (
  `id` int not null auto_increment,
  `title` varchar(100) not null,
  primary key(`id`)
);

create table if not exists `product` (
  `id` int PRIMARY KEY auto_increment,
  `code` varchar(20) not null UNIQUE,
  `category_id` int not null,
  `name` varchar(100) not null,
  `color` varchar(30) not null,
  `sale_percent` int not null default 0,
  `price` int not null,
  `manufacturer` varchar(100) not null,
  `html` varchar(10000),
  `image` varchar(200),
  foreign key (`category_id`) references `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE if not exists`user` (
  `id` int PRIMARY KEY auto_increment,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL UNIQUE,
  `phone` varchar(50) NOT NULL UNIQUE,
  `password` varchar(250) NOT NULL,
  `avatar` varchar(50),
  `passwordChangedAt` datetime not null,
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
  `notice` varchar(250) NOT NULL,
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
  `dateReview` datetime NOT NULL,
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


INSERT INTO `product` (`id`, `code`, `category_id`, `name`, `color`, `sale_percent`, `price`, `manufacturer`, `html`, `image`) VALUES
(1, 'IP13128P', 1, 'iPhone 13 128GB', 'Pink', 20, 24990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg'),
(2, 'IP13128B', 1, 'iPhone 13 128GB', 'Black', 20, 24990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/e/_en_2_5.jpg'),
(3, 'IP13128G', 1, 'iPhone 13 128GB', 'Green', 20, 24990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/x/n/xnnah_kas_3.png'),
(4, 'IP13128W', 1, 'iPhone 13 128GB', 'White', 20, 24990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/r/tr_ng_5.jpg'),
(5, 'IP13128R', 1, 'iPhone 13 128GB', 'Red', 20, 24990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/f/i/file_3_10.jpg'),
(6, 'IP13128FB', 1, 'iPhone 13 128GB', 'Blue', 20, 24990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/_/d_ng_3.jpg'),
(7, 'IP13256P', 1, 'iPhone 13 256GB', 'Pink', 20, 27990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/_/d_ng_3.jpg'),
(8, 'IP13256B', 1, 'iPhone 13 256GB', 'Black', 20, 27990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/e/_en_2_5.jpg'),
(9, 'IP13256G', 1, 'iPhone 13 256GB', 'Green', 20, 27990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/x/n/xnnah_kas_3.png'),
(10, 'IP13256W', 1, 'iPhone 13 256GB', 'White', 20, 27990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/r/tr_ng_5.jpg'),
(11, 'IP13256R', 1, 'iPhone 13 256GB', 'Red', 20, 27990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/f/i/file_3_10.jpg'),
(12, 'IP1325F6B', 1, 'iPhone 13 256GB', 'Blue', 20, 27990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/_/d_ng_3.jpg'),
(13, 'MACAM1', 2, 'Apple MacBook Air M1 256GB 2020', 'White', 30, 28990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png'),
(14, 'MADSAM1', 2, 'Laptop HP Gaming Victus 15-FA0031DX 6503849', 'Black', 20, 22990000, 'Hp', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/l/a/laptop-hp-gaming-victus-15-fa0031dx-6503849-6.jpg'),
(15, 'GERTDS', 2, 'Laptop Dell Inspiron 3511 5829BLK', 'Black', 10, 15990000, 'Dell', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/e/text_ng_n_3__1_71.png'),
(16, 'DASDEWE', 2, 'Laptop Asus Gaming Rog Strix G15 G513IH HN015W', 'Black', 20, 23990000, 'Asus', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/4/h/4h43.png'),
(17, 'REWASDD', 2, 'Laptop Lenovo Ideapad Gaming 3 15ARH7', 'Black', 20, 25490000, 'Lenevo', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/h/1h47.png'),
(18, 'HFAJS', 2, 'Laptop Lenovo Ideapad Gaming 3 15ARH7', 'Black', 20, 25490000, 'Lenevo', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/h/1h47.png'),
(19, 'FDFDSF', 3, 'iPad 120 2021 WiFi 64GB', 'Silver', 20, 10990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/ipad-10-2-2021-2_6_1.png'),
(20, 'JKH45AS', 3, 'iPad Air 5 (2022) 64GB', 'Blue', 10, 16990000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/9/_/9_10_71_1_1.jpg'),
(21, 'JGFNH55', 3, 'Samsung Galaxy Tab S8 WIFI', 'Grey', 30, 17990000, 'Samsung', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/a/tab_s8_2.jpg'),
(22, 'ASD342F', 3, 'Samsung Galaxy Tab S8 Ultra 5G', 'Grey', 20, 30990000, 'Samsung', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/a/tab_s8_ultra.jpg'),
(23, 'LKJHFNS', 3, 'Xiaomi Pad 5 (6GB/256GB)', 'Grey', 10, 10490000, 'Xiaomi', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/1/o1cn01ijop4f1slqk1fdzto_-2201438992231_1628774717_2.jpg'),
(24, 'FKRU34F', 3, 'Redmi Pad 3GB 64GB', 'Đen', 0, 6290000, 'Xiaomi', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/w/1w2kuj.jpg'),
(25, 'SFASDD1', 4, 'Đồng hồ thông minh Amazfit GTS 4 Mini', 'Black', 0, 2590000, 'Amazfit', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gts-2.jpg'),
(26, 'FGFERR5', 4, 'Đồng hồ thông minh Amazfit GTS 4 Mini', 'White', 0, 2590000, 'Amazfit', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gts-2.jpg'),
(27, 'FDFSFTF', 4, 'Apple Watch SE 2022 40mm', 'Sliver', 15, 7490000, 'Apple', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch-se.jpg'),
(28, 'MVNGJFY', 4, 'Samsung Galaxy S23 Ultra 256GB', 'Black', 20, 41990990, 'Samsung', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/2/s23-ultra-tim.png'),
(29, 'PSKRUTT', 4, 'Samsung Galaxy A34 5G 8GB 128GB', 'Black', 10, 8490000, 'Samsung', '', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-a346_galaxy_a34_5g_awesome_silver_front.png'),
(36, 'HFHRY43', 1, 'Xiaomi Redmi Note 11 128GB', 'Black', 10, 4990000, 'Xiaomi', 'HFHRY43.html', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/8/0/800x800-640x640-5.png');

INSERT INTO `user` (`id`, `name`, `email`, `phone`, `password`, `avatar`, `passwordChangedAt`, `registryAt`, `last_login`, `address`) VALUES
(5, 'Lê Quốc Trạng', 'lequoctrang512@gmail.com', '0399609015', '$2a$12$GxjaXGG3ReO7/90xx4QRLOwbV89esVcQdT/4CPApxUoIIRhmDKDlO', '5.jpg', '2023-03-30 02:13:34', '2023-03-30 02:13:34', '2023-04-01 23:58:00', 'Ktx Khu A, Thủ Đức, Tp Hồ Chí Minh');

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
(37, 'Pictures', 'Pictures'),
(38, 'Graphic Card Type', 'Processor & Graphics'),
(39, 'Hard Drive', 'Ram & Storage'),
(40, 'RAM Type', 'Ram & Storage'),
(41, 'Material', 'Other'),
(42, 'Touchscreen', 'Screen'),
(43, 'Panel Quality', 'Screen'),
(44, 'Audio Technology', 'Audio Technology'),
(45, 'Memory card reader', 'Communication & connection'),
(47, 'Communication port', 'Specifications'),
(48, 'Headphone Jack 3.5', 'Communication & Connectivity'),
(49, 'Bracket Material', 'Design & Weight'),
(50, 'Water Resistant', 'Other Specs'),
(51, 'Health add-ons', 'Other parameters'),
(52, 'Battery life', 'Battery & charging technology'),
(53, 'Smart Features', 'Features'),
(54, 'Bezel Material', 'Face & Band Material'),
(55, 'String Material', 'Brace & Face Material');

INSERT INTO `attribute_value` (`id`, `attribute_id`, `value`, `product_id`) VALUES
(1, 1, '6 GB', 1),
(2, 2, '128 GB', 1),
(3, 3, '6.9 inches', 1),
(4, 8, 'Wide angle camera: 12MP, f/1.6\nUltra wide angle camera: 12MP, ƒ/2.4', 1),
(5, 5, '2532 x 1170 pixels', 1),
(6, 6, 'Super Retina XDR display, OLED, 460 ppi, HDR display, True Tone Wide color technology (P3), Haptic Touch, Anti-fingerprint oleophobic coating', 1),
(7, 7, '60Hz', 1),
(13, 9, '4K 2160p@30fps\r\nFullHD 1080p@30fps\r\nFullHD 1080p@60fps\r\nHD 720p@30fps', 1),
(14, 10, 'Touch Focus\r\nHDR\r\nFace Detection\r\nSlow Motion)\r\nPanoramic (Panorama)\r\nAuto Focus (AF)\r\ nRemove fonts\r\nStickers (AR Stickers)\r\nFace Recognition', 1),
(15, 11, '12MP, f/2.2', 1),
(16, 13, 'Apple A15', 1),
(17, 16, '3,240mAh', 1),
(18, 17, '20W Fast Charge, Wireless Charger, 15W Wireless Reverse Charge, Fast Battery Charge, Battery Saver', 1),
(19, 18, 'Lightning', 1),
(20, 20, 'iOS 15', 1),
(21, 48, 'No', 1),
(22, 21, 'Yes', 1),
(23, 22, '5G', 1),
(24, 23, 'Wi‑Fi 6 (802.11ax)', 1),
(25, 24, 'v5.0', 1),
(26, 15, 'GPS, GLONASS, Galileo, QZSS, and BeiDou', 1),
(27, 26, '146.7 x 71.5 x 7.65mm', 1),
(28, 27, '174g', 1),
(29, 36, 'Glass', 1),
(30, 49, 'Metal', 1),
(31, 32, 'Rabbit ears', 1),
(32, 35, '5G Support, Wireless Charging, Face Detection, Water Resistant, Dust Resistant', 1),
(33, 37, '1_43534534.png', 1);

INSERT INTO `review` (`id`, `product_id`, `user_id`, `rating`, `image`, `content`, `dateReview`) VALUES (NULL, '1', '1', '5', '', 'Sản phẩm này còn hàng không ạ?', '2023-04-19 18:29:27.000000');