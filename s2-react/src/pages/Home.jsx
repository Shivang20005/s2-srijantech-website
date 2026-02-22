import { motion } from 'framer-motion';
import { Brain, Code, BarChart3, ArrowRight, Users, Rocket, Globe, ShieldCheck, CheckCircle2, TrendingUp, Cpu, Server, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Founders from '../components/Founders';
import ParticleBackground from '../components/ParticleBackground';
import { useState, useEffect } from 'react';

const Home = () => {
  const [counts, setCounts] = useState({ projects: 0, efficiency: 0, accuracy: 0, reach: 0 });

  useEffect(() => {
    const duration = 2500;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        projects: Math.floor((15 / steps) * currentStep),
        efficiency: Math.floor((40 / steps) * currentStep),
        accuracy: Math.floor((99 / steps) * currentStep),
        reach: Math.floor((12 / steps) * currentStep)
      });
      if (currentStep >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Brain size={40} />,
      subheading: 'Neural Intelligence',
      title: 'Explainable AI Systems',
      desc: 'Architecting black-box-free AI solutions that drive real-world business decisions with 99.9% accuracy.'
    },
    {
      icon: <Cpu size={40} />,
      subheading: 'Foundational Engineering',
      title: 'Enterprise Web Scale',
      desc: 'Building ultra-high-performance web architectures designed for global scalability and zero-latency.'
    },
    {
      icon: <Server size={40} />,
      subheading: 'Scale & Security',
      title: 'Intelligent Automation',
      desc: 'Reducing operational overhead by up to 40% through custom-built automation engines.'
    }
  ];

  return (
    <div className="home-page">
      <section className="hero premium-hero">
        <ParticleBackground />
        <div className="hero-bg-overlay"></div>

        <div className="container hero-container">
          <motion.div
            className="hero-content-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="premium-tag"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glow-dot"></div>
              <span>Global AI Engineering Hub</span>
            </motion.div>

            <div className="reveal-mask">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
              >
                Architecting <span>Intelligent Systems</span> That Power the Next Decade.
              </motion.h1>
            </div>

            <p>We design and deploy mission-critical software and AI solutions that transform complex challenges into scalable global realities.</p>

            <div className="btn-group">
              <Link to="/contact" className="btn btn-primary large shadow-glow">
                Start a Conversation <ArrowRight size={20} />
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                Explore Intelligence Hub
              </Link>
            </div>

            <div className="hero-metrics">
              <div className="mini-metric">
                <span className="num">{counts.accuracy}%</span>
                <span className="lab">Prediction Accuracy</span>
              </div>
              <div className="metric-divider"></div>
              <div className="mini-metric">
                <span className="num">-{counts.efficiency}%</span>
                <span className="lab">Operational Cost</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-content">
            <span className="trust-label">Trusted by Innovation Leaders Globally</span>
            <div className="logo-track">
              {['TechCorp', 'GlobalSystems', 'FutureAI', 'NexGen', 'DataFlow', 'Axiom', 'Prism', 'TechCorp', 'GlobalSystems', 'FutureAI', 'NexGen', 'DataFlow', 'Axiom', 'Prism'].map((name, i) => (
                <div key={i} className="trust-logo">{name}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview premium-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Elite AI Engineering</h2>
            <p>Moving beyond generic digital solutions into the era of hyper-intelligence.</p>
          </motion.div>

          <div className="service-grid premium-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card glass-premium"
                whileHover={{ y: -15 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="icon-wrapper">{service.icon}</div>
                <span className="card-subheading">{service.subheading}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="card-arrow"><ArrowRight size={18} /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section premium-section alternate-bg">
        <div className="container">
          <div className="philosophy-grid">
            <motion.div
              className="philosophy-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="abstract-ai-cube">
                <div className="cube-face"></div>
                <div className="cube-glow"></div>
              </div>
            </motion.div>
            <motion.div
              className="philosophy-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="tag">Our DNA</span>
              <h2>Innovation Without Limits, Integrity Above All.</h2>
              <p>We don't just write code; we architect foundations. At S2Srijantech, every line of logic is measured by its impact on the human experience and business sustainability.</p>
              <ul className="impact-list-simple">
                <li><CheckCircle2 size={18} /> First-Principles Thinking</li>
                <li><CheckCircle2 size={18} /> Data Ethics & Privacy First</li>
                <li><CheckCircle2 size={18} /> Scalable Global Infrastructure</li>
              </ul>
              <Link to="/about" className="btn-text">Learn Our Story <ArrowRight size={16} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="stats-section parallax-bg">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item highlight">
              <h3 className="stat-number">{counts.projects}+</h3>
              <p>Global Launches</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">{counts.reach}k+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">24/7</h3>
              <p>Systems Uptime</p>
            </div>
            <div className="stat-item highlight">
              <h3 className="stat-number">A+</h3>
              <p>Security Rated</p>
            </div>
          </div>
        </div>
      </section>

      <Founders />

      <section className="cta-section final-call">
        <div className="container">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="cta-card glass-premium"
          >
            <h2>Ready to Scale the Future?</h2>
            <p>Join the next generation of global businesses leveraging hyper-intelligent digital architectures.</p>
            <div className="btn-group centered">
              <Link to="/contact" className="btn btn-primary large">Schedule a Consultation</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

