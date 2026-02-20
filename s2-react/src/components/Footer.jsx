import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import logo from '../assets/images/logo1.jpeg';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-info">
          <Link to="/" className="logo" style={{ color: 'white' }}>
            <img src={logo} alt="S2Srijantech Logo" />
            <span className="logo-text">S2Srijantech</span>
          </Link>
          <p>Leading the way in AI innovation and professional technology services. We build smart solutions for a smarter world.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/share/1759fgpmnn/" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            <a href="https://x.com/SSrijantec14951" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Github size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services">AI Solutions</Link></li>
            <li><Link to="/services">Web Tech</Link></li>
            <li><Link to="/services">Cyber Security</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <a href="mailto:S2srijantech@gmail.com" className="footer-contact-link">
                <Mail size={16} /> S2srijantech@gmail.com
              </a>
            </li>
            <li><Phone size={16} /> +91 9457988148</li>
            <li><Phone size={16} /> +91 6396989128</li>
            <li><MapPin size={16} /> C.B. Ganj, Bareilly</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} S2Srijantech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
