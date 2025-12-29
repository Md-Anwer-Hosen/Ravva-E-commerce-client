import React, { useState } from "react";
import { Slice, Star, StarHalf } from "lucide-react";
import { Link } from "react-router-dom";

const NewArrivals = ({ products }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleProduct = showAll ? products : products.slice(0, 4);

  return (
    <section className=" px-4 w-full mx-auto py-30">
      <h2 className="text-6xl font-black text-center mb-10 uppercase my-7 pb-6">
        New Arrivals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProduct.map((item) => (
          <Link key={item._id} to={`/product/${item._id}`}>
            <div className="flex flex-col">
              <div className="bg-[#F0EEED] rounded-2xl overflow-hidden aspect-square">
                <img
                  src={item.mainImage}
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
                <span className="text-gray-500 text-sm ml-2">5/5</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">${item.currentPrice}</span>

                {item.oldPrice && (
                  <span className="text-gray-400 line-through font-bold text-2xl">
                    ${item.oldPrice}
                  </span>
                )}

                {item.discount && (
                  <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-xs font-bold">
                    {item.discount}%
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <button
          className="border border-gray-200 px-14 py-3 rounded-full font-medium hover:bg-[#f68c1e] hover:text-white transition-all"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? <p>Show Less</p> : <p>View All</p>}
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
