import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-3xl font-black text-center mb-2">Create Account</h2>
        <p className="text-center text-gray-500 mb-8">
          Join us and start your journey
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full rounded-lg border px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative mt-2">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                className="w-full rounded-lg border px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-black" />I agree to the{" "}
            <span className="underline cursor-pointer">Terms & Conditions</span>
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-black font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
