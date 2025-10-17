import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields", { position: "bottom-center" });
      return;
    }

    // Here you would normally call your backend API to verify credentials
    // For demonstration, we assume login is successful
    toast.success("Login successful!", {
      duration: 2000,
      position: "bottom-center",
    });
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 px-4 md:px-8">
      <Toaster />
      <div className="flex flex-col md:flex-row bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl">
        {/* Left Image */}
        <div className="md:w-1/2 hidden md:block bg-[url('https://cdn.pixabay.com/photo/2024/10/12/03/15/women-9114238_640.jpg')] bg-cover bg-center"></div>

        {/* Right Form */}
        <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4 text-center md:text-left">
            Welcome Back
          </h2>
          <p className="text-gray-700 mb-8 text-center md:text-left">
            Log in to access your dashboard and fertilizer insights.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm backdrop-blur-sm"
              required
            />

            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm backdrop-blur-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-700 hover:text-green-900 text-xl"
              >
                {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 shadow-lg transition-all"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-gray-700 text-center md:text-left">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-green-700 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
