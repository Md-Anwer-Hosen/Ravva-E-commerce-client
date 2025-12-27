import React from "react";
import { Star, StarHalf } from "lucide-react";

const NewArrivals = () => {
  const productList = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: 120,
      oldPrice: null,
      discount: null,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: "-20%",
      rating: 3.5,
      img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    },
    {
      id: 3,
      name: "Checkered Shirt",
      price: 180,
      oldPrice: null,
      discount: null,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=500",
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      discount: "-30%",
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
    },
  ];

  return (
    <section className=" px-4 w-full mx-auto py-30">
      <h2 className="text-6xl font-black text-center mb-10 uppercase my-7 pb-6">
        New Arrivals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productList.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="bg-[#F0EEED] rounded-2xl overflow-hidden aspect-square">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-bold text-lg mt-4">{item.name}</h3>

            <div className="flex items-center text-yellow-400 my-1">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <StarHalf size={16} fill="currentColor" />
              <span className="text-gray-500 text-sm ml-2">
                {item.rating}/5
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">${item.price}</span>

              {item.oldPrice && (
                <span className="text-gray-400 line-through font-bold text-2xl">
                  ${item.oldPrice}
                </span>
              )}

              {item.discount && (
                <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-xs font-bold">
                  {item.discount}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="border border-gray-200 px-14 py-3 rounded-full font-medium hover:bg-[#f68c1e] hover:text-white transition-all">
          View All
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
