import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import TopSelling from "../components/TopSelling";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <TopSelling />
      <Testimonials />
    </div>
  );
};

export default HomePage;
