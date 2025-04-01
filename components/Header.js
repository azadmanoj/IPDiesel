"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-gradient-to-r from-indigo-900 via-[#1f2969] to-blue-800 text-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 shadow-lg" : "py-4"
      }`}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <Link href="/" className="relative group flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="IPDiesel Logo"
            className="h-10 sm:h-12 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X
              size={24}
              className="transition-transform duration-300 rotate-90"
            />
          ) : (
            <Menu size={24} className="transition-transform duration-300" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex sm:items-center">
          <ul className="flex space-x-8 text-base font-medium">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="relative group py-2 px-1 block"
                >
                  <span className="transition-colors duration-300 group-hover:text-blue-200">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav
          className={`sm:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-indigo-900 via-[#1f2969] to-blue-800 shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col py-2 px-4">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <li key={item} className="py-2">
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="block relative group py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="transition-colors duration-300 group-hover:text-blue-200">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
