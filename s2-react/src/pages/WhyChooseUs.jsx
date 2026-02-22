import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Network, Zap, ShieldCheck, Cpu,
  Workflow, Monitor, ArrowRight, CheckCircle2,
  TrendingUp, BarChart3, Database, Globe,
  Shield, Server, Lock, Layers, Code2,
  MessageSquare, Users, ChevronRight, Settings,
  Activity, Award, Building2, Briefcase
} from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const MetricCounter = ({ value, label, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(value);
    const duration = 2000;
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(progress * end);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value, isInView]);

  return (
    <div className="ticker-item" ref={ref}>
      <span className="val">{prefix}{count.toFixed(count % 1 === 0 ? 0 : 1)}{suffix}</span>
      <span className="lab">{label}</span>
    </div>
  );
};

const ValueBlock = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="value-block glass-premium"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
  >
    <div className="block-icon"><Icon size={32} /></div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const FrameworkStep = ({ step, index, active, onClick }) => (
  <div
    className={`framework-step ${active ? 'active' : ''}`}
    onClick={() => onClick(index)}
  >
    <div className="step-marker">
      <div className="marker-dot"></div>
      <div className="marker-line"></div>
    </div>
    <div className="step-content">
      <h3>{step.title}</h3>
      <AnimatePresence>
        {active && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {step.description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const [activeStep, setActiveStep] = useState(0);

  const valueBlocks = [
    {
      icon: Layers,
      title: "Production-Grade Engineering",
      description: "We build scalable, cloud-ready, monitored systems — not prototypes. Every line of code is architected for mission-critical stability."
    },
    {
      icon: Cpu,
      title: "AI + Full Stack Integration",
      description: "From data pipelines to frontend dashboards — complete architecture ownership. We bridge the gap between model logic and user experience."
    },
    {
      icon: TrendingUp,
      title: "Business-Focused AI",
      description: "Every model optimized for ROI, not just accuracy. We align neural performance with your core business kpis and growth targets."
    },
    {
      icon: ShieldCheck,
      title: "Secure & Compliant Systems",
      description: "Enterprise-grade security architecture from day one. Native data sovereignty and compliance-first data engineering."
    }
  ];

  const frameworkSteps = [
    {
      title: "Discovery & Technical Audit",
      description: "First-principles deep dive into your existing data silos and business logic. We define the technical feasibility and ROI roadmap."
    },
    {
      title: "Data Engineering & Modeling",
      description: "Aggregating telemetry, cleaning datasets, and architecting the neural paths. We build the foundation for high-performance AI."
    },
    {
      title: "Architecture Design",
      description: "Modular, micro-service based design focusing on latency, security, and global scalability."
    },
    {
      title: "Scalable Deployment",
      description: "Orchestrating production-grade nodes across global regions with automated CI/CD and MLOps pipelines."
    },
    {
      title: "Monitoring & Optimization",
      description: "24/7 system health tracking with continuous model retraining and infrastructure scaling."
    }
  ];

  const industries = [
    { name: "Healthcare", icon: Activity },
    { name: "Agriculture", icon: Globe },
    { name: "Manufacturing", icon: Building2 },
    { name: "Retail", icon: Zap },
    { name: "Logistics", icon: Briefcase },
    { name: "SaaS Platforms", icon: Database }
  ];

  return (
    <div className="why-us-page enterprise-blueprint">
      {/* 1. HERO SECTION */}
      <section className="why-hero premium-hero">
        <ParticleBackground />
        <div className="hero-bg-overlay"></div>
        <div className="container">
          <div className="hero-split">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="premium-tag">Authority Positioning</div>
              <h1>Built for Scale. <span>Engineered for Impact.</span></h1>
              <p>We don’t just build software — we architect intelligent systems that drive measurable business transformation.</p>
              <div className="btn-group">
                <button className="btn btn-primary large shadow-glow">Start a Technical Discussion</button>
                <button className="btn btn-secondary large">View Case Studies</button>
              </div>
            </motion.div>
            <div className="hero-visual-3d">
              <motion.div
                className="floating-mesh-container"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Network size={280} className="glow-icon-large" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST METRICS STRIP */}
      <section className="metrics-strip-premium">
        <div className="container">
          <div className="ticker-grid">
            <MetricCounter value="12" label="AI Deployments" suffix="+" />
            <MetricCounter value="8" label="Industries" />
            <MetricCounter value="99.2" label="System Uptime" suffix="%" />
            <MetricCounter value="2" label="Daily Data Processing" suffix="M+" />
          </div>
        </div>
      </section>

      {/* 3. CORE VALUE BLOCKS */}
      <section className="value-blocks-section premium-section">
        <div className="container">
          <div className="section-header center">
            <span className="mini-tag">Intelligence First</span>
            <h2>What Makes Us Different</h2>
            <p>Moving beyond prototypes to production-grade intelligence.</p>
          </div>
          <div className="value-grid-2col">
            {valueBlocks.map((block, i) => (
              <ValueBlock key={i} {...block} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENGINEERING DEPTH */}
      <section className="engineering-depth premium-section alternate-bg">
        <div className="container">
          <div className="depth-grid">
            <div className="depth-text">
              <h2>Engineering <span>Depth</span></h2>
              <p>Our solutions aren't just built; they are architected for longevity and high-load performance.</p>
              <ul className="credibility-bullets">
                <li><Workflow size={20} /> <strong>MLOps Pipelines:</strong> Automated training and deployment.</li>
                <li><Activity size={20} /> <strong>Real-time Inference:</strong> Sub-ms response times at scale.</li>
                <li><Layers size={20} /> <strong>Distributed Architectures:</strong> High-availability mesh designs.</li>
                <li><Code2 size={20} /> <strong>API-First:</strong> Modular and integration-ready systems.</li>
                <li><Monitor size={20} /> <strong>Edge AI:</strong> Intelligence directly on specialized hardware.</li>
              </ul>
            </div>
            <div className="depth-visual">
              <div className="arch-dia-box glass-premium">
                <div className="dia-nodes">
                  {[1, 2, 3, 4, 5].map(n => (
                    <motion.div
                      key={n}
                      className="node"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: n * 0.4 }}
                    ></motion.div>
                  ))}
                  <div className="central-node"><Cpu size={40} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEASURABLE IMPACT */}
      <section className="measurable-impact premium-section">
        <div className="container">
          <div className="section-header center">
            <h2>Measurable Impact</h2>
            <p>Proven ROI through data-driven engineering.</p>
          </div>
          <div className="impact-showcase glass-premium">
            <div className="impact-header">
              <h4>AI Manufacturing Optimization</h4>
            </div>
            <div className="impact-stats-row">
              <div className="stat-item">
                <div className="stat-diff negative">↓ 18%</div>
                <label>Operational Cost</label>
                <div className="stat-progress"><motion.div className="bar red" initial={{ width: 0 }} whileInView={{ width: '18%' }}></motion.div></div>
              </div>
              <div className="stat-item">
                <div className="stat-diff positive">↑ 32%</div>
                <label>Production Efficiency</label>
                <div className="stat-progress"><motion.div className="bar blue" initial={{ width: 0 }} whileInView={{ width: '32%' }}></motion.div></div>
              </div>
              <div className="stat-item">
                <div className="stat-diff negative">↓ 27%</div>
                <label>Downtime</label>
                <div className="stat-progress"><motion.div className="bar orange" initial={{ width: 0 }} whileInView={{ width: '27%' }}></motion.div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT FRAMEWORK */}
      <section className="framework-section premium-section alternate-bg">
        <div className="container">
          <div className="section-header">
            <h2>Development Framework</h2>
            <p>The S2 methodology for engineering mission-critical logic.</p>
          </div>
          <div className="framework-timeline">
            {frameworkSteps.map((step, i) => (
              <FrameworkStep
                key={i}
                step={step}
                index={i}
                active={activeStep === i}
                onClick={setActiveStep}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECURITY & RELIABILITY */}
      <section className="security-reliability premium-section">
        <div className="container">
          <div className="sec-grid-modern">
            <div className="sec-info">
              <h2>Security & <span>Reliability First</span></h2>
              <p>We treat security as a foundational layer, not an add-on. Every system is built to survive the enterprise environment.</p>
            </div>
            <div className="sec-badges-grid">
              {[
                { icon: Lock, label: "End-to-End Encryption" },
                { icon: Cloud, label: "AWS/Azure Cloud" },
                { icon: Zap, label: "CI/CD Automation" },
                { icon: Activity, label: "Real-time Monitoring" },
                { icon: Shield, label: "Backup & Failover" }
              ].map((item, i) => (
                <motion.div key={i} className="sec-badge-card glass-premium" whileHover={{ y: -5 }}>
                  <item.icon size={24} className="accent-color" />
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. INDUSTRY VERSATILITY */}
      <section className="industry-versatility premium-section alternate-bg">
        <div className="container">
          <div className="section-header center">
            <h2>Industry Versatility</h2>
            <p>Engineering benchmarks across diverse high-impact sectors.</p>
          </div>
          <div className="industry-grid-mesh">
            {industries.map((ind, i) => (
              <motion.div key={i} className="industry-tile glass-premium" whileHover={{ scale: 1.05 }}>
                <ind.icon size={32} />
                <span>{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LEADERSHIP SNAPSHOT */}
      <section className="leadership-expertise premium-section">
        <div className="container">
          <div className="expertise-card glass-premium shadow-glow">
            <div className="exp-content">
              <Award size={50} className="glow-icon" />
              <h2>Production Experience</h2>
              <p>“Built by engineers with real-world deployment experience in AI, cloud infrastructure, and scalable enterprise systems.”</p>
              <div className="credibility-metrics">
                <div className="c-item"><strong>15+</strong> Years Combined</div>
                <div className="c-item"><strong>Global</strong> Architecture Exposure</div>
                <div className="c-item"><strong>Tech</strong> Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="testimonials-section premium-section alternate-bg">
        <div className="container">
          <div className="section-header center">
            <h2>Client Intelligence</h2>
          </div>
          <div className="testimonials-grid">
            {[
              { name: "John Carter", role: "CTO, HealthSync", quote: "S2 didn't just write code; they architected a solution that saved us millions in operational latency." },
              { name: "Elena Rossi", role: "COO, AgroDigital", quote: "The Edge AI implementation for our sensors was flawless. Truly production-grade engineering." }
            ].map((t, i) => (
              <div key={i} className="testimonial-card glass-premium">
                <MessageSquare size={24} className="quote-icon" />
                <p>“{t.quote}”</p>
                <div className="t-meta">
                  {/* <img src={`https://i.pravatar.cc/100?u=${i}`} alt={t.name} /> */}
                  <div className="t-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TECHNOLOGY ECOSYSTEM */}
      <section className="tech-ecosystem-premium premium-section">
        <div className="container">
          <div className="section-header center">
            <h2>Technology Ecosystem</h2>
          </div>
          <div className="tech-modern-grid">
            <div className="tech-cat glass-premium">
              <h4>AI / ML</h4>
              <div className="stack-wrap"><span>PyTorch</span> <span>TensorFlow</span> <span>OpenCV</span></div>
            </div>
            <div className="tech-cat glass-premium">
              <h4>Backend</h4>
              <div className="stack-wrap"><span>Node.js</span> <span>FastAPI</span> <span>Django</span></div>
            </div>
            <div className="tech-cat glass-premium">
              <h4>Frontend</h4>
              <div className="stack-wrap"><span>React</span> <span>Next.js</span> <span>Vite</span></div>
            </div>
            <div className="tech-cat glass-premium">
              <h4>Infrastructure</h4>
              <div className="stack-wrap"><span>AWS</span> <span>Azure</span> <span>Docker</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="final-cta-blue premium-section">
        <div className="container">
          <motion.div
            className="cta-card-blue glass-premium shadow-glow"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <h2>Looking for a Technology Partner — <span>Not Just Developers?</span></h2>
            <div className="btn-group centered">
              <button className="btn btn-primary large">Book Strategy Call</button>
              <button className="btn btn-secondary large">Request Proposal</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Help with missing icon
const Cloud = ({ size, className }) => <Network size={size} className={className} />;

export default WhyChooseUs;
