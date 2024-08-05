import React, { useState } from 'react';
import useTheme from '../utils/useTheme';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();
  const [showAlert, setShowAlert] = useState(false);

  const handleComingSoonClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  return (
    <>
      <div className="navbar bg-base-300 bg-opacity-75 backdrop-blur fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-100 min-h-screen z-[1] mt-3 w-52 shadow"
            >
              <li>
                <Link to="services" smooth={true} duration={500} offset={-70}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="team" smooth={true} duration={500} offset={-70}>
                  Team
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} offset={-70}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-2xl font-semibold ml-4">
            <img src="/KaTechLogoWText.png" alt="logo" className="h-14 w-full" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="services" className="text-base" smooth={true} duration={500} offset={-70}>
                Services
              </Link>
            </li>
            <li>
              <Link to="team" className="text-base" smooth={true} duration={500} offset={-70}>
                Team
              </Link>
            </li>
            <li>
              <Link to="contact" className="text-base" smooth={true} duration={500} offset={-70}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-4">
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                />
              </svg>
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          <button
            className="btn bg-katech-red border-katech-red text-white hover:bg-red-600 hover:border-red-600"
            onClick={handleComingSoonClick}
          >
            Coming Soon!
          </button>
        </div>
      </div>

      {showAlert && (
        <div role="alert" className="alert alert-info fixed bottom-4 right-4 max-w-xs z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>We are not ready yet but we will be soon!</span>
        </div>
      )}
    </>
  );
};

export default Navbar;
