import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, Send, ShieldCheck, Cpu } from 'lucide-react';
import logo from '../assets/images/logo1.jpeg';

const Footer = () => {
  return (
    <footer className="footer-premium">
      <div className="container">
        <div className="footer-top-mesh">
          <div className="footer-branding">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="S2Srijantech AI Logo" />
              <span>S2Srijantech Hub</span>
            </Link>
            <p className="footer-mission">Architecting the digital foundations of the next decade. We deliver mission-critical AI engineering and high-performance software solutions for a connected global future.</p>
            <div className="social-glow-links">
              <a href="https://www.facebook.com/share/1759fgpmnn/" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
              <a href="https://x.com/SSrijantec14951/" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Github size={20} /></a>
            </div>
          </div>

          <div className="footer-nav-group">
            <div className="footer-column">
              <h4>Intelligence</h4>
              <ul>
                <li><Link to="/services">Neural Architecture</Link></li>
                <li><Link to="/services">Distributed Systems</Link></li>
                <li><Link to="/projects">Case Studies</Link></li>
                <li><Link to="/about">Vision 2030</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/why-choose-us">The Edge</Link></li>
                <li><Link to="/contact">Contact HQ</Link></li>
                <li><Link to="/projects">Implementations</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Intelligence Briefing</h4>
            <p>Get the latest engineering insights from our AI lab directly to your terminal.</p>
            <form className="newsletter-form-premium" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="logic@enterprise.com" required />
              <button type="submit"><Send size={18} /></button>
            </form>
            <div className="trust-badges-footer">
              <div className="badge"><ShieldCheck size={14} /> Data Sovreignty</div>
              <div className="badge"><Cpu size={14} /> Edge Computing</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-line">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} S2Srijantech AI Engineering. All Rights Reserved.</p>
          </div>
          <div className="legal-links">
            <a href="#">Security Protocol</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Architecture</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
