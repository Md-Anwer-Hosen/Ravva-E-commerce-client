import React from "react";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import image from "../assets/hero-man.png";

const cartItems = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    image: "https://via.placeholder.com/80",
  },
];

const MyCart = () => {
  return (
    <section className="max-w-6xl mx-auto px-4  py-10 mt-20">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 mb-4">Home &gt; Cart</p>

      <h1 className="text-3xl font-black mb-8">YOUR CART</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 border rounded-xl bg-white"
            >
              <img
                src={image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{item.name}</h3>
                  <Trash2 className="text-red-500 cursor-pointer" size={18} />
                </div>

                <p className="text-sm text-gray-500">
                  Size: {item.size} <br />
                  Color: {item.color}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold">${item.price}</span>

                  <div className="flex items-center gap-3 border rounded-full px-3 py-1">
                    <Minus size={14} />
                    <span>1</span>
                    <Plus size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border rounded-xl p-6 bg-white h-fit">
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>$565</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Discount (-20%)</span>
              <span className="text-red-500">-$113</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Delivery Fee</span>
              <span>$15</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-base">
              <span>Total</span>
              <span>$467</span>
            </div>
          </div>

          {/* Promo */}
          <div className="flex gap-2 mt-5">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 border rounded-full px-4 py-2 text-sm outline-none"
            />
            <button className="bg-black text-white px-4 rounded-full text-sm">
              Apply
            </button>
          </div>

          {/* Checkout */}
          <button className="w-full mt-6 bg-black hover:bg-amber-500 text-white py-3 rounded-full flex items-center justify-center gap-2">
            Go to Checkout <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
