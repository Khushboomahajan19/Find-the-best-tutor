import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-black bg-opacity-50 text-white p-4 backdrop-blur-0 absolute w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Tutify</h1>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
