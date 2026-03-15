import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Home, Info, Cpu, Briefcase,
  HelpCircle, Mail, Phone, Facebook,
  Twitter, Linkedin, Github
} from 'lucide-react';
import logo from '../assets/images/logo1.jpeg';
import gsap from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Magnetic Effect
  useEffect(() => {
    const links = document.querySelectorAll('.nav-link-item');

    links.forEach(link => {
      const onMouseMove = (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(link, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const onMouseLeave = () => {
        gsap.to(link, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      };

      link.addEventListener('mousemove', onMouseMove);
      link.addEventListener('mouseleave', onMouseLeave);

      return () => {
        link.removeEventListener('mousemove', onMouseMove);
        link.removeEventListener('mouseleave', onMouseLeave);
      };
    });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <Info size={18} /> },
    { name: 'Services', path: '/services', icon: <Cpu size={18} /> },
    { name: 'Case Studies', path: '/projects', icon: <Briefcase size={18} /> },
    { name: 'Why Choose Us', path: '/why-choose-us', icon: <HelpCircle size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <header className={isScrolled ? 'scrolled' : ''} ref={navRef}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="S2Srijantech Logo" />
          <span className="logo-text">S2Srijantech</span>
        </Link>

        {/* Desktop Nav - Pushed to the right */}
        <div className="nav-wrapper">
          <nav className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link-item ${location.pathname === link.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-text">{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Toggle */}
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav - All buttons visible here */}
        <div className={`mobile-nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <nav className="mobile-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>

            <div className="mobile-contact-info">
              <p><Mail size={16} /> s2srijantech@gmail.com</p>
              <p><Phone size={16} /> +91 9457988148</p>

              <div className="mobile-socials">
                <a href="https://www.facebook.com/share/1759fgpmnn/" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com/SSrijantec149510" target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} />
                </a>
                <a href="#">
                  <Linkedin size={20} />
                </a>
                <a href="#">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
