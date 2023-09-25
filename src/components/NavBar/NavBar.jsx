import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import logo from "./../../assets/logo.png";
import { useState } from "react";

const NavBar = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  return (
    <>
      <nav className="container mx-auto px-6 sm:px-10 lg:px-20 pt-8">
        <div className="flex justify-between items-center relative">
          <Link to="/">
            <img className="w-40 md:w-60" src={logo} alt="" />
          </Link>
          <button
            onClick={() => setShowMenuBar(!showMenuBar)}
            className="text-3xl md:hidden"
          >
            {showMenuBar ? <IoClose /> : <HiMenu />}
          </button>
          <div
            className={`text-lg font-semibold flex flex-col md:flex-row bg-white items-center gap-10 absolute md:relative ${
              showMenuBar ? "mt-72 w-full p-5" : "hidden"
            } md:flex md:mt-0 md:w-auto md:p-0`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500 underline" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/donation"
              className={({ isActive }) =>
                isActive ? "text-red-500 underline" : ""
              }
            >
              Donation
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive ? "text-red-500 underline" : ""
              }
            >
              Statistics
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
