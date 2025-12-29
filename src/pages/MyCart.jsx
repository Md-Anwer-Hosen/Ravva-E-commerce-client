import React, { useEffect, useState } from "react";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import getCart from "../LocalStroge/getCart";
import updateQuantity from "../LocalStroge/updateCart";
import deleteCart from "../LocalStroge/deleteCart";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [DeliveryCost, setDeliveryCost] = useState(0);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  useEffect(() => {
    const cost = cartItems.reduce(
      (sum, item) => sum + item.currentPrice * item.quantity,
      0
    );

    const dCost = cartItems.reduce((sum, item) => sum + item.quantity * 2, 0);

    setTotal(cost);
    setDeliveryCost(dCost);
  }, [cartItems]);

  const handleQuantity = (id, newQty) => {
    const updated = updateQuantity(id, newQty);
    setCartItems(updated);
  };

  const handleDelete = (id) => {
    const updated = deleteCart(id);
    setCartItems(updated);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 mt-20">
      <p className="text-sm text-gray-400 mb-4">Home &gt; Cart</p>
      <h1 className="text-3xl font-black mb-8">YOUR CART</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.length === 0 && (
            <p className="text-gray-500">Your cart is empty</p>
          )}

          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex gap-4 p-4 border rounded-xl bg-white"
            >
              <img
                src={item.mainImage}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{item.name}</h3>
                  <Trash2
                    className="text-red-500 cursor-pointer"
                    size={18}
                    onClick={() => handleDelete(item._id)}
                  />
                </div>

                <p className="text-sm text-gray-500">
                  Size: {item.size} <br />
                  Color: {item.color}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold">
                    ${item.currentPrice} × {item.quantity}
                  </span>

                  <div className="flex items-center gap-3 border rounded-full px-3 py-1">
                    <button
                      onClick={() =>
                        handleQuantity(item._id, Math.max(1, item.quantity - 1))
                      }
                    >
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantity(item._id, item.quantity + 1)
                      }
                    >
                      <Plus size={14} />
                    </button>
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
              <span>${total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Discount (0%)</span>
              <span className="text-red-500">$0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Delivery Fee</span>
              <span>${DeliveryCost}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-base">
              <span>Total</span>
              <span>${total + DeliveryCost}</span>
            </div>
          </div>

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

          <button className="w-full mt-6 bg-black hover:bg-amber-500 text-white py-3 rounded-full flex items-center justify-center gap-2">
            Go to Checkout <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
