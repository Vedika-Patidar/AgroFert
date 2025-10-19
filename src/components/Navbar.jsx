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
import { fertilizers } from "../data"; // Make sure your sample data includes a `type` property

const Navbar = () => {
  const [typeDropdown, setTypeDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const profileRef = useRef(null);

  const handleLogout = () => {
    navigate("/");
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    // Find fertilizer by exact or partial match
    const fert =
      fertilizers.find((f) =>
        f.name.toLowerCase().includes(search.trim().toLowerCase())
      ) || null;

    if (fert) {
      navigate(`/type/${fert.type.toLowerCase()}`);
    } else {
      // Redirect to 'other types' if not found
      navigate("/type/other");
    }

    setSearch("");
    setSidebarOpen(false); // Close sidebar on mobile
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
    <div>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-green-100 text-green-800 flex flex-col justify-between shadow-lg transform transition-transform duration-300 z-40
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-64 w-64`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            {/* Logo */}
            <div className="text-2xl font-bold tracking-wide p-6 border-b border-green-100">
              🌾 AgroFert Info
            </div>

            {/* Nav Links */}
            <div className="flex flex-col mt-6 text-lg font-medium">
              <Link
                to="/dashboard"
                className="px-6 py-3 hover:bg-green-200 transition"
                onClick={() => setSidebarOpen(false)}
              >
                Dashboard
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
                  <div className="ml-4 mt-1 bg-gray-100 rounded-lg shadow-md text-green-800 font-normal text-sm">
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
                      to="/type/chemical"
                      className="block px-4 py-2 hover:bg-green-50 transition"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Chemical Fertilizers
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

          {/* Logout Button */}
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
      <header className="fixed top-0 left-0 w-full md:ml-64 md:w-[calc(100%-16rem)] flex items-center justify-between bg-green-50 px-4 md:px-6 py-4 shadow-md z-[1000]">
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-green-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-lg px-3 py-2 w-full sm:w-1/2 md:w-96 border border-green-200"
          >
            <HiOutlineSearch className="text-green-600 mr-2" />
            <input
              type="text"
              placeholder="Search fertilizers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none w-full bg-transparent"
            />
          </form>
        </div>

        {/* Profile Dropdown */}
        <div
          ref={profileRef}
          className="relative ml-4 flex-shrink-0 flex items-center justify-center"
        >
          <button
            onClick={() => setProfileDropdown((prev) => !prev)}
            className="flex items-center justify-center border border-green-300 p-2 rounded-full hover:bg-green-200 transition bg-white shadow-sm"
            style={{ minWidth: "44px", minHeight: "44px" }}
          >
            <HiOutlineUser className="text-2xl text-green-800" />
          </button>

         
        </div>
      </header>
    </div>
  );
};

export default Navbar;
