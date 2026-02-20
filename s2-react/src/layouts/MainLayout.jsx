import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBg from '../components/AnimatedBg';
import { Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="app-layout">
      <AnimatedBg />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* Direct Email Button */}
      <a
        href="mailto:S2srijantech@gmail.com"
        className="email-float-btn"
        title="Send us an email"
      >
        <Mail size={32} />
      </a>
    </div>
  );
};

export default Layout;
