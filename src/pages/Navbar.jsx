import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  let location = useLocation();
  console.log(location);

  let handleLogOut = () => navigate("/");

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}

          <div className="text-white text-2xl font-bold tracking-wide">
            <span className="hover:scale-105 transition-transform duration-300">
              📜 Quotes
            </span>
          </div>

          {/* Search */}
          <div className="flex-1 mx-6">
            <input
              type="text"
              placeholder="Search quotes..."
              className="w-full md:w-80 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white text-gray-800 bg-amber-50"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 text-white font-medium">
            {location.pathname == "/home/create" ? (
              ""
            ) : (
              <Link
                to="/home/create"
                className="hover:text-gray-200 transition duration-300"
              >
                Create
              </Link>
            )}
            {location.pathname == "/home/create" ? (
               (
              <Link
                to="/home"
                className="hover:text-gray-200 transition duration-300"
              >
                Back
              </Link>
            )
            ) :""}

            <button
              className="bg-white text-indigo-600 px-4 py-1.5 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>

          {/* Mobile menu placeholder */}
          <div className="md:hidden text-white">
            {/* Optionally add hamburger menu here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
