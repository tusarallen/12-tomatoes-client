/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import imageLogo from "../../../../public/restaurent.jpg";
import { AuthContext } from "../../../components/Providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <nav className="bg-gray-100 w-11/12 mx-auto rounded-md font-mono">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start md:justify-between md:items-center">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center gap-5">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img className="bg-gray-100" src={imageLogo} />
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Link to="/">
                    <h1 className="text-[#1A1919] font-bold text-2xl">
                      12 Toma
                      <span className="bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">
                        toes
                      </span>
                    </h1>
                  </Link>
                  <p className="text-lg font-bold">Restaurant</p>
                </div>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
              <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium underline"
                      : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/blog"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium underline"
                      : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  }
                >
                  Blog
                </NavLink>
                {user ? (
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          title={user && user.displayName}
                          src={user && user.photoURL}
                        />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link to="/profile" className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleLogin} to="/">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium underline"
                        : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                    }
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-[#1A1919] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>

          <Link
            to="/blog"
            className="text-[#1A1919] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Blog
          </Link>

          {user ? (
            <div className="dropdown dropdown-start">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    title={user && user.displayName}
                    src={user && user.photoURL}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLogin} to="/">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium underline"
                  : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
