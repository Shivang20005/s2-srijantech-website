import { motion } from 'framer-motion';
import { Lightbulb, Handshake, Users, Target, Rocket, Eye, Shield, Globe, Cpu, ArrowRight } from 'lucide-react';

const About = () => {
  const roadmap = [
    { year: '2024', title: 'Foundational Scale', desc: 'Established core AI engineering workflows and reached 50+ successful deployments.' },
    { year: '2025', title: 'Intelligence Expansion', desc: 'Launching industrial-grade LLM integrations and autonomous agent frameworks.' },
    { year: '2027', title: 'Global Architecture Hub', desc: 'Expanding to 15+ global markets with dedicated AI research labs.' },
    { year: '2030', title: 'AGI Alignment', desc: 'Leading the bridge between human intent and artificial general intelligence.' }
  ];

  const values = [
    { icon: <Cpu />, title: 'Technical Excellence', desc: 'We build foundations, not just features. Performance and security are non-negotiable.' },
    { icon: <Shield />, title: 'Ethical Aligment', desc: 'AI must be transparent and bias-free. We architect with human values at the core.' },
    { icon: <Globe />, title: 'Global Vision', desc: 'Engineering solutions that scale across borders and cultures without friction.' },
    { icon: <Rocket />, title: 'Rapid Iteration', desc: 'Moving from concept to production with enterprise-grade velocity.' }
  ];

  return (
    <div className="about-page">
      <section className="page-header dark">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Engineering the <span>Human-AI Interface</span>
          </motion.h1>
          <p>Architecting the digital foundations of the next decade with precision and purpose.</p>
        </div>
      </section>

      <section className="founder-story-section premium-section">
        <div className="container">
          <div className="philosophy-grid">
            <motion.div
              className="philosophy-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="tag">The Genesis</span>
              <h2>Building the Future, One Line of Logic at a Time.</h2>
              <p>Founded by **Shivang Gangwar** and **Srishti Yadav**, S2Srijantech emerged from a shared vision: to bridge the gap between complex engineering and human-centric software. What started as an innovation lab is now a global engineering partner, delivering mission-critical AI systems to industries worldwide.</p>
              <p>"Our journey isn't just about code; it's about the intelligence that powers progress. We don't just solve problems; we architect sustainable digital futures."</p>
              <div className="signature-flex">
                <div className="sig-item">
                  <p className="name">Shivang Gangwar</p>
                  <p className="role">Founder & CTO</p>
                </div>
                <div className="sig-item">
                  <p className="name">Srishti Yadav</p>
                  <p className="role">Founder & COO</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="story-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="glass-premium story-stats-card">
                <div className="mini-stat">
                  <h4>5+</h4>
                  <p>Years of Engineering</p>
                </div>
                <div className="mini-stat">
                  <h4>100%</h4>
                  <p>Deployment Success</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="roadmap-section premium-section alternate-bg">
        <div className="container">
          <div className="section-header">
            <h2>Vision 2030 Roadmap</h2>
            <p>Our strategic trajectory towards a hyper-intelligent future.</p>
          </div>

          <div className="roadmap-container">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                className="roadmap-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="year-glitch">{item.year}</div>
                <div className="roadmap-card glass-premium">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                {index < roadmap.length - 1 && <div className="roadmap-line"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section premium-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Principles</h2>
            <p>The engineering DNA that drives every decision we make.</p>
          </div>
          <div className="service-grid">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="glass-premium value-card-new"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="icon-wrapper">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
