-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2023 at 02:31 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phone_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` varchar(100) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone_number` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `address_part1` varchar(100) NOT NULL,
  `address_part2` varchar(100) NOT NULL,
  `address_part3` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `laptop`
--

CREATE TABLE `laptop` (
  `id` varchar(100) NOT NULL,
  `card` varchar(200) NOT NULL,
  `bo_nho_dem` varchar(100) NOT NULL,
  `cong_giao_tiep` varchar(200) NOT NULL,
  `camera` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `laptop`
--

INSERT INTO `laptop` (`id`, `card`, `bo_nho_dem`, `cong_giao_tiep`, `camera`) VALUES
('HN015W', 'Geforce GTX 1650 4GB', '4Mb', '1x Type C USB 3.2 Gen 1 (Power Delivery/Display Port) 3x USB 3.2 Gen 1 Type-A 1x 3.5mm Combo Audio Jack 1x HDMI 2.0b', '1080 FHD'),
('HQ264T', 'NVIDIA GeForce RTX 3070 8GB', '16Mb', '1x Type C USB 3.2 Gen 1 (Power Delivery/Display Port) 3x USB 3.2 Gen 1 Type-A 1x 3.5mm Combo Audio Jack 1x HDMI 2.0b', '1080 FHD');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` varchar(100) NOT NULL,
  `customer_id` varchar(100) NOT NULL,
  `voucher_id` varchar(100) NOT NULL,
  `payment_id` varchar(100) NOT NULL,
  `shipping_id` varchar(100) NOT NULL,
  `time_order` datetime NOT NULL,
  `time_get` datetime NOT NULL,
  `status` varchar(100) NOT NULL,
  `tong_tien` int(100) NOT NULL,
  `ghi_chu` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `detail_id` varchar(100) NOT NULL,
  `order_id` varchar(100) NOT NULL,
  `product_id` varchar(100) NOT NULL,
  `count` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `own_voucher`
--

CREATE TABLE `own_voucher` (
  `voucher_id` varchar(100) NOT NULL,
  `customer_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `phone`
--

CREATE TABLE `phone` (
  `id` varchar(100) NOT NULL,
  `chat_lieu` varchar(200) NOT NULL,
  `camera_truoc` varchar(200) NOT NULL,
  `camera_sau` varchar(200) NOT NULL,
  `sim` varchar(50) NOT NULL DEFAULT 'None',
  `mang_di_dong` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phone`
--

INSERT INTO `phone` (`id`, `chat_lieu`, `camera_truoc`, `camera_sau`, `sim`, `mang_di_dong`) VALUES
('SMAP14', 'metal', 'Wide-angle camera: 8MP', 'Wide-angle camera: 12MP\r\nSuper wide-angle camera: 12MP', '1', '5G'),
('SMSSURT', 'aluminum', '12MP F2.2 (Dual Pixel AF)', 'Super wide: 12MP F2.2 (Dual Pixel AF)\r\nMain: 200MP F1.7 OIS ±3° (Super Quad Pixel AF)\r\nTele 1: 10MP F4.9 (10X, Dual Pixel AF) OIS,\r\nTele 2: 10MP F2.4 (3X, Dual Pixel AF) OIS Spatial zoom 100X', '2', '5G');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` varchar(100) NOT NULL,
  `name` varchar(200) NOT NULL,
  `cpu` varchar(100) NOT NULL,
  `ram` varchar(100) NOT NULL,
  `rom` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `hang_sx` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` int(11) NOT NULL,
  `discount_percent` int(11) NOT NULL DEFAULT 0,
  `hdh` varchar(50) NOT NULL,
  `type_hdh` varchar(50) NOT NULL,
  `size_screen` varchar(100) NOT NULL,
  `do_phan_giai` varchar(100) NOT NULL,
  `tech_screen` varchar(200) NOT NULL,
  `tan_so_quet` varchar(100) NOT NULL,
  `kich_thuoc_tb` varchar(100) NOT NULL,
  `weight` varchar(50) NOT NULL,
  `dung_luong_pin` varchar(50) NOT NULL,
  `cong_suat_sac` varchar(100) NOT NULL,
  `bluetooth` varchar(100) DEFAULT NULL,
  `wifi` varchar(100) NOT NULL,
  `bao_hanh` varchar(50) NOT NULL DEFAULT 'None'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `cpu`, `ram`, `rom`, `color`, `hang_sx`, `description`, `price`, `discount_percent`, `hdh`, `type_hdh`, `size_screen`, `do_phan_giai`, `tech_screen`, `tan_so_quet`, `kich_thuoc_tb`, `weight`, `dung_luong_pin`, `cong_suat_sac`, `bluetooth`, `wifi`, `bao_hanh`) VALUES
('HN015W', 'Laptop Asus Gaming Rog Strix G15 G513IH', 'AMD Ryzen 7 4800H', '8GB', '512GB SSD NVMe M.2 PCIe Gen 3 x 4', 'Black', 'Asus', 'Asus ROG Strix G15 G513IH-HN015TW is a powerful configuration laptop that can meet most of the games on the market today. Even when operating for many hours, the device is still quite cool due to the advanced heat dissipation system. If you are a gamer or user who wants to find a machine with high configuration, do not ignore this quality Asus laptop.', 23990000, 12, 'Windows 11 SL 64 Bit', 'Window', '15.6 inches', '1920 x 1080 pixels (FullHD)', 'IPS Panel', '144 Hz', '35.4 x 25.9 x 2.26 ~ 2.72 cm (W x D x H)', '2.1 kg', '3 Cell', '120Wh', '5.0', '6(Gig+)(802.11ax)', '3 year'),
('HQ264T', 'Laptop Asus Gaming Rog Strix G15 G513IH', 'AMD Ryzen 7 4800H', '16GB (8x2) DDR4 3200MHz (2 khe, hỗ trợ tối đa 32GB SDRAM)', '512GB SSD PCIE G3X4 (Còn trống 1 khe SSD M.2 PCIE)', 'Black', 'Asus', 'Continuing to be a product in the Asus gaming laptop segment, Asus Rog Strix G15 G513QR-HQ264T is a laptop model for gamers with a unique design and outstanding performance.', 48990000, 20, 'Windows 11 SL 64 Bit', 'Window', '15.6 inches', '1920 x 1080 pixels (FullHD)', '16:9, IPS Non-Glare, NanoEdge, 100% sRGB, 300nits, 300Hz/3ms, Adaptive-Sync', '144 Hz', '35.4 x 25.9 x 2.26 ~ 2.72 cm (W x D x H)', '2.1 kg', '3 Cell', '120Wh', '5.0', '6(Gig+)(802.11ax)', '3 year'),
('SMAP14', 'iPhone 14', 'Apple A15 Bionic', '5 GB', '128GB', 'Yellow', 'Apple', 'As expected, on the night of September 8, 2022 Apple officially introduced the new iPhone sesier to consumers. The newly launched iPhone 14 model retains the price compared to the previous iPhone 13 but still has many different upgrades. The phone has a 6.1-inch Retina XDR OLED screen with outstanding brightness of up to 1200 nits. The device will also be equipped with dual 12 MP rear cameras and large pixel sensors, reaching 1.9 microns to help improve low-light shooting. The new iPhone 14 model also carries a 5-core Apple A15 Bionic chip that delivers outstanding performance.', 24990000, 10, 'IOS', 'IOS 16', '6.1 inches\r\n', '1440 x 3088 pixels (QHD+)', 'OLED', 'Scan frequency 60Hz', '163.4 x 78.1 x 8.9 mm', '234g', '3,279mAh', 'Fast Charge 20W', '5.3, A2DP, LE', 'Wi-Fi MIMO, Dual-band (2.4 GHz/5 GHz), Wi-Fi 802.11 a/b/g/n/ac/ax, Wi-Fi hotspot', '2 year'),
('SMSSURT', 'Samsung Galaxy S23', 'Snapdragon 8 Gen 2 (4 nm)', '8 GB', '256GB', 'White', 'Samsung', 'Samsung Galaxy S23 Ultra is Samsung\'s high-end phone launched in early 2023. This new Samsung S23 series phone has an impressive 200MP camera with a luxurious square frame. The device configuration is also a highlight with the powerful Snapdragon 8 Gen 2 chip, 8GB RAM memory for outstanding processing performance.', 31990000, 10, 'Android', 'Android 14.0.1', '6.8 inches', '1440 x 3088 pixels (QHD+)', 'Dynamic AMOLED 2X', '120Hz, HDR10+, 1750 nits, Gorilla Glass Victus 2', '163.4 x 78.1 x 8.9 mm', '234g', '5.000mAh', 'Wired charging: 45W wired Wireless Charging: 15W (Qi/PMA) Wireless battery sharing', '5.3, A2DP, LE', 'Wi-Fi 802.11 a/b/g/n/ac/6e, tri-band, Wi-Fi Direct', '2 year');

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `product_id` varchar(100) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `product_id` varchar(100) NOT NULL,
  `customer_id` varchar(100) NOT NULL,
  `rating` int(10) NOT NULL,
  `image` varchar(100) NOT NULL,
  `content` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shipping_method`
--

CREATE TABLE `shipping_method` (
  `shipping_id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `cost` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shipping_method`
--

INSERT INTO `shipping_method` (`shipping_id`, `name`, `cost`) VALUES
('1', 'Grab', 50000),
('2', 'Be', 45000);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `user_id` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tablet`
--

CREATE TABLE `tablet` (
  `id` varchar(100) NOT NULL,
  `chat_lieu` varchar(200) NOT NULL,
  `camera_truoc` varchar(200) NOT NULL,
  `camera_sau` varchar(200) NOT NULL,
  `sim` varchar(50) NOT NULL,
  `mang_di_dong` varchar(50) NOT NULL DEFAULT 'None'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `voucher`
--

CREATE TABLE `voucher` (
  `voucher_id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `sale_percent` varchar(50) NOT NULL,
  `expired` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `watch`
--

CREATE TABLE `watch` (
  `id` varchar(100) NOT NULL,
  `sim` varchar(100) NOT NULL,
  `camera` varchar(100) NOT NULL,
  `cam_bien` varchar(200) NOT NULL,
  `tien_ich` varchar(200) NOT NULL,
  `mang_di_dong` varchar(50) NOT NULL,
  `chat_lieu_day` varchar(100) NOT NULL,
  `chat_lieu_dh` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `laptop`
--
ALTER TABLE `laptop`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `voucher_id` (`voucher_id`),
  ADD KEY `payment_id` (`payment_id`),
  ADD KEY `shipping_id` (`shipping_id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`detail_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `own_voucher`
--
ALTER TABLE `own_voucher`
  ADD PRIMARY KEY (`voucher_id`,`customer_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `voucher_id` (`voucher_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `phone`
--
ALTER TABLE `phone`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`product_id`,`image`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`product_id`,`customer_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `shipping_method`
--
ALTER TABLE `shipping_method`
  ADD PRIMARY KEY (`shipping_id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `tablet`
--
ALTER TABLE `tablet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `voucher`
--
ALTER TABLE `voucher`
  ADD PRIMARY KEY (`voucher_id`);

--
-- Indexes for table `watch`
--
ALTER TABLE `watch`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `laptop`
--
ALTER TABLE `laptop`
  ADD CONSTRAINT `laptop_ibfk_1` FOREIGN KEY (`id`) REFERENCES `product` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`voucher_id`) REFERENCES `voucher` (`voucher_id`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`payment_id`),
  ADD CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`shipping_id`) REFERENCES `shipping_method` (`shipping_id`);

--
-- Constraints for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `own_voucher`
--
ALTER TABLE `own_voucher`
  ADD CONSTRAINT `own_voucher_ibfk_1` FOREIGN KEY (`voucher_id`) REFERENCES `voucher` (`voucher_id`),
  ADD CONSTRAINT `own_voucher_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`);

--
-- Constraints for table `phone`
--
ALTER TABLE `phone`
  ADD CONSTRAINT `phone_ibfk_1` FOREIGN KEY (`id`) REFERENCES `product` (`id`);

--
-- Constraints for table `product_image`
--
ALTER TABLE `product_image`
  ADD CONSTRAINT `product_image_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`);

--
-- Constraints for table `tablet`
--
ALTER TABLE `tablet`
  ADD CONSTRAINT `tablet_ibfk_1` FOREIGN KEY (`id`) REFERENCES `product` (`id`);

--
-- Constraints for table `watch`
--
ALTER TABLE `watch`
  ADD CONSTRAINT `watch_ibfk_1` FOREIGN KEY (`id`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
