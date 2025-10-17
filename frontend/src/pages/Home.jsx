import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 via-green-100 to-green-200">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-6 bg-green-50/95 backdrop-blur-md shadow-md sticky top-0 z-20">
        <h1 className="text-3xl font-extrabold text-green-700 tracking-wide">
          🌾 AgroFert Info
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-5 py-2 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-all shadow-md"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 border-2 border-green-600 text-green-700 font-medium rounded-full hover:bg-green-600 hover:text-white transition-all shadow-md"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-green-700 text-3xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-50/95 backdrop-blur-md shadow-md px-8 py-4 flex flex-col space-y-4">
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2 bg-green-600 text-white font-medium rounded-full text-center hover:bg-green-700 transition-all shadow-md"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2 border-2 border-green-600 text-green-700 font-medium rounded-full text-center hover:bg-green-600 hover:text-white transition-all shadow-md"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-center flex-1 px-8 md:px-16 py-16 bg-[url('https://images.unsplash.com/photo-1603791452906-b6b545d07b02?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-green-900/60"></div>

        <div className="relative z-10 text-center md:text-left max-w-2xl text-white">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Growing Agriculture with{" "}
            <span className="text-yellow-300">Smart Fertilizer Insight</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-6">
            AgroFert Info helps farmers and agricultural experts understand
            fertilizer usage, availability, and their vital role in improving
            soil fertility and crop yield — for a sustainable tomorrow.
          </p>
          <Link
            to="/signup"
            className="bg-yellow-400 text-green-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-all shadow-lg"
          >
            Explore Now
          </Link>
        </div>

        <div className="relative z-10 mt-10 md:mt-0 md:ml-10">
          <img
            src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg"
            alt="Farmer fertilizing field"
            className="rounded-3xl shadow-2xl w-[350px] md:w-[450px] border-2 border-green-100"
          />
        </div>
      </header>

      {/* Info Section */}
      <section className="py-16 px-8 md:px-20 bg-green-100/60">
        <h3 className="text-4xl font-bold text-center text-green-700 mb-10">
          Importance of Fertilizers in Agriculture 🌱
        </h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Fertilizers are essential for replenishing soil nutrients and ensuring
          healthy plant growth. The right use of fertilizers enhances crop
          productivity, improves food quality, and supports sustainable
          agriculture practices.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Cards */}
          <div className="bg-green-100 rounded-2xl shadow-md p-6 hover:shadow-2xl transition-transform hover:-translate-y-2 border-2 border-green-100">
            <img
              src="https://images.pexels.com/photos/1443867/pexels-photo-1443867.jpeg"
              alt="Fertilizer Requirements"
              className="rounded-l mb-4 h-50 w-full"
            />
            <h4 className="text-2xl font-semibold text-green-700 mb-2">
              Fertilizer Requirements
            </h4>
            <p className="text-gray-700">
              Each crop requires specific nutrients. Learn about the ideal
              fertilizer combinations based on soil type, crop variety, and
              climate to achieve maximum yield and soil health.
            </p>
          </div>

          <div className="bg-green-100 rounded-2xl shadow-md p-6 hover:shadow-2xl transition-transform hover:-translate-y-2 border-2 border-green-100">
            <img
              src="https://images.pexels.com/photos/31673795/pexels-photo-31673795.jpeg"
              alt="Availability Info"
              className="rounded-l mb-4 h-50 w-full"
            />
            <h4 className="text-2xl font-semibold text-green-700 mb-2">
              Fertilizer Availability
            </h4>
            <p className="text-gray-700">
              Stay informed about the latest stock and regional availability of
              fertilizers to ensure timely supply and efficient agricultural
              planning.
            </p>
          </div>

          <div className="bg-green-100 rounded-2xl shadow-md p-6 hover:shadow-2xl transition-transform hover:-translate-y-2 border-2 border-green-100">
            <img
              src="https://images.pexels.com/photos/7944412/pexels-photo-7944412.jpeg"
              alt="Importance of Fertilizers"
              className="rounded-l mb-4 h-50 w-full"
            />
            <h4 className="text-2xl font-semibold text-green-700 mb-2">
              Importance for Growth
            </h4>
            <p className="text-gray-700">
              Fertilizers enrich soil fertility and enable farmers to grow
              healthier, stronger, and more productive crops — helping feed
              communities sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-6 text-center">
        <p className="font-medium">
          © {new Date().getFullYear()} AgroFert Info | Empowering Sustainable
          Agriculture 🌾
        </p>
      </footer>
    </div>
  );
};

export default Home;
