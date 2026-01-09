import React, { useState } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#' },
    { name: 'Consulting', href: '#' },
    { name: 'Industries', href: '#', active: true },
    { name: 'Insights', href: '#' },
    { name: 'About Us', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Utility Bar (Hidden on Mobile) */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-100 py-1">
        <div className="container mx-auto px-6 flex justify-end text-xs text-gray-500 gap-6">
          <a href="#" className="hover:text-red-600 transition">Global</a>
          <a href="#" className="hover:text-red-600 transition">Newsroom</a>
          <a href="#" className="hover:text-red-600 transition">Careers</a>
          <a href="#" className="hover:text-red-600 transition">Investors</a>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4 lg:py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-2xl group-hover:bg-linear-to-r group-hover:from-red-600 group-hover:to-orange-500 transition-colors duration-300">
            K
          </div>
          <span className="text-2xl font-bold tracking-tight hidden sm:block">Kyndryl</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition ${
                link.active
                  ? 'text-black border-b-2 border-red-600 -mb-1'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-black p-1" aria-label="Search">
            <Search className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-black p-1 hidden sm:block" aria-label="Global Region">
            <Globe className="w-6 h-6" />
          </button>
          
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-800 focus:outline-none p-1"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 shadow-lg animate-fade-in-down">
          <div className="flex flex-col py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium ${
                  link.active ? 'text-black font-bold' : 'text-gray-700'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 text-sm text-gray-500">
              Region: Global (EN)
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;