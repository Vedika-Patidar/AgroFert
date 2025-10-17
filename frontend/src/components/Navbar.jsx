import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSearch,
  HiChevronDown,
  HiChevronUp,
  HiMenu,
  HiX,
} from "react-icons/hi";

const Navbar = () => {
  const [typeDropdown, setTypeDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  const handleLogout = () => {
    navigate("/login");
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 h-full bg-green-100 text-green-800 flex flex-col justify-between shadow-lg transform transition-transform duration-300 z-40
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-64 w-64`}
      >
        <div className="pt-16 flex flex-col justify-between h-full">
          {" "}
          {/* push below header */}
          <div>
            {/* Logo */}
            <div className="text-2xl font-bold tracking-wide p-6 border-b border-green-200">
              🌾 AgroFert Info
            </div>

            {/* Nav Links */}
            <div className="flex flex-col mt-6 text-lg font-medium">
              <Link
                to="/about"
                className="px-6 py-3 hover:bg-green-200 transition"
                onClick={() => setSidebarOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 hover:bg-green-200 transition"
                onClick={() => setSidebarOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/availability"
                className="px-6 py-3 hover:bg-green-200 transition"
                onClick={() => setSidebarOpen(false)}
              >
                Availability
              </Link>

              {/* Types Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setTypeDropdown(!typeDropdown)}
                  className="w-full flex items-center justify-between px-6 py-3 hover:bg-green-200 transition"
                >
                  <span>Types</span>
                  {typeDropdown ? <HiChevronUp /> : <HiChevronDown />}
                </button>
                {typeDropdown && (
                  <div className="ml-4 mt-1 bg-gray-100 rounded-lg shadow-md text-green-800">
                    <Link
                      to="/type/bio"
                      className="block px-4 py-2 hover:bg-green-50 transition"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Bio Fertilizers
                    </Link>
                    <Link
                      to="/type/organic"
                      className="block px-4 py-2 hover:bg-green-50 transition"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Organic
                    </Link>
                    <Link
                      to="/type/other"
                      className="block px-4 py-2 hover:bg-green-50 transition"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Other Types
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Logout Button at Bottom */}
          <button
            onClick={handleLogout}
            className="m-6 py-2 text-center text-l px-6 bg-green-200 hover:bg-green-300 rounded-md transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Top Bar */}
      <header className="flex items-center justify-between bg-green-50 text-green-800 px-6 py-4 shadow-md fixed top-0 left-0 w-full z-[1000] md:pl-64">
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Menu Button for Mobile */}
          <button
            className="md:hidden text-2xl text-green-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-lg px-3 py-2 w-full sm:w-1/2 md:w-96 border border-green-200">
            <HiOutlineSearch className="text-green-600 mr-2" />
            <input
              type="text"
              placeholder="Search fertilizers..."
              className="outline-none w-full bg-transparent"
            />
          </div>
        </div>

        {/* Profile Dropdown */}
        <div ref={profileRef} className="relative z-[2000] ml-4 flex-shrink-0">
          <button
            onClick={() => setProfileDropdown((prev) => !prev)}
            className="flex items-center justify-center border border-green-300 p-2 rounded-full hover:bg-green-200 transition bg-white shadow-sm"
            style={{ minWidth: "44px", minHeight: "44px" }}
          >
            <HiOutlineUser className="text-2xl text-green-800" />
          </button>

          {profileDropdown && (
            <div
              className="absolute right-0 top-full mt-3 w-48 bg-white text-green-800 rounded-xl shadow-xl border border-green-100 animate-fadeIn"
              style={{ zIndex: 9999 }}
            >
              <Link
                to="/edit-profile"
                className="block px-4 py-2 hover:bg-green-50 transition"
                onClick={() => setProfileDropdown(false)}
              >
                Edit Profile
              </Link>
              <button
                onClick={() => {
                  setProfileDropdown(false);
                  handleLogout();
                }}
                className="w-full text-left px-4 py-2 hover:bg-green-50 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
