// 404Page.jsx
import React from "react";
import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
      <XCircle className="w-24 h-24 mb-6 animate-bounce" />
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl md:text-2xl mb-6 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
      >
        Go Back Home
      </Link>
      <div className="mt-10 text-sm opacity-80 text-center max-w-md">
        If you think this is a mistake, contact our support.
      </div>
    </div>
  );
};

export default NotFoundPage;
