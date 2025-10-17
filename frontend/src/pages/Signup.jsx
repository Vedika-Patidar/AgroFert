import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      toast.error(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
        { position: "bottom-center" }
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!", { position: "bottom-center" });
      return;
    }

    // Save user data to localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === formData.email);
    if (userExists) {
      toast.error("Email already exists!", { position: "bottom-center" });
      return;
    }

    users.push({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Signup successful!", {
      duration: 2000,
      position: "bottom-center",
    });
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="flex justify-center bg-green-50 py-12 px-4 md:px-8">
      <Toaster />
      <div className="flex flex-col md:flex-row bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl">
        <div className="md:w-1/2 hidden md:block bg-[url('https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg')] bg-cover bg-center"></div>
        <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4 text-center md:text-left">
            Create Account
          </h2>
          <p className="text-gray-700 mb-8 text-center md:text-left">
            Join AgroFert Info to access fertilizer insights, availability
            updates, and more.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm backdrop-blur-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm backdrop-blur-sm"
              required
            />
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
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm backdrop-blur-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-700 hover:text-green-900 text-xl"
              >
                {showConfirmPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 shadow-lg transition-all"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-gray-700 text-center md:text-left">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-700 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
