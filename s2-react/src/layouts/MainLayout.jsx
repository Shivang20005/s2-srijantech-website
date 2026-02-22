import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBg from '../components/AnimatedBg';
import { Mail, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';

const Layout = ({ children }) => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll States
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    // Custom Cursor Logic
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.to(cursorDotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="app-layout">
      {/* Custom Cursor */}
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="custom-cursor-dot" ref={cursorDotRef}></div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'var(--accent-glow)', zIndex: 9999, originX: 0 }}
      />

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

      {/* Action Buttons Group */}
      <div className="fixed-actions">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="scroll-top-btn"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        <a
          href="mailto:S2srijantech@gmail.com"
          className="email-float-btn"
          title="Send us an email"
        >
          <Mail size={32} />
        </a>
      </div>
    </div>
  );
};

export default Layout;
