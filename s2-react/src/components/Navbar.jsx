import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo1.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="S2Srijantech Logo" />
          <span className="logo-text">S2Srijantech</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav */}
        <div className={`mobile-nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
