import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import TopSelling from "../components/TopSelling";
import Testimonials from "../components/Testimonials";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const products = useLoaderData();

  return (
    <div>
      <Hero />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <NewArrivals products={products} />
      </Suspense>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <TopSelling products={products} />
      </Suspense>

      <Testimonials />
    </div>
  );
};

export default HomePage;
