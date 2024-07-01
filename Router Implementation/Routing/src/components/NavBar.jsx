import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-lg">
      <nav>
        <ul className="flex items-center justify-around space-x-6">
          <li className="list-none">
            <Link
              to="/Home"
              className="transform cursor-pointer text-lg font-semibold text-white transition duration-300 ease-in-out hover:scale-110 hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/Category"
              className="transform cursor-pointer text-lg font-semibold text-white transition duration-300 ease-in-out hover:scale-110 hover:text-gray-300"
            >
              Categories
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/Product"
              className="transform cursor-pointer text-lg font-semibold text-white transition duration-300 ease-in-out hover:scale-110 hover:text-gray-300"
            >
              Product
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/SignUp"
              className="transform cursor-pointer text-lg font-semibold text-white transition duration-300 ease-in-out hover:scale-110 hover:text-gray-300"
            >
              SignUp
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/LogIn"
              className="transform cursor-pointer text-lg font-semibold text-white transition duration-300 ease-in-out hover:scale-110 hover:text-gray-300"
            >
              LogIn
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
