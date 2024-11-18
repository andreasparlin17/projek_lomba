import React, { useState } from "react";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const heroHeight = document.getElementById('hero-image').offsetHeight;

      if (window.scrollY > heroHeight - 50) {
        navbar.classList.add('bg-neutral-800', 'text-white', 'shadow-md');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('bg-neutral-800', 'shadow-md');
        navbar.classList.add('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 bg-transparent transition-colors duration-300"
    >
      <div className="flex justify-between items-center p-3">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <img
            alt="Destino Logo"
            className="inline-block mr-2"
            height="50"
            src="/assets/logo.png"
            width="50"
          />
          <div className="tulisan-logo">Destino</div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          id="hamburger"
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          id="menu"
          className={`${
            menuOpen ? "block" : "hidden"
          } space-x-6 absolute sm:relative top-16 left-0 sm:top-auto sm:left-auto bg-black sm:bg-transparent w-full sm:w-auto text-center sm:text-left sm:flex sm:items-center`}
        >
          <a
            className="block sm:inline hover:underline py-2 sm:py-0 text-white"
            href="#"
          >
            Home
          </a>
          <a
            className="block sm:inline hover:underline py-2 sm:py-0 text-white"
            href="#"
          >
            Find Route
          </a>
          <a
            className="block sm:inline hover:underline py-2 sm:py-0 text-white"
            href="#"
          >
            Bus Routes
          </a>
          <a
            className="block sm:inline hover:underline py-2 sm:py-0 text-white"
            href="#"
          >
            About Us
          </a>
          <a
            className="block sm:inline hover:underline py-2 sm:py-0 text-white"
            href="#"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
