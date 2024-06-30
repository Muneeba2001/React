import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <nav className="flex justify-around">
        <ul className="flex space-x-4">
          <li className="list-none">
            <Link
              to="/Home"
              className="text-white hover:text-gray-400 hover:bg-slate-600 m-2 p-4"
            >
              Home
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/Contact"
              className="text-white hover:text-gray-400 hover:bg-slate-600 m-2 p-4"
            >
              Contact
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/About"
              className="text-white hover:text-gray-400 hover:bg-slate-600 m-2 p-4"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
