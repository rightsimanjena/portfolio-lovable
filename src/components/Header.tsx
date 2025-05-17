
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-bold text-xl text-portfolio-dark">
          <span className="text-portfolio-purple">Right</span> Siman Jena
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-600 hover:text-portfolio-purple transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Button (Desktop) */}
        <Button
          asChild
          className="hidden md:flex bg-portfolio-purple hover:bg-portfolio-blue transition-colors"
        >
          <a href="#contact">Let's Talk</a>
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <nav className="flex flex-col py-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="px-6 py-3 font-medium text-gray-600 hover:text-portfolio-purple hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={toggleMenu}
                className="mx-6 mt-3 py-3 bg-portfolio-purple text-white text-center rounded-md hover:bg-portfolio-blue transition-colors"
              >
                Let's Talk
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
