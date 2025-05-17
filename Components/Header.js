'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          <div className="logo-container">
            {/* College logo */}
            <a href="/" className="logo">
              <GraduationCap className="logo-icon" />
              <span>XYZ College</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#admission" className="nav-link">Admission</a>
            <a href="#departments" className="nav-link">Departments</a>
            <a href="#contact" className="nav-link">Contact Us</a>
            <a href="#login" className="login-btn">Login</a>
          </nav>

          {/* Mobile menu button */}
          <div className="mobile-menu-toggle">
            <button
              onClick={toggleMenu}
              className="menu-button"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-nav"
          >
            <div className="mobile-nav-links">
              <a
                href="#about"
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#admission"
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                Admission
              </a>
              <a
                href="#departments"
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                Departments
              </a>
              <a
                href="#contact"
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
              <a
                href="#login"
                className="mobile-login-btn"
                onClick={toggleMenu}
              >
                Login
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;