"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-between p-6 z-10 text-white bg-gray-800">
        <div className="font-bold text-lg">LOGO HERE</div>
        <div className="hidden md:flex gap-4">
          <div className="hover:text-orange-400 cursor-pointer">Home</div>
          <div className="hover:text-orange-400 cursor-pointer">Services</div>
          <div className="hover:text-orange-400 cursor-pointer">Blog</div>
          <div className="hover:text-orange-400 cursor-pointer">Contact</div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center md:hidden z-10">
          <div className="py-2 hover:text-orange-400 cursor-pointer">
            <a>Home</a>
          </div>
          <div className="py-2 hover:text-orange-400 cursor-pointer">
            <a>Services</a>
          </div>
          <div className="py-2 hover:text-orange-400 cursor-pointer">
            <a>Blog</a>
          </div>
          <div className="py-2 hover:text-orange-400 cursor-pointer">
            <a>Contact</a>
          </div>
        </div>
      )}
    </>
  );
}
