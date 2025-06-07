import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { regions } from '../data/destinations';
import { useBooking } from '../context/BookingContext';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { openBooking } = useBooking();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/contact" || location.pathname === "/about";
  const navTextColor = isHome
    ? (isScrolled ? 'text-gray-900' : 'text-white')
    : 'text-gray-900';
  
  const handleGetQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openBooking();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Dropdown handlers for desktop
  const handleDestinationsEnter = () => setShowDropdown(true);
  const handleDestinationsLeave = () => setShowDropdown(false);


  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHome
          ? (isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4')
          : 'bg-white shadow-md py-2'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              SIT <span className="text-primary-dark">Latur</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className={`${navTextColor} hover:text-red-600 transition-colors font-medium`}>
              Home
            </a>
            <div className="relative group"
              onMouseEnter={handleDestinationsEnter}
              onMouseLeave={handleDestinationsLeave}
            >
              <button
                className={`flex items-center ${navTextColor} hover:text-red-600 transition-colors font-medium`}
                type="button"
              >
                Destinations <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    {regions.map(region => (
                      <div key={region.region} className="dropdown-column">
                        <div className="dropdown-region">{region.region}</div>
                        <ul>
                          {region.countries.map(country => (
                            <li key={country} className="dropdown-country">
                              <a href={`/destinations/${country.replace(/\s+/g, '-').toLowerCase()}`}>{country}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-2 border-t border-gray-100">
                    <a href="/all-destinations" className="text-primary hover:text-primary-dark text-sm font-medium">
                      View All Destinations
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a href="/packages" className={`${navTextColor} hover:text-red-600 transition-colors font-medium`}>
              Packages
            </a>
            <a href="/about" className={`${navTextColor} hover:text-red-600 transition-colors font-medium`}>
              About Us
            </a>
            <a href="/contact" className={`${navTextColor} hover:text-red-600 transition-colors font-medium`}>
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <button
              onClick={handleGetQuoteClick}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition-colors shadow hover:shadow-md"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden block bg-white shadow-lg">
          <div className="container mx-auto px-4 pt-4 pb-6">
            <div className="space-y-4">
              <a href="/" className="block py-2 text-gray-800 font-medium">Home</a>
              <a href="/packages" className="block py-2 text-gray-800 font-medium">Packages</a>
              <a href="/about" className="block py-2 text-gray-800 font-medium">About Us</a>
              <a href="/contact" className="block py-2 text-gray-800 font-medium">Contact</a>
              <div className="pt-2">
                <button
                  onClick={handleGetQuoteClick}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-center transition-colors font-medium"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;