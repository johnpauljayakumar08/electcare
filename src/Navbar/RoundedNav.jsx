import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function RoundedNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Our Industries", href: "/industries" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-1 left-1/2 transform -translate-x-1/2 z-50 w-[100%] sm:w-[100%] max-w-5xl rounded-full md:rounded-xl">
      <div className="mx-auto px-4 sm:px-6  rounded-none md:rounded-xl lg:rounded-full backdrop-blur-sm border border-white/20 bg-gray-100">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-[#291571] font-bold text-lg">
            <img
              src="/svglogoplane.png"
              alt="Logo"
              className="h-26 w-auto rounded-full"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className="text-[#291571] font-medium transition-colors text-xl"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              className="px-4 py-2 cursor-pointer bg-[#291571] text-white rounded-full  transition-colors text-xl"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#291571] text-2xl"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[100%] left-0 w-full rounded-b-2xl bg-white/60 backdrop-blur-md p-3 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#291571] font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-4 cursor-pointer rounded-full transition-colors bg-[#291571] text-white md:bg-white contactbt"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
