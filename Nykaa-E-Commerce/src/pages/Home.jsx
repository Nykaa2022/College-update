import React from "react";
import Announcement from "../components/Announcement";
import { Categories,Categories1,Categories2,Categories3,Categories4,Categories5 } from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { Divide1, Divide2, Divide3, Divide4 } from "../components/Divider";




const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Divide1 />
      <Categories />
      <Categories1 />
      <Divide2 />
      <Categories2 />
      <Categories3 />
      <Divide3 />
      <Categories4 />
      <Categories5 />
      <Divide4 />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
