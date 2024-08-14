-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th8 13, 2024 lúc 07:06 AM
-- Phiên bản máy phục vụ: 8.0.30
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `duannode`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accounts`
--

CREATE TABLE `accounts` (
  `id` int NOT NULL,
  `full_name_account` varchar(255) DEFAULT NULL,
  `pass_account` varchar(255) DEFAULT NULL,
  `email_account` varchar(255) DEFAULT NULL,
  `address_account` varchar(255) DEFAULT NULL,
  `tel_account` varchar(255) DEFAULT NULL,
  `role_account` int DEFAULT NULL,
  `avatar_account` varchar(255) DEFAULT NULL,
  `status_account` int DEFAULT NULL,
  `online` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `accounts`
--

INSERT INTO `accounts` (`id`, `full_name_account`, `pass_account`, `email_account`, `address_account`, `tel_account`, `role_account`, `avatar_account`, `status_account`, `online`, `createdAt`, `updatedAt`) VALUES
(18, 'Quốc Tình Nguyễn', '$2a$10$YTl1nDnT3PL10.BBNFtx1ejxmGZXV9YgKqVFKaHDcGIc5hoqT.QJe', 'nguyentinh@gmail.com', 'XÃ yên Lâm huyện Yên Mô tỉnh Ninh Bình', '0862201004', 2, '1722831001670.jpg', 1, 0, '2024-07-22 08:35:28', '2024-08-12 03:35:37'),
(29, 'Nguyễn Quốc Tình', '$2a$10$egLiVAsQyUzgsyBBs6StJemW1VlZqjdXCpUUTHZ1ijx9vaTRJbHhe', 'nguyentinh140321@gmail.com', 'YÊn Lâm yên mô Ninh Bình', '0862201004', 1, '1723427704071.jpg', 1, 0, '2024-08-12 01:55:04', '2024-08-12 01:55:04');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name_category` varchar(255) DEFAULT NULL,
  `status_category` int DEFAULT NULL,
  `image_category` varchar(255) DEFAULT NULL,
  `description_category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name_category`, `status_category`, `image_category`, `description_category`, `createdAt`, `updatedAt`) VALUES
(1, 'Nike', 1, 'https://loremflickr.com/640/480?lock=7649953146994688', 'Stone12', '2024-07-12 07:45:33', '2024-08-12 03:46:05'),
(2, 'Jordan', 1, 'https://picsum.photos/seed/MR7z0Nmf/640/480', 'Vincent.Hodkiewicz47', '2024-07-12 07:45:33', '2024-08-09 08:45:00'),
(3, 'MLB', 1, 'https://loremflickr.com/640/480?lock=6237146958528512', 'Gerry.Braun78', '2024-07-12 07:45:33', '2024-07-12 07:45:33');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `classificationorders`
--

CREATE TABLE `classificationorders` (
  `id` int NOT NULL,
  `id_user` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `code_status` int DEFAULT NULL,
  `id_variants` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `code_oders` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `classificationorders`
--

INSERT INTO `classificationorders` (`id`, `id_user`, `quantity`, `code_status`, `id_variants`, `createdAt`, `updatedAt`, `code_oders`) VALUES
(117, 18, 1, 7, 707, '2024-08-09 04:17:36', '2024-08-12 03:47:43', '1723177065382'),
(118, 18, 2, 7, 705, '2024-08-09 04:17:40', '2024-08-12 03:47:43', '1723177065382'),
(119, 18, 3, 7, 707, '2024-08-09 07:03:28', '2024-08-12 03:49:42', '1723187013136'),
(120, 18, 1, 5, 705, '2024-08-12 03:46:26', '2024-08-12 03:48:57', '1723434430612'),
(121, 18, 10, 5, 701, '2024-08-12 03:46:54', '2024-08-12 03:48:57', '1723434430612'),
(122, 18, 1, 5, 705, '2024-08-12 03:48:07', '2024-08-12 03:49:03', '1723434504829'),
(123, 18, 1, 3, 699, '2024-08-12 03:50:45', '2024-08-12 03:51:41', '1723434652328');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `colors`
--

CREATE TABLE `colors` (
  `id` int NOT NULL,
  `name_color` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `colors`
--

INSERT INTO `colors` (`id`, `name_color`, `createdAt`, `updatedAt`) VALUES
(1, 'BLACK', '2024-07-12 07:45:33', '2024-07-12 07:45:33'),
(2, 'WHITE', '2024-07-12 07:45:33', '2024-07-12 07:45:33'),
(3, 'GREY', '2024-07-12 07:45:33', '2024-07-12 07:45:33');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contacts`
--

CREATE TABLE `contacts` (
  `id` int NOT NULL,
  `content_contact` varchar(255) DEFAULT NULL,
  `full_name_contact` varchar(255) DEFAULT NULL,
  `email_contact` varchar(255) DEFAULT NULL,
  `tel_contact` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `detailorders`
--

CREATE TABLE `detailorders` (
  `id` int NOT NULL,
  `full_name_user` varchar(255) DEFAULT NULL,
  `tel_user` varchar(255) DEFAULT NULL,
  `address_user` varchar(255) DEFAULT NULL,
  `price_total` int DEFAULT NULL,
  `payment_method` int DEFAULT NULL,
  `code_status` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `code_oders` varchar(225) NOT NULL,
  `id_user` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `detailorders`
--

INSERT INTO `detailorders` (`id`, `full_name_user`, `tel_user`, `address_user`, `price_total`, `payment_method`, `code_status`, `createdAt`, `updatedAt`, `code_oders`, `id_user`) VALUES
(57, 'Quốc Tình Nguyễn', '0862201004', 'XÃ yên Lâm huyện Yên Mô tỉnh Ninh Bình', 265500, 1, 7, '2024-12-15 04:17:45', '2024-08-12 03:47:43', '1723177065382', 18),
(58, 'Quốc Tình Nguyễn', '0862201004', 'XÃ yên Lâm huyện Yên Mô tỉnh Ninh Bình', 265500, 1, 6, '2024-08-14 07:03:33', '2024-08-12 03:49:42', '1723187013136', 18),
(59, 'Quốc Tình Nguyễn', '0862201004', 'XÃ yên Lâm huyện Yên Mô tỉnh Ninh Bình', 1026000, 1, 6, '2024-08-12 03:47:10', '2024-08-12 03:48:57', '1723434430612', 18),
(60, 'Quốc Tình Nguyễn', '0862201004', 'XÃ yên Lâm huyện Yên Mô tỉnh Ninh Bình', 88500, 1, 3, '2024-08-12 03:48:24', '2024-08-12 03:49:03', '1723434504829', 18),
(61, 'Quốc Tình Nguyễn', '0862201004', 'XÃ yên Lâm huyện Yên Mô tỉnh Ninh Bình', 93750, 2, 3, '2024-08-12 03:51:41', '2024-08-12 03:51:41', '1723434652328', 18);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `notifications`
--

CREATE TABLE `notifications` (
  `id` int NOT NULL,
  `image_notification` varchar(255) DEFAULT NULL,
  `header_notification` varchar(255) DEFAULT NULL,
  `content_notification` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name_product` varchar(255) DEFAULT NULL,
  `price_product` int DEFAULT NULL,
  `price_sale` int DEFAULT NULL,
  `rating_product` float DEFAULT NULL,
  `image_product` varchar(255) DEFAULT NULL,
  `description_product` varchar(10000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `view_product` int DEFAULT NULL,
  `id_category` int DEFAULT NULL,
  `status_product` int DEFAULT NULL,
  `code_product` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name_product`, `price_product`, `price_sale`, `rating_product`, `image_product`, `description_product`, `view_product`, `id_category`, `status_product`, `code_product`, `createdAt`, `updatedAt`) VALUES
(180, 'Jordan 4 Retro', 191000, 25, 5, '1721805314971.jpg', 'Originally released in 1989, the Jordan 4 Retro is an icon of the collaboration between functionality and style in the world of athletic footwear. Its distinctive design features cross-straps and ventilation holes on the shoe\'s upper, using premium leather and fabric for durability and comfort.\r\n\r\nThe shoe\'s sole is equipped with Air-Sole cushioning technology, which reduces shock and provides cushioned comfort for the feet.\r\n\r\nWith its strong style and versatile usability, this model is suitable for both athletic activities and social gatherings.', 1674, 1, 1, '1721805314991', '2024-07-24 07:15:14', '2024-08-09 03:06:30'),
(181, 'Jordan 6 Rings', 142000, 25, NULL, '1721805458501.jpg', 'The Jordan 6 Rings is a unique combination of 6 different Jordan shoe models that Michael Jordan wore during his NBA career. Its special design includes elements from the Jordan 6, Jordan 7, Jordan 8, Jordan 11, Jordan 12, and Jordan 13, creating a distinctive and powerful look.\r\n\r\nThe primary materials used are leather or fabric, with an Air-Sole technology sole optimized for comfort and durability.', 3219, 2, 1, '1721805458566', '2024-07-24 07:17:38', '2024-07-24 07:17:38'),
(182, 'Jordan Delta', 137000, 25, NULL, '1721805551361.jpg', 'The Jordan Delta perfectly blends fashion style and athletic shoe functionality. Designed with layers of mixed materials such as leather, mesh fabric, and synthetic overlays, the Jordan Delta offers superior comfort and durability.\r\n\r\nIts sole is engineered to provide optimal flexibility and support, making it suitable for dynamic sports activities and everyday wear', 1069, 2, 1, '1721805551437', '2024-07-24 07:19:11', '2024-07-24 07:19:11'),
(183, 'Jordan 1 Mid', 156000, 25, NULL, '1721805594072.jpg', 'Jordan 1 Mid: The Jordan 1 Mid is a modern take on the classic Air Jordan 1, featuring a mid-top silhouette. It retains the iconic Nike Swoosh and Air Jordan wings logo, offering a timeless look and feel.\r\n\r\nThis model is crafted from premium leather and synthetic materials, providing durability and comfort for everyday wear.\r\n\r\nWith its versatile design and heritage-inspired style, the Jordan 1 Mid is a popular choice among sneaker enthusiasts.', 3690, 2, 1, '1721805594131', '2024-07-24 07:19:54', '2024-07-24 07:19:54'),
(184, 'Jordan 3 Retro', 170000, 25, NULL, '1721805636234.jpg', 'Jordan 3 Retro: Originally released in 1988, the Jordan 3 Retro is known for its distinctive elephant print overlays and visible Air-Sole unit in the heel.\r\n\r\nDesigned by Tinker Hatfield, it features a mid-cut profile and perforations on the tongue for enhanced breathability.\r\n\r\nThe Jordan 3 Retro combines style and performance, making it a coveted collector\'s item among sneaker connoisseurs.', 2244, 2, 1, '1721805636300', '2024-07-24 07:20:36', '2024-07-24 07:20:36'),
(185, 'Jordan 5 Retro', 184000, 25, NULL, '1721805679491.jpg', 'Jordan 5 Retro: The Jordan 5 Retro debuted in 1990 and stands out with its fighter jet-inspired design elements.\r\n\r\nNotable features include a reflective tongue, lace lock system, and translucent outsole with visible Air-Sole unit in the heel.\r\n\r\nIt\'s crafted from a combination of leather and textile materials, offering a balance of durability and lightweight comfort.\r\n\r\n', 2148, 2, 1, '1721805679550', '2024-07-24 07:21:19', '2024-07-24 07:21:19'),
(186, 'Jordan 11 Retro', 110000, 25, NULL, '1721805721105.jpg', 'Jordan 11 Retro: The Jordan 11 Retro is famous for its patent leather mudguard and carbon fiber spring plate for responsive cushioning.\r\n\r\nReleased in 1995, it features a sleek, low-profile silhouette with a ballistic mesh upper for breathability.\r\n\r\nThe Jordan 11 Retro is revered for its luxurious look and performance-driven design, making it a staple in sneaker culture.', 3007, 2, 1, '1721805721140', '2024-07-24 07:22:01', '2024-07-24 07:22:01'),
(187, 'Jordan 13 Retro', 196000, 25, NULL, '1721805965045.jpg', 'Jordan 13 Retro: Inspired by Michael Jordan\'s \"Black Cat\" nickname, the Jordan 13 Retro features a unique panther paw-like outsole.\r\n\r\nReleased in 1997, it boasts a holographic bubble at the ankle for added style and a Phylon midsole with Zoom Air cushioning for responsive comfort.\r\n\r\nThe Jordan 13 Retro blends sleek aesthetics with innovative technology, ideal for both on-court performance and off-court style.', 1593, 2, 1, '1721805766119', '2024-07-24 07:22:46', '2024-07-24 07:26:05'),
(188, 'Jordan 7 Retro', 152000, 25, NULL, '1721805809337.jpg', 'Jordan 7 Retro: The Jordan 7 Retro debuted in 1992 with a bold and colorful design inspired by African tribal art.\r\n\r\nIt features a neoprene Dynamic-Fit inner sleeve and visible Air-Sole unit in the heel for cushioned support.\r\n\r\nThis model\'s multi-material upper and unique patterns reflect Jordan\'s global impact and commitment to innovation.', 3945, 2, 1, '1721805809415', '2024-07-24 07:23:29', '2024-07-24 07:23:29'),
(189, 'Jordan Spizike', 171000, 25, NULL, '1721805851549.jpg', 'ordan Spizike: The Jordan Spizike is a hybrid model that pays homage to Spike Lee and his Mars Blackmon character.\r\n\r\nCombining elements from the Jordan 3, 4, 5, 6, and 20, it features iconic details like elephant print and lace locks.\r\n\r\nThe Jordan Spizike is known for its storytelling design and cultural significance, representing a fusion of basketball and cinematic history.', 1947, 2, 1, '1721805851620', '2024-07-24 07:24:11', '2024-07-24 07:24:11'),
(190, 'MLB - Chunky Liner Sneakers', 199000, 25, NULL, '1721806222361.jpg', 'Premium leather material\r\nFashionable low-cut sports shoe design \r\nModern chunky high sole\r\nThe design is inspired by the MLB baseball association\r\nBaseball logo printed prominently on the outer cheek\r\nSoft lining, enhances foot shape\r\nModern color scheme easily coordinates with many outfits and accessories\r\nBrand origin: Korea', 2899, 3, 1, '1721806183357', '2024-07-24 07:29:43', '2024-07-24 07:30:22'),
(191, 'MLB - Chunky Runner Race low-cut unisex sneakers', 180000, 25, NULL, '1721806388684.jpg', 'Discover the perfect combination of modernity and retro 90s style through the Chunky Runner Race sneakers. Standing out with its signature chunky sole design embellished with youthful, unconventional silver lines, the shoes not only help you easily combine with many different outfits but also create unique combinations. impressive, will definitely be the ideal choice for those who are passionate about nostalgia but still want to exude a trendy, modern look..\r\n\r\nBrand: MLB\r\nMade in Korea\r\nGender: Unisex\r\nStyle: Low-cut sneakers\r\nColor: Silver\r\nMaterial: Synthetic Leather\r\nSole: EVA/ Synthetic Rubber', 1652, 3, 1, '1721806388706', '2024-07-24 07:33:08', '2024-07-24 07:33:08'),
(192, 'MLB - Chunky Liner Denim Classic Monogram low-top unisex sneakers', 105000, 25, NULL, '1721808437555.jpg', 'Chunky Liner Denim Classic Monogram sneakers are the perfect piece to start your day with a cool look. Uniquely designed with denim patches cut into baseball team logos on a striking large classic monogram pattern, the shoes are the ideal choice to accompany you all day long, from active to during the day comes personality at night.\r\n\r\nBrand: MLB\r\nMade in Korea\r\nGender: Unisex\r\nStyle: Low-cut sneakers\r\nColor: Gray, Navy\r\nMaterial: Synthetic Leather\r\nSole: EVA, Rubber', 1562, 3, 1, '1721806443742', '2024-07-24 07:34:03', '2024-07-24 08:07:17'),
(193, 'MLB - Chunky Liner Lux low-top unisex sneakers', 187000, 25, NULL, '1721806501843.jpg', 'Chunky Liner Denim Classic Monogram sneakers are the perfect piece to start your day with a cool look. Uniquely designed with denim patches cut into baseball team logos on a striking large classic monogram pattern, the shoes are the ideal choice to accompany you all day long, from active to during the day comes personality at night.\r\n\r\nBrand: MLB\r\nMade in Korea\r\nGender: Unisex\r\nStyle: Low-cut sneakers\r\nColor: Gray, Navy\r\nMaterial: Synthetic Leather\r\nSole: EVA, Rubber', 1857, 3, 1, '1721806501877', '2024-07-24 07:35:01', '2024-07-24 07:39:29'),
(194, 'MLB - Chunky Liner Hologram low-cut mid-soled unisex sneakers', 117000, 25, NULL, '1721806577268.jpg', 'On occasions when going out with friends, Chunky Liner Hologram sneakers from the MLB brand are indispensable as a companion. Finished with a form-fitting fit combined with dramatic color transitions and a sturdy sole, the Chunky Liner Hologram not only provides maximum support for every step you take, but also helps you create street fashion style. Dynamic street full of personality.\r\n \r\nBrand: MLB\r\nMade in Korea\r\nGender: Unisex\r\nStyle: Low-cut sneakers\r\nColor: Gray,...\r\nMaterial: Synthetic Leather\r\nSole: EV/Synthetic Rubber', 3599, 3, 1, '1721806577272', '2024-07-24 07:36:17', '2024-07-24 07:36:17'),
(195, 'MLB - Chunky Liner Mid Classic Monogram low-top unisex sneakers', 124000, 25, NULL, '1721806630939.jpg', 'Wearing a dynamic low-neck design combined with a modern chunky sole on a high-quality synthetic leather base to bring smoothness and comfort to every step, the Chunky Liner Mid Classic Monogram sneakers promise to bring Bringing you youthfulness and fashion, contributing to affirming your street fashion class. \r\n\r\nBrand: MLB\r\nMade in Korea\r\nGender: Unisex\r\nStyle: Low-cut sneakers\r\nColor: Black, Gray, Navy, Pink\r\nMaterial: Synthetic Leather\r\nSole: EVA, Rubber', 2425, 3, 1, '1721806630942', '2024-07-24 07:37:10', '2024-07-24 07:37:10'),
(196, 'MLB - Bigball Chunky Varsity low-top unisex sneakers', 168000, 25, NULL, '1721808386499.jpg', 'Break out your personality with Bigball Chunky Varsity sneakers to complete your dynamic street style! Featuring the MLB Varsity logo details combined with the signature chunky shape, this item promises to capture your heart at first sight..\r\n\r\nBrand: MLB\r\nMade in Korea\r\nGender: Unisex\r\nStyle: Low-cut sneakers\r\nColor: Black, Blue\r\nSynthetic leather material\r\nSole: EVA', 3328, 3, 1, '1721806680479', '2024-07-24 07:38:00', '2024-07-24 08:06:26'),
(197, 'MLB - Chunky Liner Lux low-top unisex sneakers', 169000, 25, NULL, '1721808406710.jpg', 'Wearing a dynamic low-neck design combined with a modern chunky sole on a high-quality synthetic leather base to bring smoothness and comfort to every step, the Chunky Liner Mid Classic Monogram sneakers promise to bring Bringing you youthfulness and fashion, contributing to affirming your street fashion class. \r\n\r\nBrand: MLB\r\nMade in Korea\r\nGender: Unisex\r\nStyle: Low-cut sneakers\r\nColor: Black, Gray, Navy\r\nMaterial: Synthetic Leather\r\nSole: EVA, Rubber', 2365, 3, 1, '1721806842673', '2024-07-24 07:40:42', '2024-07-26 04:25:13'),
(198, 'MLB - Chunky Liner low-top unisex sneakers', 141000, 25, NULL, '1721808328175.jpg', 'From sports shoe design to a must-have item in the wardrobe of crazy MLB fans, Chunky Liner is a \"bright\" accessory that conquers all fashionistas, an important accessory that MLB Crews cannot refuse because \"trendy\" style with extremely high heels\".\r\n \r\nBrand: MLB\r\nMade in Korea\r\nGender: Unisex\r\nStyle: Low-cut sneakers\r\nColor: Cream, Black, Pink, Green, Black/Yellow, Navy, Charcoal Gray, Lavender, Gold, Red, Beige,...\r\nMaterial: Synthetic Leather\r\nSole: EVA/synthetic rubber ', 3841, 3, 1, '1721806927315', '2024-07-24 07:42:07', '2024-07-24 08:05:28'),
(199, 'MLB - Bigball Chunky Pastel low-top unisex sneakers', 196000, 25, NULL, '1721806975974.jpg', 'Immerse yourself in sweetness and personality with Bigball Chunky Pastel sneakers from MLB. With a unique shape design but with sweet variations and delicate pastel colors, this item is ready to help you confidently express your personality and style..\r\n\r\nBrand: MLB\r\nMade in Korea\r\nGender: Unisex\r\nStyle: Low-cut sneakers\r\nColor: Pink, Purple, Sky Blue\r\nSynthetic leather material\r\nSole: EVA', 2110, 3, 1, '1721806975977', '2024-07-24 07:42:55', '2024-07-24 07:42:55'),
(201, ' MLB - Chunky Liner Mid Classic Monogram low-top unisex sneakers', 159000, 25, NULL, '1721807207084.jpg', 'Material: Synthetic Leather\r\nFashionable low-cut sports shoe design \r\nModern chunky high sole\r\nThin belt, combined with velcro straps\r\nPersonalized monogram design and baseball logo printed prominently on the outer cheek\r\nSoft lining, enhances foot shape\r\nModern color scheme easily coordinates with many outfits and accessories\r\nBrand origin: Korea', 1028, 3, 1, '1721807207088', '2024-07-24 07:46:47', '2024-07-24 07:46:47'),
(202, 'Nike Air Max 1 Essential', 109000, 25, NULL, '1721807461648.jpg', 'Meet the leader of the pack. Walking on clouds above the noise, the Air Max 1 blends timeless design with cushioned comfort. Sporting a Max Air unit and mixed materials, this icon hit the scene in \'87 and continues to be the soul of the franchise today.', 3810, 1, 1, '1721807461658', '2024-07-24 07:51:01', '2024-07-24 07:51:01'),
(203, 'Nike Air Max 1 Essential', 165000, 25, NULL, '1721808524419.jpg', 'Meet the leader of the pack. Walking on clouds above the noise, the Air Max 1 blends timeless design with cushioned comfort. Sporting a Max Air unit and mixed materials, this icon hit the scene in \'87 and continues to be the soul of the franchise today.', 2967, 1, 1, '1721807651617', '2024-07-24 07:54:11', '2024-07-24 08:08:44'),
(204, 'Air Jordan 1 Low SE', 198000, 25, NULL, '1721807709394.jpg', 'An AJ1 in easy-to-style neutrals? Game over. Smooth leather and soft suede add a premium feel. Plus, Nike Air cushioning helps keep every step comfortable. So, where are you going to take \'em?', 2405, 1, 1, '1721807709405', '2024-07-24 07:55:09', '2024-07-24 07:55:09'),
(205, 'Jordan Stadium 90', 196000, 25, NULL, '1721807912499.jpg', 'Comfort is king, but that doesn\'t mean you have to sacrifice style. Taking design inspiration from the AJ1 and AJ5, the Stadium 90 is ready for everyday wear. The upper is made from leather and airy woven, so you get both breathability and durability, and Nike Air cushioning in the sole keeps your every step light and cushioned.', 2125, 1, 1, '1721807912517', '2024-07-24 07:58:32', '2024-07-24 07:58:32'),
(206, 'Nike Zoom Vomero 5', 185000, 25, NULL, '1721807940713.jpg', 'Carve a new lane for yourself in the Zoom Vomero 5—your go-to for complexity, depth and classic early 2000s aesthetics. The richly layered design combines breathable and durable materials with the comfort of Air Zoom cushioning for one of the coolest sneakers of the season.', 2407, 1, 1, '1721807940728', '2024-07-24 07:59:00', '2024-07-24 07:59:00'),
(207, 'Air Jordan 1 Low', 136000, 25, NULL, '1721807968599.jpg', 'Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a classic look designed with premium materials like leather and suede, creating a look curated for the City of Light.', 1663, 1, 1, '1721807968665', '2024-07-24 07:59:28', '2024-07-24 07:59:28'),
(208, 'Nike Air Force 1 \'07', 125000, 25, NULL, '1721807994580.jpg', 'Comfortable, durable and timeless—it\'s number 1 for a reason. The \'80s construction pairs with classic colours for style that tracks whether you\'re on court or on the go.', 3091, 1, 1, '1721807994594', '2024-07-24 07:59:54', '2024-07-24 07:59:54'),
(209, 'Nike Dunk Low Retro', 118000, 25, NULL, '1721808464307.jpg', 'Recognising the Dunk\'s roots as the top-ranking university-team sneaker, the Be True To Your School Pack looks to the original ad campaign for inspiration. Colours represent top-flight universities, while crisp leather has the perfect amount of sheen to make \'em a hands-down win. So lace up and show off that varsity spirit. Are you game?', 3466, 1, 1, '1721808039778', '2024-07-24 08:00:39', '2024-07-24 08:07:44');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reviews`
--

CREATE TABLE `reviews` (
  `id` int NOT NULL,
  `id_user` int DEFAULT NULL,
  `content_review` varchar(255) DEFAULT NULL,
  `id_variants` int DEFAULT NULL,
  `star` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `reviews`
--

INSERT INTO `reviews` (`id`, `id_user`, `content_review`, `id_variants`, `star`, `createdAt`, `updatedAt`) VALUES
(1, 18, 'tốt', 446, 5, '2024-08-07 02:11:48', '2024-08-07 02:11:48'),
(2, 18, 'Tệ', 457, 1, '2024-08-07 02:11:48', '2024-08-07 02:11:48'),
(3, 18, 'Sản phẩm tốt', 701, 3, '2024-08-07 02:23:18', '2024-08-07 02:23:18'),
(4, 18, 'SẢN PHẨM QUÁ TỆ', 461, 1, '2024-08-07 02:23:18', '2024-08-07 02:23:18'),
(5, 18, 'TRên cả tuyệt vời', 686, 5, '2024-08-07 02:30:13', '2024-08-07 02:30:13'),
(6, 18, 'Quá tệ', 462, 1, '2024-08-07 02:30:13', '2024-08-07 02:30:13'),
(7, 18, 'Quá tuyệt vời', 686, 5, '2024-08-07 02:31:08', '2024-08-07 02:31:08'),
(8, 18, 'Quá tệ', 462, 5, '2024-08-07 02:31:08', '2024-08-07 02:31:08'),
(9, 18, 'Sản phẩm trên cả tuyệt vời', 450, 5, '2024-08-07 04:08:35', '2024-08-07 04:08:35'),
(10, 18, 'Quá tệ', 448, 2, '2024-08-07 04:09:53', '2024-08-07 04:09:53'),
(11, 18, 'Sản phẩm tốt ', 707, 5, '2024-08-12 03:47:43', '2024-08-12 03:47:43'),
(12, 18, 'Tuyệt vời', 705, 5, '2024-08-12 03:47:43', '2024-08-12 03:47:43'),
(13, 18, 'quá tệ', 707, 1, '2024-08-12 03:49:42', '2024-08-12 03:49:42');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240710020700-create-account.js'),
('20240710020702-create-category.js'),
('20240710020704-create-classification-order.js'),
('20240710020706-create-color.js'),
('20240710020708-create-comment.js'),
('20240710020710-create-contact.js'),
('20240710020711-create-detail-order.js'),
('20240710020713-create-notification.js'),
('20240710020715-create-product.js'),
('20240710020717-create-review.js'),
('20240710020719-create-size.js'),
('20240710020721-create-status-order.js'),
('20240710020723-create-variant.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sizes`
--

CREATE TABLE `sizes` (
  `id` int NOT NULL,
  `name_size` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `sizes`
--

INSERT INTO `sizes` (`id`, `name_size`, `createdAt`, `updatedAt`) VALUES
(1, '39', '2024-07-12 07:45:33', '2024-07-12 07:45:33'),
(2, '40', '2024-07-12 07:45:33', '2024-07-12 07:45:33'),
(3, '41', '2024-07-12 07:45:33', '2024-07-12 07:45:33');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `statusorders`
--

CREATE TABLE `statusorders` (
  `id` int NOT NULL,
  `status_order` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `statusorders`
--

INSERT INTO `statusorders` (`id`, `status_order`, `createdAt`, `updatedAt`) VALUES
(1, 'Trang yêu thích', '2024-07-22 01:57:52', '2024-07-22 01:57:52'),
(2, 'Trong giỏ hàng', '2024-07-22 01:57:52', '2024-07-22 01:57:52'),
(3, 'Đang xử lý', '2024-07-22 01:59:55', '2024-07-22 01:59:55'),
(4, 'Đang vận chuyển ', '2024-07-22 01:59:55', '2024-07-22 01:59:55'),
(5, 'Đã giao', '2024-07-22 01:59:55', '2024-07-22 01:59:55'),
(6, 'Đã hủy', '2024-07-22 01:59:55', '2024-07-22 01:59:55'),
(7, 'đã đánh giá\r\n', '2024-08-07 02:12:52', '2024-08-07 02:12:52');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `variants`
--

CREATE TABLE `variants` (
  `id` int NOT NULL,
  `id_product` int DEFAULT NULL,
  `id_color` int DEFAULT NULL,
  `id_size` int DEFAULT NULL,
  `quantity_variant` int DEFAULT NULL,
  `code_variant` varchar(255) DEFAULT NULL,
  `image_variant` varchar(255) DEFAULT NULL,
  `sales` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `variants`
--

INSERT INTO `variants` (`id`, `id_product`, `id_color`, `id_size`, `quantity_variant`, `code_variant`, `image_variant`, `sales`, `createdAt`, `updatedAt`) VALUES
(443, 180, 1, 1, 16, '1_1', '1721805314973.jpg', 5, '2024-07-24 07:15:15', '2024-08-09 03:06:30'),
(444, 180, 2, 1, 23, '2_1', '1721805314974.jpg', 0, '2024-07-24 07:15:15', '2024-08-09 03:06:30'),
(445, 180, 3, 1, 7, '3_1', '1721805314975.jpg', 0, '2024-07-24 07:15:15', '2024-08-09 03:06:30'),
(446, 180, 1, 3, 25, '1_3', '1721805314981.jpg', 0, '2024-07-24 07:15:15', '2024-08-09 03:06:30'),
(447, 180, 1, 2, 14, '1_2', '1721805314978.jpg', 0, '2024-07-24 07:15:15', '2024-08-09 03:06:30'),
(448, 180, 2, 2, 26, '2_2', '1721805314978.jpg', 0, '2024-07-24 07:15:15', '2024-08-09 03:06:30'),
(449, 180, 3, 2, 30, '3_2', '1721805314980.jpg', 0, '2024-07-24 07:15:15', '2024-08-09 03:06:30'),
(450, 180, 2, 3, 9, '2_3', '1721805314986.jpg', 0, '2024-07-24 07:15:15', '2024-08-09 03:06:30'),
(451, 180, 3, 3, 15, '3_3', '1721805314989.jpg', 0, '2024-07-24 07:15:15', '2024-08-09 03:06:30'),
(452, 181, 1, 1, 17, '1_1', '1721805458504.jpg', 0, '2024-07-24 07:17:38', '2024-07-24 07:17:38'),
(453, 181, 2, 1, 11, '2_1', '1721805458521.jpg', 0, '2024-07-24 07:17:38', '2024-07-24 07:17:38'),
(454, 181, 3, 1, 4, '3_1', '1721805458524.jpg', 0, '2024-07-24 07:17:38', '2024-07-24 07:17:38'),
(455, 181, 3, 2, 17, '3_2', '1721805458538.jpg', 0, '2024-07-24 07:17:38', '2024-07-24 07:17:38'),
(456, 181, 1, 2, 15, '1_2', '1721805458527.jpg', 0, '2024-07-24 07:17:38', '2024-07-24 07:17:38'),
(457, 181, 2, 2, 21, '2_2', '1721805458535.jpg', 0, '2024-07-24 07:17:38', '2024-07-24 07:17:38'),
(458, 181, 1, 3, 29, '1_3', '1721805458543.jpg', 0, '2024-07-24 07:17:38', '2024-07-24 07:17:38'),
(459, 181, 2, 3, 26, '2_3', NULL, 0, '2024-07-24 07:17:38', '2024-07-24 07:17:38'),
(460, 181, 3, 3, 9, '3_3', NULL, 0, '2024-07-24 07:17:38', '2024-07-24 07:17:38'),
(461, 182, 1, 1, 1, '1_1', '1721805551369.jpg', 0, '2024-07-24 07:19:11', '2024-07-24 07:19:11'),
(462, 182, 2, 1, 5, '2_1', '1721805551387.jpg', 0, '2024-07-24 07:19:11', '2024-07-24 07:19:11'),
(463, 182, 3, 1, 21, '3_1', '1721805551393.jpg', 0, '2024-07-24 07:19:11', '2024-07-24 07:19:11'),
(464, 182, 1, 3, 2, '1_3', '1721805551418.jpg', 0, '2024-07-24 07:19:11', '2024-07-24 07:19:11'),
(465, 182, 1, 2, 4, '1_2', '1721805551398.jpg', 0, '2024-07-24 07:19:11', '2024-07-24 07:19:11'),
(466, 182, 2, 2, 18, '2_2', '1721805551404.jpg', 0, '2024-07-24 07:19:11', '2024-07-24 07:19:11'),
(467, 182, 3, 2, 16, '3_2', '1721805551406.jpg', 0, '2024-07-24 07:19:11', '2024-07-24 07:19:11'),
(468, 182, 2, 3, 26, '2_3', '1721805551426.jpg', 0, '2024-07-24 07:19:11', '2024-07-24 07:19:11'),
(469, 182, 3, 3, 22, '3_3', NULL, 0, '2024-07-24 07:19:11', '2024-07-24 07:19:11'),
(470, 183, 1, 1, 3, '1_1', '1721805594084.jpg', 0, '2024-07-24 07:19:54', '2024-07-24 07:19:54'),
(471, 183, 2, 1, 8, '2_1', '1721805594096.jpg', 0, '2024-07-24 07:19:54', '2024-07-24 07:19:54'),
(472, 183, 3, 1, 3, '3_1', '1721805594100.jpg', 0, '2024-07-24 07:19:54', '2024-07-24 07:19:54'),
(473, 183, 1, 2, 20, '1_2', '1721805594104.jpg', 0, '2024-07-24 07:19:54', '2024-07-24 07:19:54'),
(474, 183, 2, 2, 2, '2_2', '1721805594111.jpg', 0, '2024-07-24 07:19:54', '2024-07-24 07:19:54'),
(475, 183, 3, 2, 10, '3_2', '1721805594115.jpg', 0, '2024-07-24 07:19:54', '2024-07-24 07:19:54'),
(476, 183, 1, 3, 12, '1_3', NULL, 0, '2024-07-24 07:19:54', '2024-07-24 07:19:54'),
(477, 183, 2, 3, 1, '2_3', '1721805594123.jpg', 0, '2024-07-24 07:19:54', '2024-07-24 07:19:54'),
(478, 183, 3, 3, 1, '3_3', NULL, 0, '2024-07-24 07:19:54', '2024-07-24 07:19:54'),
(479, 184, 1, 1, 0, '1_1', '1721805636244.jpg', 0, '2024-07-24 07:20:36', '2024-07-24 07:20:36'),
(480, 184, 2, 1, 27, '2_1', '1721805636262.jpg', 0, '2024-07-24 07:20:36', '2024-07-24 07:20:36'),
(481, 184, 3, 1, 17, '3_1', '1721805636266.jpg', 0, '2024-07-24 07:20:36', '2024-07-24 07:20:36'),
(482, 184, 1, 3, 4, '1_3', '1721805636285.jpg', 0, '2024-07-24 07:20:36', '2024-07-24 07:20:36'),
(483, 184, 1, 2, 27, '1_2', '1721805636271.jpg', 0, '2024-07-24 07:20:36', '2024-07-24 07:20:36'),
(484, 184, 2, 2, 5, '2_2', '1721805636274.jpg', 0, '2024-07-24 07:20:36', '2024-07-24 07:20:36'),
(485, 184, 3, 2, 3, '3_2', '1721805636278.jpg', 0, '2024-07-24 07:20:36', '2024-07-24 07:20:36'),
(486, 184, 2, 3, 28, '2_3', '1721805636294.jpg', 0, '2024-07-24 07:20:36', '2024-07-24 07:20:36'),
(487, 184, 3, 3, 14, '3_3', NULL, 0, '2024-07-24 07:20:36', '2024-07-24 07:20:36'),
(488, 185, 1, 1, 15, '1_1', '1721805679504.jpg', 0, '2024-07-24 07:21:19', '2024-07-24 07:21:19'),
(489, 185, 2, 1, 2, '2_1', '1721805679517.jpg', 0, '2024-07-24 07:21:19', '2024-07-24 07:21:19'),
(490, 185, 3, 2, 27, '3_2', '1721805679537.jpg', 0, '2024-07-24 07:21:19', '2024-07-24 07:21:19'),
(491, 185, 3, 1, 9, '3_1', '1721805679520.jpg', 0, '2024-07-24 07:21:19', '2024-07-24 07:21:19'),
(492, 185, 1, 2, 24, '1_2', '1721805679525.jpg', 0, '2024-07-24 07:21:19', '2024-07-24 07:21:19'),
(493, 185, 2, 2, 3, '2_2', '1721805679535.jpg', 0, '2024-07-24 07:21:19', '2024-07-24 07:21:19'),
(494, 185, 1, 3, 2, '1_3', '1721805679540.jpg', 0, '2024-07-24 07:21:19', '2024-07-24 07:21:19'),
(495, 185, 2, 3, 1, '2_3', '1721805679547.jpg', 0, '2024-07-24 07:21:19', '2024-07-24 07:21:19'),
(496, 185, 3, 3, 30, '3_3', NULL, 0, '2024-07-24 07:21:19', '2024-07-24 07:21:19'),
(497, 186, 1, 1, 25, '1_1', '1721805721106.jpg', 0, '2024-07-24 07:22:01', '2024-07-24 07:22:01'),
(498, 186, 2, 1, 5, '2_1', '1721805721107.jpg', 0, '2024-07-24 07:22:01', '2024-07-24 07:22:01'),
(499, 186, 3, 2, 10, '3_2', '1721805721119.jpg', 0, '2024-07-24 07:22:01', '2024-07-24 07:22:01'),
(500, 186, 3, 1, 6, '3_1', '1721805721108.jpg', 0, '2024-07-24 07:22:01', '2024-07-24 07:22:01'),
(501, 186, 1, 2, 28, '1_2', '1721805721109.jpg', 0, '2024-07-24 07:22:01', '2024-07-24 07:22:01'),
(502, 186, 2, 2, 5, '2_2', '1721805721111.jpg', 0, '2024-07-24 07:22:01', '2024-07-24 07:22:01'),
(503, 186, 1, 3, 0, '1_3', '1721805721122.jpg', 0, '2024-07-24 07:22:01', '2024-07-24 07:22:01'),
(504, 186, 2, 3, 16, '2_3', '1721805721133.jpg', 0, '2024-07-24 07:22:01', '2024-07-24 07:22:01'),
(505, 186, 3, 3, 17, '3_3', NULL, 0, '2024-07-24 07:22:01', '2024-07-24 07:22:01'),
(506, 187, 1, 1, 9, '1_1', '1721805766094.jpg', 0, '2024-07-24 07:22:46', '2024-07-24 07:26:05'),
(507, 187, 2, 1, 22, '2_1', '1721805766096.jpg', 0, '2024-07-24 07:22:46', '2024-07-24 07:26:05'),
(508, 187, 3, 1, 25, '3_1', '1721805766096.jpg', 0, '2024-07-24 07:22:46', '2024-07-24 07:26:05'),
(509, 187, 1, 2, 0, '1_2', '1721805766099.jpg', 0, '2024-07-24 07:22:46', '2024-07-24 07:26:05'),
(510, 187, 2, 2, 15, '2_2', '1721805766102.jpg', 0, '2024-07-24 07:22:46', '2024-07-24 07:26:05'),
(511, 187, 3, 2, 13, '3_2', '1721805766104.jpg', 0, '2024-07-24 07:22:46', '2024-07-24 07:26:05'),
(512, 187, 1, 3, 20, '1_3', '1721805766110.jpg', 0, '2024-07-24 07:22:46', '2024-07-24 07:26:05'),
(513, 187, 2, 3, 3, '2_3', '1721805766117.jpg', 0, '2024-07-24 07:22:46', '2024-07-24 07:26:05'),
(514, 187, 3, 3, 12, '3_3', NULL, 0, '2024-07-24 07:22:46', '2024-07-24 07:26:05'),
(515, 188, 1, 1, 22, '1_1', '1721805809344.jpg', 0, '2024-07-24 07:23:29', '2024-07-24 07:23:29'),
(516, 188, 2, 1, 15, '2_1', '1721805809368.jpg', 0, '2024-07-24 07:23:29', '2024-07-24 07:23:29'),
(517, 188, 3, 1, 7, '3_1', '1721805809376.jpg', 0, '2024-07-24 07:23:29', '2024-07-24 07:23:29'),
(518, 188, 1, 2, 22, '1_2', '1721805809391.jpg', 0, '2024-07-24 07:23:29', '2024-07-24 07:23:29'),
(519, 188, 2, 2, 29, '2_2', '1721805809396.jpg', 0, '2024-07-24 07:23:29', '2024-07-24 07:23:29'),
(520, 188, 1, 3, 18, '1_3', '1721805809408.jpg', 0, '2024-07-24 07:23:29', '2024-07-24 07:23:29'),
(521, 188, 3, 2, 2, '3_2', '1721805809404.jpg', 0, '2024-07-24 07:23:29', '2024-07-24 07:23:29'),
(522, 188, 2, 3, 19, '2_3', '1721805809412.jpg', 0, '2024-07-24 07:23:29', '2024-07-24 07:23:29'),
(523, 188, 3, 3, 27, '3_3', NULL, 0, '2024-07-24 07:23:29', '2024-07-24 07:23:29'),
(524, 189, 1, 1, 19, '1_1', '1721805851564.jpg', 0, '2024-07-24 07:24:11', '2024-07-24 07:24:11'),
(525, 189, 2, 1, 12, '2_1', '1721805851578.jpg', 0, '2024-07-24 07:24:11', '2024-07-24 07:24:11'),
(526, 189, 3, 2, 3, '3_2', '1721805851592.jpg', 0, '2024-07-24 07:24:11', '2024-07-24 07:24:11'),
(527, 189, 3, 1, 8, '3_1', '1721805851581.jpg', 0, '2024-07-24 07:24:11', '2024-07-24 07:24:11'),
(528, 189, 1, 2, 2, '1_2', '1721805851586.jpg', 0, '2024-07-24 07:24:11', '2024-07-24 07:24:11'),
(529, 189, 2, 2, 16, '2_2', '1721805851589.jpg', 0, '2024-07-24 07:24:11', '2024-07-24 07:24:11'),
(530, 189, 1, 3, 15, '1_3', '1721805851601.jpg', 0, '2024-07-24 07:24:11', '2024-07-24 07:24:11'),
(531, 189, 2, 3, 28, '2_3', '1721805851610.jpg', 0, '2024-07-24 07:24:11', '2024-07-24 07:24:11'),
(532, 189, 3, 3, 3, '3_3', NULL, 0, '2024-07-24 07:24:11', '2024-07-24 07:24:11'),
(533, 190, 1, 1, 21, '1_1', '1721806183339.jpg', 0, '2024-07-24 07:29:43', '2024-07-24 07:30:22'),
(534, 190, 2, 1, 8, '2_1', '1721806183340.jpg', 0, '2024-07-24 07:29:43', '2024-07-24 07:30:22'),
(535, 190, 3, 1, 7, '3_1', '1721806183341.jpg', 0, '2024-07-24 07:29:43', '2024-07-24 07:30:22'),
(536, 190, 1, 2, 9, '1_2', '1721806183346.jpg', 0, '2024-07-24 07:29:43', '2024-07-24 07:30:22'),
(537, 190, 2, 2, 24, '2_2', '1721806183349.jpg', 0, '2024-07-24 07:29:43', '2024-07-24 07:30:22'),
(538, 190, 3, 2, 2, '3_2', '1721806183353.jpg', 0, '2024-07-24 07:29:43', '2024-07-24 07:30:22'),
(539, 190, 1, 3, 1, '1_3', '1721806183355.jpg', 0, '2024-07-24 07:29:43', '2024-07-24 07:30:22'),
(540, 190, 2, 3, 28, '2_3', NULL, 0, '2024-07-24 07:29:43', '2024-07-24 07:30:22'),
(541, 190, 3, 3, 18, '3_3', NULL, 0, '2024-07-24 07:29:43', '2024-07-24 07:30:22'),
(542, 191, 1, 1, 5, '1_1', '1721806388689.jpg', 0, '2024-07-24 07:33:08', '2024-07-24 07:33:08'),
(543, 191, 2, 1, 29, '2_1', '1721806388694.jpg', 0, '2024-07-24 07:33:08', '2024-07-24 07:33:08'),
(544, 191, 3, 1, 13, '3_1', '1721806388695.jpg', 0, '2024-07-24 07:33:08', '2024-07-24 07:33:08'),
(545, 191, 1, 2, 7, '1_2', '1721806388697.jpg', 0, '2024-07-24 07:33:08', '2024-07-24 07:33:08'),
(546, 191, 2, 2, 28, '2_2', '1721806388701.jpg', 0, '2024-07-24 07:33:08', '2024-07-24 07:33:08'),
(547, 191, 3, 2, 27, '3_2', '1721806388704.jpg', 0, '2024-07-24 07:33:08', '2024-07-24 07:33:08'),
(548, 191, 1, 3, 22, '1_3', '1721806388705.jpg', 0, '2024-07-24 07:33:08', '2024-07-24 07:33:08'),
(549, 191, 2, 3, 29, '2_3', NULL, 0, '2024-07-24 07:33:08', '2024-07-24 07:33:08'),
(550, 191, 3, 3, 20, '3_3', NULL, 0, '2024-07-24 07:33:08', '2024-07-24 07:33:08'),
(551, 192, 1, 1, 13, '1_1', '1721806443712.jpg', 0, '2024-07-24 07:34:03', '2024-07-24 08:07:17'),
(552, 192, 2, 1, 2, '2_1', '1721806443722.jpg', 0, '2024-07-24 07:34:03', '2024-07-24 08:07:17'),
(553, 192, 3, 1, 4, '3_1', '1721806443734.jpg', 0, '2024-07-24 07:34:03', '2024-07-24 08:07:17'),
(554, 192, 1, 2, 13, '1_2', '1721806443735.jpg', 0, '2024-07-24 07:34:03', '2024-07-24 08:07:17'),
(555, 192, 2, 2, 22, '2_2', '1721806443736.jpg', 0, '2024-07-24 07:34:03', '2024-07-24 08:07:17'),
(556, 192, 3, 2, 11, '3_2', '1721806443739.jpg', 0, '2024-07-24 07:34:03', '2024-07-24 08:07:17'),
(557, 192, 1, 3, 17, '1_3', '1721806443741.jpg', 0, '2024-07-24 07:34:03', '2024-07-24 08:07:17'),
(558, 192, 2, 3, 26, '2_3', NULL, 0, '2024-07-24 07:34:03', '2024-07-24 08:07:17'),
(559, 192, 3, 3, 15, '3_3', NULL, 0, '2024-07-24 07:34:03', '2024-07-24 08:07:17'),
(560, 193, 1, 1, 0, '1_1', '1721806501852.jpg', 0, '2024-07-24 07:35:01', '2024-07-24 07:39:29'),
(561, 193, 2, 1, 15, '2_1', '1721806501866.jpg', 0, '2024-07-24 07:35:01', '2024-07-24 07:39:29'),
(562, 193, 3, 1, 13, '3_1', '1721806501868.jpg', 0, '2024-07-24 07:35:01', '2024-07-24 07:39:29'),
(563, 193, 1, 3, 21, '1_3', '1721806501876.jpg', 0, '2024-07-24 07:35:01', '2024-07-24 07:39:29'),
(564, 193, 1, 2, 6, '1_2', '1721806501871.jpg', 0, '2024-07-24 07:35:01', '2024-07-24 07:39:29'),
(565, 193, 2, 2, 25, '2_2', '1721806501873.jpg', 0, '2024-07-24 07:35:01', '2024-07-24 07:39:29'),
(566, 193, 3, 2, 20, '3_2', '1721806501875.jpg', 0, '2024-07-24 07:35:01', '2024-07-24 07:39:29'),
(567, 193, 2, 3, 25, '2_3', NULL, 0, '2024-07-24 07:35:01', '2024-07-24 07:39:29'),
(568, 193, 3, 3, 6, '3_3', NULL, 0, '2024-07-24 07:35:01', '2024-07-24 07:39:29'),
(569, 194, 1, 1, 14, '1_1', '1721806577269.jpg', 0, '2024-07-24 07:36:17', '2024-07-24 07:36:17'),
(570, 194, 2, 1, 21, '2_1', '1721806577269.jpg', 0, '2024-07-24 07:36:17', '2024-07-24 07:36:17'),
(571, 194, 3, 1, 5, '3_1', '1721806577269.jpg', 0, '2024-07-24 07:36:17', '2024-07-24 07:36:17'),
(572, 194, 3, 2, 20, '3_2', '1721806577271.jpg', 0, '2024-07-24 07:36:17', '2024-07-24 07:36:17'),
(573, 194, 1, 2, 24, '1_2', '1721806577269.jpg', 0, '2024-07-24 07:36:17', '2024-07-24 07:36:17'),
(574, 194, 2, 2, 2, '2_2', '1721806577270.jpg', 0, '2024-07-24 07:36:17', '2024-07-24 07:36:17'),
(575, 194, 1, 3, 26, '1_3', '1721806577271.jpg', 0, '2024-07-24 07:36:17', '2024-07-24 07:36:17'),
(576, 194, 2, 3, 4, '2_3', NULL, 0, '2024-07-24 07:36:17', '2024-07-24 07:36:17'),
(577, 194, 3, 3, 1, '3_3', NULL, 0, '2024-07-24 07:36:17', '2024-07-24 07:36:17'),
(578, 195, 1, 1, 24, '1_1', '1721806630940.jpg', 0, '2024-07-24 07:37:11', '2024-07-24 07:37:11'),
(579, 195, 2, 1, 28, '2_1', '1721806630940.jpg', 0, '2024-07-24 07:37:11', '2024-07-24 07:37:11'),
(580, 195, 3, 1, 9, '3_1', '1721806630940.jpg', 0, '2024-07-24 07:37:11', '2024-07-24 07:37:11'),
(581, 195, 3, 2, 21, '3_2', '1721806630941.jpg', 0, '2024-07-24 07:37:11', '2024-07-24 07:37:11'),
(582, 195, 1, 2, 16, '1_2', '1721806630940.jpg', 0, '2024-07-24 07:37:11', '2024-07-24 07:37:11'),
(583, 195, 2, 2, 17, '2_2', '1721806630941.jpg', 0, '2024-07-24 07:37:11', '2024-07-24 07:37:11'),
(584, 195, 1, 3, 8, '1_3', '1721806630941.jpg', 0, '2024-07-24 07:37:11', '2024-07-24 07:37:11'),
(585, 195, 2, 3, 18, '2_3', NULL, 0, '2024-07-24 07:37:11', '2024-07-24 07:37:11'),
(586, 195, 3, 3, 5, '3_3', NULL, 0, '2024-07-24 07:37:11', '2024-07-24 07:37:11'),
(587, 196, 1, 1, 0, '1_1', '1721806680475.jpg', 0, '2024-07-24 07:38:00', '2024-07-24 08:06:26'),
(588, 196, 2, 1, 17, '2_1', '1721806680475.jpg', 0, '2024-07-24 07:38:00', '2024-07-24 08:06:26'),
(589, 196, 3, 1, 26, '3_1', '1721806680476.jpg', 0, '2024-07-24 07:38:00', '2024-07-24 08:06:26'),
(590, 196, 3, 2, 18, '3_2', '1721806680477.jpg', 0, '2024-07-24 07:38:00', '2024-07-24 08:06:26'),
(591, 196, 1, 2, 13, '1_2', '1721806680477.jpg', 0, '2024-07-24 07:38:00', '2024-07-24 08:06:26'),
(592, 196, 2, 2, 10, '2_2', '1721806680477.jpg', 0, '2024-07-24 07:38:00', '2024-07-24 08:06:26'),
(593, 196, 1, 3, 12, '1_3', '1721806680478.jpg', 0, '2024-07-24 07:38:00', '2024-07-24 08:06:26'),
(594, 196, 2, 3, 29, '2_3', NULL, 0, '2024-07-24 07:38:00', '2024-07-24 08:06:26'),
(595, 196, 3, 3, 20, '3_3', NULL, 0, '2024-07-24 07:38:00', '2024-07-24 08:06:26'),
(596, 197, 1, 1, 12, '1_1', '1721806842667.jpg', 0, '2024-07-24 07:40:42', '2024-07-26 04:25:13'),
(597, 197, 2, 1, 26, '2_1', '1721806842668.jpg', 0, '2024-07-24 07:40:42', '2024-07-26 04:25:13'),
(598, 197, 3, 1, 6, '3_1', '1721806842669.jpg', 0, '2024-07-24 07:40:42', '2024-07-26 04:25:13'),
(599, 197, 3, 2, 13, '3_2', '1721806842669.jpg', 0, '2024-07-24 07:40:42', '2024-07-26 04:25:13'),
(600, 197, 1, 2, 15, '1_2', '1721806842669.jpg', 0, '2024-07-24 07:40:42', '2024-07-26 04:25:13'),
(601, 197, 2, 2, 6, '2_2', '1721806842669.jpg', 0, '2024-07-24 07:40:42', '2024-07-26 04:25:13'),
(602, 197, 1, 3, 17, '1_3', '1721806842670.jpg', 0, '2024-07-24 07:40:42', '2024-07-26 04:25:13'),
(603, 197, 2, 3, 7, '2_3', NULL, 0, '2024-07-24 07:40:42', '2024-07-26 04:25:13'),
(604, 197, 3, 3, 12, '3_3', NULL, 0, '2024-07-24 07:40:42', '2024-07-26 04:25:13'),
(605, 198, 1, 1, 8, '1_1', '1721806927308.jpg', 0, '2024-07-24 07:42:07', '2024-07-24 08:05:28'),
(606, 198, 2, 1, 6, '2_1', '1721806927308.jpg', 0, '2024-07-24 07:42:07', '2024-07-24 08:05:28'),
(607, 198, 3, 1, 4, '3_1', '1721806927308.jpg', 0, '2024-07-24 07:42:07', '2024-07-24 08:05:28'),
(608, 198, 1, 2, 1, '1_2', '1721806927310.jpg', 0, '2024-07-24 07:42:07', '2024-07-24 08:05:28'),
(609, 198, 3, 2, 26, '3_2', '1721806927312.jpg', 0, '2024-07-24 07:42:07', '2024-07-24 08:05:28'),
(610, 198, 2, 2, 6, '2_2', '1721806927311.jpg', 0, '2024-07-24 07:42:07', '2024-07-24 08:05:28'),
(611, 198, 1, 3, 13, '1_3', '1721806927313.jpg', 0, '2024-07-24 07:42:07', '2024-07-24 08:05:28'),
(612, 198, 2, 3, 18, '2_3', NULL, 0, '2024-07-24 07:42:07', '2024-07-24 08:05:28'),
(613, 198, 3, 3, 18, '3_3', NULL, 0, '2024-07-24 07:42:07', '2024-07-24 08:05:28'),
(614, 199, 1, 1, 6, '1_1', '1721806975975.jpg', 0, '2024-07-24 07:42:56', '2024-07-24 07:42:56'),
(615, 199, 2, 1, 8, '2_1', '1721806975975.jpg', 0, '2024-07-24 07:42:56', '2024-07-24 07:42:56'),
(616, 199, 3, 1, 20, '3_1', '1721806975975.jpg', 0, '2024-07-24 07:42:56', '2024-07-24 07:42:56'),
(617, 199, 1, 2, 17, '1_2', '1721806975976.jpg', 0, '2024-07-24 07:42:56', '2024-07-24 07:42:56'),
(618, 199, 2, 2, 23, '2_2', '1721806975976.jpg', 0, '2024-07-24 07:42:56', '2024-07-24 07:42:56'),
(619, 199, 1, 3, 5, '1_3', '1721806975977.jpg', 0, '2024-07-24 07:42:56', '2024-07-24 07:42:56'),
(620, 199, 3, 2, 17, '3_2', '1721806975977.jpg', 0, '2024-07-24 07:42:56', '2024-07-24 07:42:56'),
(621, 199, 2, 3, 12, '2_3', NULL, 0, '2024-07-24 07:42:56', '2024-07-24 07:42:56'),
(622, 199, 3, 3, 5, '3_3', NULL, 0, '2024-07-24 07:42:56', '2024-07-24 07:42:56'),
(632, 201, 1, 1, 23, '1_1', '1721807207084.jpg', 0, '2024-07-24 07:46:47', '2024-07-24 07:46:47'),
(633, 201, 2, 1, 7, '2_1', '1721807207084.jpg', 0, '2024-07-24 07:46:47', '2024-07-24 07:46:47'),
(634, 201, 3, 2, 26, '3_2', '1721807207086.jpg', 0, '2024-07-24 07:46:47', '2024-07-24 07:46:47'),
(635, 201, 3, 1, 19, '3_1', '1721807207085.jpg', 0, '2024-07-24 07:46:47', '2024-07-24 07:46:47'),
(636, 201, 1, 2, 18, '1_2', '1721807207085.jpg', 0, '2024-07-24 07:46:47', '2024-07-24 07:46:47'),
(637, 201, 2, 2, 3, '2_2', '1721807207086.jpg', 0, '2024-07-24 07:46:47', '2024-07-24 07:46:47'),
(638, 201, 1, 3, 21, '1_3', '1721807207087.jpg', 0, '2024-07-24 07:46:47', '2024-07-24 07:46:47'),
(639, 201, 2, 3, 5, '2_3', '1721807207087.jpg', 0, '2024-07-24 07:46:47', '2024-07-24 07:46:47'),
(640, 201, 3, 3, 21, '3_3', NULL, 0, '2024-07-24 07:46:47', '2024-07-24 07:46:47'),
(641, 202, 1, 1, 1, '1_1', '1721807461649.jpg', 0, '2024-07-24 07:51:02', '2024-07-24 07:51:02'),
(642, 202, 2, 1, 1, '2_1', '1721807461650.jpg', 0, '2024-07-24 07:51:02', '2024-07-24 07:51:02'),
(643, 202, 3, 1, 2, '3_1', '1721807461650.jpg', 0, '2024-07-24 07:51:02', '2024-07-24 07:51:02'),
(644, 202, 1, 2, 9, '1_2', '1721807461651.jpg', 0, '2024-07-24 07:51:02', '2024-07-24 07:51:02'),
(645, 202, 2, 2, 9, '2_2', '1721807461654.jpg', 0, '2024-07-24 07:51:02', '2024-07-24 07:51:02'),
(646, 202, 3, 2, 18, '3_2', '1721807461655.jpg', 0, '2024-07-24 07:51:02', '2024-07-24 07:51:02'),
(647, 202, 1, 3, 1, '1_3', '1721807461656.jpg', 0, '2024-07-24 07:51:02', '2024-07-24 07:51:02'),
(648, 202, 2, 3, 11, '2_3', NULL, 0, '2024-07-24 07:51:02', '2024-07-24 07:51:02'),
(649, 202, 3, 3, 23, '3_3', NULL, 0, '2024-07-24 07:51:02', '2024-07-24 07:51:02'),
(650, 203, 1, 1, 20, '1_1', '1721807651599.jpg', 0, '2024-07-24 07:54:12', '2024-07-24 08:08:44'),
(651, 203, 2, 1, 2, '2_1', '1721807651601.jpg', 0, '2024-07-24 07:54:12', '2024-07-24 08:08:44'),
(652, 203, 3, 1, 9, '3_1', '1721807651602.jpg', 0, '2024-07-24 07:54:12', '2024-07-24 08:08:44'),
(653, 203, 1, 2, 12, '1_2', '1721807651603.jpg', 0, '2024-07-24 07:54:12', '2024-07-24 08:08:44'),
(654, 203, 2, 2, 30, '2_2', '1721807651604.jpg', 0, '2024-07-24 07:54:12', '2024-07-24 08:08:44'),
(655, 203, 3, 2, 23, '3_2', '1721807651604.jpg', 0, '2024-07-24 07:54:12', '2024-07-24 08:08:44'),
(656, 203, 1, 3, 28, '1_3', '1721807651605.jpg', 0, '2024-07-24 07:54:12', '2024-07-24 08:08:44'),
(657, 203, 2, 3, 8, '2_3', '1721807651610.jpg', 0, '2024-07-24 07:54:12', '2024-07-24 08:08:44'),
(658, 203, 3, 3, 17, '3_3', NULL, 0, '2024-07-24 07:54:12', '2024-07-24 08:08:44'),
(659, 204, 1, 1, 2, '1_1', '1721807709395.jpg', 0, '2024-07-24 07:55:10', '2024-07-24 07:55:10'),
(660, 204, 2, 1, 19, '2_1', '1721807709396.jpg', 0, '2024-07-24 07:55:10', '2024-07-24 07:55:10'),
(661, 204, 3, 1, 27, '3_1', '1721807709397.jpg', 0, '2024-07-24 07:55:10', '2024-07-24 07:55:10'),
(662, 204, 1, 2, 20, '1_2', '1721807709398.jpg', 0, '2024-07-24 07:55:10', '2024-07-24 07:55:10'),
(663, 204, 2, 2, 18, '2_2', '1721807709398.jpg', 0, '2024-07-24 07:55:10', '2024-07-24 07:55:10'),
(664, 204, 3, 2, 1, '3_2', '1721807709399.jpg', 0, '2024-07-24 07:55:10', '2024-07-24 07:55:10'),
(665, 204, 1, 3, 9, '1_3', NULL, 0, '2024-07-24 07:55:10', '2024-07-24 07:55:10'),
(666, 204, 2, 3, 12, '2_3', '1721807709402.jpg', 0, '2024-07-24 07:55:10', '2024-07-24 07:55:10'),
(667, 204, 3, 3, 4, '3_3', NULL, 0, '2024-07-24 07:55:10', '2024-07-24 07:55:10'),
(668, 205, 1, 1, 12, '1_1', '1721807912500.jpg', 0, '2024-07-24 07:58:33', '2024-07-24 07:58:33'),
(669, 205, 2, 1, 21, '2_1', '1721807912501.jpg', 0, '2024-07-24 07:58:33', '2024-07-24 07:58:33'),
(670, 205, 3, 1, 9, '3_1', '1721807912502.jpg', 0, '2024-07-24 07:58:33', '2024-07-24 07:58:33'),
(671, 205, 1, 2, 11, '1_2', '1721807912504.jpg', 0, '2024-07-24 07:58:33', '2024-07-24 07:58:33'),
(672, 205, 2, 2, 26, '2_2', '1721807912504.jpg', 0, '2024-07-24 07:58:33', '2024-07-24 07:58:33'),
(673, 205, 3, 2, 10, '3_2', '1721807912506.jpg', 0, '2024-07-24 07:58:33', '2024-07-24 07:58:33'),
(674, 205, 1, 3, 29, '1_3', '1721807912512.jpg', 0, '2024-07-24 07:58:33', '2024-07-24 07:58:33'),
(675, 205, 2, 3, 26, '2_3', NULL, 0, '2024-07-24 07:58:33', '2024-07-24 07:58:33'),
(676, 205, 3, 3, 14, '3_3', NULL, 0, '2024-07-24 07:58:33', '2024-07-24 07:58:33'),
(677, 206, 1, 1, 20, '1_1', '1721807940713.jpg', 0, '2024-07-24 07:59:01', '2024-07-24 07:59:01'),
(678, 206, 2, 1, 29, '2_1', '1721807940715.jpg', 0, '2024-07-24 07:59:01', '2024-07-24 07:59:01'),
(679, 206, 3, 1, 25, '3_1', '1721807940716.jpg', 0, '2024-07-24 07:59:01', '2024-07-24 07:59:01'),
(680, 206, 1, 2, 8, '1_2', '1721807940716.jpg', 0, '2024-07-24 07:59:01', '2024-07-24 07:59:01'),
(681, 206, 2, 2, 26, '2_2', '1721807940719.jpg', 0, '2024-07-24 07:59:01', '2024-07-24 07:59:01'),
(682, 206, 3, 2, 15, '3_2', '1721807940719.jpg', 0, '2024-07-24 07:59:01', '2024-07-24 07:59:01'),
(683, 206, 1, 3, 29, '1_3', '1721807940720.jpg', 0, '2024-07-24 07:59:01', '2024-07-24 07:59:01'),
(684, 206, 2, 3, 9, '2_3', '1721807940722.jpg', 0, '2024-07-24 07:59:01', '2024-07-24 07:59:01'),
(685, 206, 3, 3, 18, '3_3', NULL, 0, '2024-07-24 07:59:01', '2024-07-24 07:59:01'),
(686, 207, 1, 1, 4, '1_1', '1721807968627.jpg', 0, '2024-07-24 07:59:29', '2024-07-24 07:59:29'),
(687, 207, 2, 1, 27, '2_1', '1721807968634.jpg', 0, '2024-07-24 07:59:29', '2024-07-24 07:59:29'),
(688, 207, 3, 1, 0, '3_1', '1721807968644.jpg', 1, '2024-07-24 07:59:29', '2024-07-24 07:59:29'),
(689, 207, 1, 2, 11, '1_2', '1721807968647.jpg', 0, '2024-07-24 07:59:29', '2024-07-24 07:59:29'),
(690, 207, 2, 2, 26, '2_2', '1721807968650.jpg', 0, '2024-07-24 07:59:29', '2024-07-24 07:59:29'),
(691, 207, 3, 2, 5, '3_2', '1721807968659.jpg', 0, '2024-07-24 07:59:29', '2024-07-24 07:59:29'),
(692, 207, 1, 3, 8, '1_3', '1721807968661.jpg', 0, '2024-07-24 07:59:29', '2024-07-24 07:59:29'),
(693, 207, 2, 3, 24, '2_3', NULL, 0, '2024-07-24 07:59:29', '2024-07-24 07:59:29'),
(694, 207, 3, 3, 7, '3_3', NULL, 0, '2024-07-24 07:59:29', '2024-07-24 07:59:29'),
(695, 208, 1, 1, 23, '1_1', '1721807994581.jpg', 0, '2024-07-24 07:59:55', '2024-07-24 07:59:55'),
(696, 208, 2, 1, 2, '2_1', '1721807994582.jpg', 0, '2024-07-24 07:59:55', '2024-07-24 07:59:55'),
(697, 208, 3, 1, 3, '3_1', '1721807994583.jpg', 0, '2024-07-24 07:59:55', '2024-07-24 07:59:55'),
(698, 208, 1, 2, 8, '1_2', '1721807994584.jpg', 0, '2024-07-24 07:59:55', '2024-07-24 07:59:55'),
(699, 208, 2, 2, 2, '2_2', '1721807994585.jpg', 0, '2024-07-24 07:59:55', '2024-07-24 07:59:55'),
(700, 208, 3, 2, 16, '3_2', '1721807994586.jpg', 0, '2024-07-24 07:59:55', '2024-07-24 07:59:55'),
(701, 208, 1, 3, 13, '1_3', '1721807994588.jpg', 0, '2024-07-24 07:59:55', '2024-07-24 07:59:55'),
(702, 208, 2, 3, 18, '2_3', '1721807994592.jpg', 0, '2024-07-24 07:59:55', '2024-07-24 07:59:55'),
(703, 208, 3, 3, 22, '3_3', NULL, 0, '2024-07-24 07:59:55', '2024-07-24 07:59:55'),
(704, 209, 1, 1, 24, '1_1', '1721808039768.jpg', 0, '2024-07-24 08:00:40', '2024-07-24 08:07:44'),
(705, 209, 2, 1, 23, '2_1', '1721808039770.jpg', 0, '2024-07-24 08:00:40', '2024-07-24 08:07:44'),
(706, 209, 3, 1, 13, '3_1', '1721808039771.jpg', 0, '2024-07-24 08:00:40', '2024-07-24 08:07:44'),
(707, 209, 1, 2, 26, '1_2', '1721808039772.jpg', 0, '2024-07-24 08:00:40', '2024-07-24 08:07:44'),
(708, 209, 2, 2, 1, '2_2', '1721808039772.jpg', 0, '2024-07-24 08:00:40', '2024-07-24 08:07:44'),
(709, 209, 3, 2, 19, '3_2', '1721808039773.jpg', 0, '2024-07-24 08:00:40', '2024-07-24 08:07:44'),
(710, 209, 1, 3, 0, '1_3', '1721808039775.jpg', 0, '2024-07-24 08:00:40', '2024-07-24 08:07:44'),
(711, 209, 2, 3, 15, '2_3', '1721808039777.jpg', 0, '2024-07-24 08:00:40', '2024-07-24 08:07:44'),
(712, 209, 3, 3, 6, '3_3', NULL, 0, '2024-07-24 08:00:40', '2024-07-24 08:07:44');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `classificationorders`
--
ALTER TABLE `classificationorders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_oders` (`code_oders`);

--
-- Chỉ mục cho bảng `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `detailorders`
--
ALTER TABLE `detailorders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Chỉ mục cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `statusorders`
--
ALTER TABLE `statusorders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `variants`
--
ALTER TABLE `variants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `classificationorders`
--
ALTER TABLE `classificationorders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT cho bảng `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `detailorders`
--
ALTER TABLE `detailorders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT cho bảng `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=219;

--
-- AUTO_INCREMENT cho bảng `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `statusorders`
--
ALTER TABLE `statusorders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `variants`
--
ALTER TABLE `variants`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=758;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `classificationorders`
--
ALTER TABLE `classificationorders`
  ADD CONSTRAINT `classificationorders_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `accounts` (`id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`);

--
-- Các ràng buộc cho bảng `variants`
--
ALTER TABLE `variants`
  ADD CONSTRAINT `variants_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
