"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-700 w-full sticky top-0 z-50">
      <nav className="h-20 w-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-40 gap-4 md:gap-8 lg:gap-20 text-white">
        {/* Logo/Home */}
        <button
          onClick={() => router.push("/")}
          className="flex-shrink-0 hover:opacity-80 transition"
        >
          <img
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 py-2 px-2 rounded-full cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYQe7sk8paP8GwcE7D6iEMSmj82HEVN8lZg&s"
            alt="Logo"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-20 flex-1 justify-center">
          <button
            onClick={() => router.push("/")}
            className="hover:text-gray-300 transition font-medium cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => router.push("/weather")}
            className="hover:text-gray-300 transition font-medium cursor-pointer"
          >
            Weather
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="hover:text-gray-300 transition font-medium cursor-pointer"
          >
            Contact
          </button>
          <button
            onClick={() => router.push("/json")}
            className="hover:text-gray-300 transition font-medium cursor-pointer"
          >
            Data
          </button>
          <button
            onClick={() => router.push("/aboutus")}
            className="hover:text-gray-300 transition font-medium cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => router.push("/loc")}
            className="hover:text-gray-300 transition font-medium cursor-pointer"
          >
            Locations
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1 ml-auto"
        >
          <span className={`h-1 w-6 bg-white transition ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-1 w-6 bg-white transition ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-1 w-6 bg-white transition ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 flex flex-col gap-3">
          <button
            onClick={() => {
              router.push("/");
              setIsMenuOpen(false);
            }}
            className="block text-left py-2 hover:text-gray-300 transition font-medium cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => {
              router.push("/weather");
              setIsMenuOpen(false);
            }}
            className="block text-left py-2 hover:text-gray-300 transition font-medium cursor-pointer"
          >
            Weather
          </button>
          <button
            onClick={() => {
              router.push("/contact");
              setIsMenuOpen(false);
            }}
            className="block text-left py-2 hover:text-gray-300 transition font-medium cursor-pointer"
          >
            Contact
          </button>
          <button
            onClick={() => {
              router.push("/json");
              setIsMenuOpen(false);
            }}
            className="block text-left py-2 hover:text-gray-300 transition font-medium cursor-pointer"
          >
            Data
          </button>
          <button
            onClick={() => {
              router.push("/aboutus");
              setIsMenuOpen(false);
            }}
            className="block text-left py-2 hover:text-gray-300 transition font-medium cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => {
              router.push("/loc");
              setIsMenuOpen(false);
            }}
            className="block text-left py-2 hover:text-gray-300 transition font-medium cursor-pointer"
          >
            Locations
          </button>
        </div>
      )}
    </header>
  );
}
