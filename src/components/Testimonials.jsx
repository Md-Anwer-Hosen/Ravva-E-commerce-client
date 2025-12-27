import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "সারা এম.",
    text: "Ravva-র পোশাকের মান এবং স্টাইল দেখে আমি জাস্ট মুগ্ধ! সব প্রত্যাশার চেয়েও অনেক ভালো ছিল।",
  },
  {
    id: 2,
    name: "আলেক্স কে.",
    text: "নিজের পছন্দের সাথে মিল রেখে কাপড় খুঁজে পাওয়া আগে কঠিন ছিল। কিন্তু Ravva-তে চমৎকার সব কালেকশন আছে।",
  },
  {
    id: 3,
    name: "জেমস এল.",
    text: "আমি সব সময় ইউনিক ফ্যাশন খুঁজে বেড়াই। Ravva-তে লেটেস্ট ট্রেন্ডের পোশাকগুলো দেখে আমি খুবই খুশি।",
  },
  {
    id: 4,
    name: "মইন এইচ.",
    text: "এদের কাস্টমার সার্ভিস এবং ডেলিভারি ছিল সুপার ফাস্ট। কাপড়ের ফেব্রিকগুলো অনেক আরামদায়ক।",
  },
  {
    id: 5,
    name: "লিমা এ.",
    text: "বাজেটের মধ্যে এত প্রিমিয়াম কোয়ালিটির জামাকাপড় আগে কখনো দেখিনি। এক কথায় অসাধারণ।",
  },
];
const Testimonials = () => {
  const allReviews = [...reviews, ...reviews];

  return (
    <section className="relative overflow-hidden py-16 px-4">
      <h2 className="mb-12 text-center text-3xl md:text-5xl font-black">
        Our Happy Customers
      </h2>

      {/* Blur */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {allReviews.map((review, index) => (
          <div
            key={index}
            className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-2xl border flex flex-col gap-3"
          >
            <div className="flex text-yellow-400 gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold">{review.name}</span>
              <CheckCircle2
                size={16}
                className="text-green-500 fill-green-500"
              />
            </div>

            <p className="italic text-gray-600">“{review.text}”</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
