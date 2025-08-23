import { Link, NavLink } from "react-router";
import { useTheme } from "../ui/useTheme";
import { useState } from "react";

import { Menu, X } from "lucide-react";

function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="w-full bg-blue-300 border-b-blue-500 py-3 hidden md:block dark:bg-green-700">
        <div className="max-w-6xl mx-auto px-6">
          <nav className=" flex items-center justify-between">
            <NavLink className="text-xl font-bold">MERN Notes</NavLink>
            <ul className="flex items-center gap-4 font-bold">
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="">
                  Logout
                </NavLink>
              </li>
              <button
                onClick={toggle}
                className="border px-4 py-2 cursor-pointer ml-4"
              >
                {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
              </button>
            </ul>
          </nav>
        </div>
      </header>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 rounded-full bg-blue-500 text-white shadow-lg dark:bg-green-600"
      >
        {!open ? <Menu className="w-6 h-6" /> : <X className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      {open && (
        <div className="md:hidden fixed bottom-20 right-6 z-40 p-4 rounded-xl shadow-lg bg-white dark:bg-zinc-900 border dark:border-zinc-700">
          <nav className="flex dark:text-white flex-col gap-3 text-md font-bold">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
              onClick={() => setOpen(!true)}
            >
              Login
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
              onClick={() => setOpen(!true)}
            >
              Profile
            </NavLink>
            <button
              onClick={toggle}
              className="mt-4 border px-2 py-1 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white"
            >
              {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
