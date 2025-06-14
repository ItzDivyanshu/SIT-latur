import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">SIT Latur</h3>
            <p className="text-white/80 mb-4">
              South International Travels (SIT) offers seamless travel experiences, top-tier service, and a versatile fleet tailored to your every need.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-orange-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/80 hover:text-orange-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-orange-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-orange-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <a href="/destinations/rajasthan" className="text-white/80 hover:text-orange-400 transition-colors">Rajasthan</a>
              </li>
              <li>
                <a href="/destinations/kashmir" className="text-white/80 hover:text-orange-400 transition-colors">Kashmir</a>
              </li>
              <li>
                <a href="/destinations/goa" className="text-white/80 hover:text-orange-400 transition-colors">Goa</a>
              </li>
              <li>
                <a href="/destinations/thailand" className="text-white/80 hover:text-orange-400 transition-colors">Thailand</a>
              </li>
              <li>
                <a href="/destinations/dubai" className="text-white/80 hover:text-orange-400 transition-colors">Dubai</a>
              </li>
              <li>
                <a href="/destinations/singapore" className="text-white/80 hover:text-orange-400 transition-colors">Singapore</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Shop No.02, Avanti Nagar Ring Road, Beside Kailash Bar, Opp. MIDC Police Station, MIDC, Latur, Maharashtra – 413512</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-400 mr-2" />
                <span className="text-white/80">+91 8178840574</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-400 mr-2" />
                <span className="text-white/80">southinternationaltravels@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} SIT Latur. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm text-white/70">
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;