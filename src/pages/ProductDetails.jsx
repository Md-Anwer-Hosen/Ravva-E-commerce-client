import React, { useState } from "react";
import { Star, Minus, Plus, Check } from "lucide-react";
import Image from "../assets/hero-man.png";
import Testimonials from "../components/Testimonials";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState("olive");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="w-full mx-auto px-4 font-sans py-20 mt-20">
        <nav className="text-sm text-gray-400 mb-8 flex gap-2">
          <span>Home</span> &gt; <span>Shop</span> &gt; <span>Men</span> &gt;{" "}
          <span className="text-black">Pants</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-34 h-38 bg-[#F0EEED] rounded-2xl border border-gray-100 overflow-hidden cursor-pointer"
                >
                  <img
                    src={Image}
                    alt="thumb"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex-1 bg-[#F0EEED] rounded-3xl overflow-hidden aspect-square">
              <img
                src={Image}
                alt="Main product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl font-black uppercase mb-4 leading-tight">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <span className="text-sm text-gray-500">4.5/5</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold">$260</span>
              <span className="text-3xl font-bold text-gray-300 line-through">
                $300
              </span>
              <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-bold">
                -40%
              </span>
            </div>

            <p className="text-gray-500 mb-6 leading-relaxed border-b pb-6">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>

            <div className="mb-6 border-b pb-6">
              <p className="text-gray-500 mb-4">Select Colors</p>
              <div className="flex gap-3">
                <ColorBtn
                  color="bg-[#4F4631]"
                  active={selectedColor === "olive"}
                  onClick={() => setSelectedColor("olive")}
                />
                <ColorBtn
                  color="bg-[#314F4A]"
                  active={selectedColor === "teal"}
                  onClick={() => setSelectedColor("teal")}
                />
                <ColorBtn
                  color="bg-[#31344F]"
                  active={selectedColor === "navy"}
                  onClick={() => setSelectedColor("navy")}
                />
              </div>
            </div>

            <div className="mb-6 border-b pb-6">
              <p className="text-gray-500 mb-4">Choose Size</p>
              <div className="flex flex-wrap gap-3">
                {["Small", "Medium", "Large", "X-Large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-[#F0F0F0] text-gray-600"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center bg-[#F0F0F0] rounded-full px-6 py-4 gap-6">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus size={20} />
                </button>
                <span className="font-bold text-lg w-4 text-center">
                  {quantity}
                </span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={20} />
                </button>
              </div>
              <button className="flex-1 bg-black text-white font-bold py-4 rounded-full hover:bg-opacity-90 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Testimonials />
      </div>
    </>
  );
};

const ColorBtn = ({ color, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-10 h-10 rounded-full ${color} flex items-center justify-center transition-all cursor-pointer`}
  >
    {active && <Check size={20} className="text-white" />}
  </button>
);

export default ProductDetails;
