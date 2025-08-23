import React, { useState } from "react";

export default function HybridNavbar() {
  // --- STATE ---
  // This is the core of our component's interactivity.
  // 'isOpen' is a boolean (true or false) that we'll use to show or hide the mobile menu.
  // 'setIsOpen' is the function we call to change its value.
  const [isOpen, setIsOpen] = useState(false);

  // --- DATA ---
  // An array of our navigation links. Keeping data like this makes it easy to manage.
  const items = ["Home", "Features", "Pricing", "About"];

  // --- HANDLER FUNCTION ---
  // A simple function to flip the boolean value of 'isOpen'.
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 font-sans">
      {/* 1. DESKTOP NAVBAR */}
      {/* This is a standard navigation bar that only appears on large screens (lg:flex) */}
      <header className="hidden lg:flex justify-center bg-white shadow-sm sticky top-0 z-30">
        <div className="w-full max-w-6xl px-6">
          <nav className="flex h-16 items-center justify-between">
            <a href="#" className="text-xl font-bold text-emerald-600">
              Brand
            </a>
            <ul className="flex space-x-8">
              {/* We map over the 'items' array to create the list items */}
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-emerald-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* 2. MOBILE-ONLY ELEMENTS */}
      {/* This container and its contents will be hidden on large screens (lg:hidden) */}
      <div className="lg:hidden">
        {/* The main button to open/close the menu */}
        <button
          onClick={toggleMenu} // When clicked, this calls our toggle function
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {/* A simple animated Hamburger/Close Icon */}
          <div className="relative h-6 w-6">
            <span
              className={`absolute block h-0.5 w-full bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-1"
              }`}
            ></span>
            <span
              className={`absolute top-1/2 block h-0.5 w-full -translate-y-1/2 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 w-full bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-1"
              }`}
            ></span>
          </div>
        </button>

        {/* 3. THE OVERLAY MENU */}
        {/* This is the magic of conditional rendering. The entire div and its children */}
        {/* will only be rendered in the DOM if 'isOpen' is true. */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
            // You can also add an onClick here to close the menu if you click the background
            // onClick={toggleMenu}
          >
            <nav>
              <ul className="flex flex-col items-center space-y-8">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-2xl text-gray-700 hover:text-emerald-500"
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Example Page Content */}
      <main className="p-8">
        <h1 className="text-3xl font-bold text-gray-800">Page Content</h1>
        <p className="mt-4 text-gray-600">
          This is a simplified version for learning React. Click the button on
          mobile!
        </p>
      </main>
    </div>
  );
}

/*

import React, { useState } from "react";

export default function NavbarBasic() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo / Brand *
          <a href="#" className="flex items-center text-lg font-bold">
            <div className="h-10 w-10 bg-emerald-500 flex items-center justify-center text-white rounded">
              B
            </div>
            <span className="ml-2">Brand</span>
          </a>

          {/* Mobile Menu Button *
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block lg:hidden"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-black"></span>
              <span className="block h-0.5 w-6 bg-black"></span>
              <span className="block h-0.5 w-6 bg-black"></span>
            </div>
          </button>

          {/* Nav Links *
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } absolute left-0 top-16 w-full bg-white lg:static lg:flex lg:w-auto lg:space-x-6`}
          >
            {["Home", "Features", "Pricing", "About"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block px-6 py-2 hover:text-emerald-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}



*/
