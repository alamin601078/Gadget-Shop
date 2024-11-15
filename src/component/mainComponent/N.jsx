import { useState } from "react";

const N = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    return (
        <header className="bg-gray-800">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="text-white text-2xl font-semibold">MyGadgetShop</a>
  
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-orange-400">Home</a>
              
              {/* Dropdown Menu */}
              <div className="relative">
                <button 
                  onClick={toggleDropdown} 
                  className="text-white hover:text-orange-400 focus:outline-none"
                >
                  Products
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 space-y-2 bg-gray-800 text-white rounded shadow-lg">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Smartphones</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Laptops</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Accessories</a>
                  </div>
                )}
              </div>
  
              <a href="#" className="text-white hover:text-orange-400">About Us</a>
              <a href="#" className="text-white hover:text-orange-400">Contact</a>
            </div>
  
            {/* Hamburger Icon (Mobile View) */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white text-3xl">
                &#9776;
              </button>
            </div>
          </div>
  
          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 text-center space-y-4`}>
            <a href="#" className="text-white hover:text-orange-400">Home</a>
            <a href="#" className="text-white hover:text-orange-400">Products</a>
            <a href="#" className="text-white hover:text-orange-400">About Us</a>
            <a href="#" className="text-white hover:text-orange-400">Contact</a>
          </div>
        </nav>
      </header>
    );
};

export default N;