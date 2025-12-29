import React from "react";
// Lucide-React icons
import {
  Twitter,
  Facebook,
  Instagram,
  Github,
  Mail,
  CreditCard,
} from "lucide-react";
import bkash from "../assets/Bkash-Logo.jpg";
import nagad from "../assets/nagad.png";
import dutch from "../assets/dutch.jpg";
import visa from "../assets/visa-card.png";
import logo from "../assets/logo.png";

const SimpleFooter = () => {
  return (
    <div className="bg-white font-sans">
      {/* --- Newsletter Section --- */}
      <div className="px-4">
        <div className="max-w-7xl mx-auto bg-black rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 -mb-20">
          <h2 className="text-white text-3xl md:text-4xl font-black max-w-lg leading-tight">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>

          <div className="w-full md:w-[350px] flex flex-col gap-3">
            <div className="bg-white rounded-full flex items-center px-4 py-2 gap-3">
              <Mail className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Enter your email address"
                className="outline-none text-sm w-full text-black"
              />
            </div>
            <button className="bg-white text-black font-bold py-2 rounded-full hover:bg-gray-200 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* --- Main Footer Section --- */}
      <footer className="bg-[#F0F0F0] pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
            {/* Branding Column */}
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-3xl font-black italic">
                <img src={logo} alt="" className="w-40" />
              </h1>
              <p className="text-gray-500 text-sm mt-4">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="w-8 h-8 text-black bg-white rounded-full border flex items-center justify-center hover:bg-[#f68c1e] hover:text-white"
                >
                  <Twitter size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-black text-black hover:bg-[#f68c1e] text-white rounded-full flex items-center justify-center"
                >
                  <Facebook size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white text-black rounded-full border flex items-center justify-center hover:bg-[#f68c1e] hover:text-white"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white text-black rounded-full border flex items-center justify-center hover:bg-[#f68c1e] hover:text-white"
                >
                  <Github size={14} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 tracking-widest text-sm text-black">
                COMPANY
              </h3>
              <ul className="text-gray-500 text-sm space-y-3">
                <li>
                  <a href="#" className="hover:text-black ">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 tracking-widest text-sm text-black">
                HELP
              </h3>
              <ul className="text-gray-500 text-sm space-y-3">
                <li>
                  <a href="#" className="hover:text-black">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 tracking-widest text-sm text-black">
                FAQ
              </h3>
              <ul className="text-gray-500 text-sm space-y-3">
                <li>
                  <a href="#" className="hover:text-black">
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Manage Deliveries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Payments
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 tracking-widest text-sm text-black">
                RESOURCES
              </h3>
              <ul className="text-gray-500 text-sm space-y-3">
                <li>
                  <a href="#" className="hover:text-black">
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright and Payment */}
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            <div className="flex gap-2">
              {/* Payment boxes using simple icons and text */}
              <div className="bg-white border rounded px-3 py-1 flex flex-col items-center">
                <span className="text-[8px] font-bold">
                  <img src={bkash} alt="" className="w-10" />
                </span>
              </div>
              <div className="bg-white border rounded px-3 py-1 flex flex-col items-center">
                <span className="text-[8px] font-bold">
                  <img src={nagad} alt="" className="w-10" />
                </span>
              </div>
              <div className="bg-white border rounded px-3 py-1 flex flex-col items-center">
                <span className="text-[8px] font-bold">
                  <img src={dutch} alt="" className="w-10" />
                </span>
              </div>

              <div className="bg-white border rounded px-3 py-1 flex flex-col items-center">
                <span className="text-[8px] font-bold">
                  <img src={visa} alt="" className="w-10" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleFooter;
