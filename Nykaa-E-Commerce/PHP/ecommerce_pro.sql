-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2022 at 05:19 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce_pro`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `p_id` int(11) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `user` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `p_id`, `comment`, `user`) VALUES
(1, 2, 'Good one', ''),
(2, 3, 'Good one', ''),
(5, 5, 'Super Product', ''),
(6, 4, 'Great Product', ''),
(12, 1, 'nice', 'jhon'),
(13, 1, 'good', 'jhon'),
(14, 1, 'You should try this out!😉', 'jenni');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `phone` varchar(110) NOT NULL,
  `username` varchar(200) NOT NULL,
  `pass` varchar(200) NOT NULL,
  `type` int(200) NOT NULL,
  `email` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `phone`, `username`, `pass`, `type`, `email`) VALUES
(0, '', 'jenni', 'jenni', 1, NULL),
(0, '', 'jhon', 'jhon', 0, NULL),
(0, '', 'preethi', 'preethi', 1, NULL),
(0, '', 'priya', 'priya', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `short_desc` varchar(100) NOT NULL,
  `long_desc` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `short_desc`, `long_desc`, `img`) VALUES
(1, 'HALF SAREE DESIGN', '1800', 'popular half saree design', 'latest popular women wear', 'upload/469567-all-time-popular-simple-half-saree-design-for-women-2022.png'),
(9, 'PATTU HALF SAREE', '1200', 'pink pattu half saree', 'pink and green half saree for womens', 'upload/259240-pink-and-green-color-combination-pattu-half-saree-for-women-555x833.png'),
(10, 'TRADITIONAL SILK SAREE', '2400', 'traditional silk saree', 'traditional silk saree for womens', 'upload/374453-traditional-silk-saree-for-wedding-guest-2022.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
