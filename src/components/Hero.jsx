import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import hero_man from "../assets/hero-man.png";

// --- Count Up Component ---
const CountUp = ({ to, suffix = "+" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(
    count,
    (latest) => Math.round(latest).toLocaleString() + suffix
  );

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [to]);

  return <motion.span>{rounded}</motion.span>;
};

const Hero = () => {
  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

  return (
    <section className=" bg-[#F2F0F1] pt-10 md:pt-20 overflow-hidden gap-10">
      <div className=" px-3 md:px-25 mx-auto grid  grid-cols-1 md:grid-cols-2 items-center">
        {/* Text Content */}
        <div className=" order-2 md:order-1 w-full ">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-7xl  font-black leading-tight mb-6 text-center md:text-left mt-5">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-8 max-w-md text-center md:text-left">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button className="w-full md:w-auto bg-[#f68c1e] text-white px-12 py-4 rounded-full font-medium hover:bg-gray-800 transition-all mb-12">
            Shop Now
          </button>

          {/* Stats Section */}

          <div className="flex flex-wrap gap-8 md:gap-12 mb-12 items-center justify-center md:justify-start flex-col sm:flex-row">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold">
                <CountUp to={200} />
              </h3>
              <p className="text-gray-500 text-xs md:text-sm">
                International Brands
              </p>
            </div>
            <div className="border-l border-gray-300 h-12 hidden sm:block"></div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold">
                <CountUp to={2000} />
              </h3>
              <p className="text-gray-500 text-xs md:text-sm">
                High-Quality Products
              </p>
            </div>
            <div className="border-l border-gray-300 h-12 hidden sm:block"></div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold">
                <CountUp to={30000} />
              </h3>
              <p className="text-gray-500 text-xs md:text-sm">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}

        <div className=" order-1 md:order-2 w-full relative">
          <img src={hero_man} alt="Hero Models" className="w-full  xl:w-full" />
          {/* Decorative Stars (Simplified for Code) */}
          <div className="absolute top-10 right-0 text-3xl md:text-5xl">✦</div>
          <div className="absolute top-1/2 left-0 text-xl md:text-3xl">✦</div>
        </div>
      </div>

      {/* Infinite Scrolling  right-left */}

      <div className="bg-black py-6 overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex gap-12 md:gap-24 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {/* Duplicating the list to create a seamless loop */}

          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-white text-xl md:text-3xl font-bold tracking-widest"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
