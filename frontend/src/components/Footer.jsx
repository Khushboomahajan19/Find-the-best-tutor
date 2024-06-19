import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          Contact us: tutify@email.com
        </div>
        <div className="social-links flex">
          {/* Add your social media icons here */}
          {/* Example:
          <a href="#" className="text-white mr-4">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white mr-4">
            <i className="fab fa-twitter"></i>
          </a>
          */}
        </div>
      </div>
      <div className="footer-bottom text-center mt-5">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
