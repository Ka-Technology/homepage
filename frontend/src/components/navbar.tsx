import { useState, useEffect, useRef } from 'react';
import useTheme from '../utils/useTheme';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();
  const [showAlert, setShowAlert] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleComingSoonClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: { target: any; }) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="navbar bg-base-300 bg-opacity-75 backdrop-blur fixed top-0 left-0 right-0 z-40 flex justify-between items-center">
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} className="btn btn-ghost absolute left-0 ml-4">
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
          </button>
        </div>

        <div className="flex-1 lg:hidden flex justify-center">
          <div className="text-2xl font-semibold">
            <img src="/KaTechLogoWText.png" alt="logo" className="h-14" />
          </div>
        </div>

        <div className="navbar-start hidden lg:flex">
          <div className="text-2xl font-semibold ml-4">
            <img src="/KaTechLogoWText.png" alt="logo" className="h-14" />
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

        <div className="navbar-end hidden lg:flex">
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
            Coming Soon
          </button>
        </div>
      </div>

      {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>}

      <div
        ref={menuRef}
        className={`fixed shadow top-0 left-0 w-64 h-full bg-base-100 z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden flex flex-col`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="menu p-4 mt-12 text-xl flex-grow">
          <li className='mb-2'>
            <Link to="services" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className='mb-2'>
            <Link to="team" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
              Team
            </Link>
          </li>
          <li className='mb-2'>
            <Link to="contact" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="p-4 border-gray-200 mt-auto flex justify-center">
          <label className="flex cursor-pointer gap-2 items-center">
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
