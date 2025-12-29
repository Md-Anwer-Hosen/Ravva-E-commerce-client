import React, { useState } from "react";
import { Star, Minus, Plus, Check } from "lucide-react";
import Testimonials from "../components/Testimonials";
import { useLoaderData } from "react-router-dom";
import addToCart from "../LocalStroge/addToCart";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const ProductFullDetails = useLoaderData();

  const [selectedColor, setSelectedColor] = useState("olive");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(ProductFullDetails.mainImage);

  const handleAddtoCard = () => {
    addToCart({ ...ProductFullDetails, quantity: quantity });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  if (!ProductFullDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 py-10 md:py-20 mt-10 md:mt-20 font-sans">
        {/* Breadcrumb */}
        <nav className="text-xs md:text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
          <span>Home</span> &gt; <span>Shop</span> &gt; <span>Men</span> &gt;
          <span className="text-black font-medium">
            {ProductFullDetails.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
              {ProductFullDetails?.subImage?.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`min-w-[80px] h-[80px] lg:w-24 lg:h-24 rounded-xl border overflow-hidden cursor-pointer transition
                    ${
                      activeImage === img
                        ? "ring-2 ring-black"
                        : "border-gray-200"
                    }`}
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-[#F0EEED] rounded-3xl overflow-hidden aspect-square max-h-[420px] md:max-h-[520px]">
              <img
                src={activeImage}
                alt="Main product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-4xl font-black uppercase mb-4 leading-tight">
              {ProductFullDetails.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-gray-500">4.5/5</span>
            </div>

            {/* Price */}

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="text-xl md:text-3xl font-bold">
                ${ProductFullDetails.currentPrice}
              </span>
              <span className="text-lg md:text-2xl text-gray-300 line-through">
                ${ProductFullDetails.oldPrice}
              </span>
              <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-bold">
                {ProductFullDetails.discount}% OFF
              </span>
            </div>

            {/* Description */}

            <p className="text-gray-500 mb-6 leading-relaxed border-b pb-6">
              This graphic t-shirt is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style.
            </p>

            {/* Colors */}
            <div className="mb-6 border-b pb-6">
              <p className="text-gray-500 mb-4">Select Color</p>
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

            {/* Sizes */}
            <div className="mb-6 border-b pb-6">
              <p className="text-gray-500 mb-4">Choose Size</p>
              <div className="flex flex-wrap gap-3">
                {["Small", "Medium", "Large", "X-Large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm font-medium transition-all
                      ${
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

            {/* Quantity & Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
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

              <button
                className="flex-1 bg-black text-white font-bold py-4 rounded-full hover:bg-opacity-90 transition"
                onClick={handleAddtoCard}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
    </>
  );
};

const ColorBtn = ({ color, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-10 h-10 rounded-full ${color} flex items-center justify-center transition-all`}
  >
    {active && <Check size={20} className="text-white" />}
  </button>
);

export default ProductDetails;
