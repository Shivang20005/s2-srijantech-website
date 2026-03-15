import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot, ShieldCheck, Cpu, Zap, BarChart3,
  CheckCircle2, ArrowRight, Server,
  Workflow, Network, Code2, Play,
  Users, Lock, Globe, Database,
  Layers, Settings, ChevronDown, MessageSquare,
  TrendingUp, Monitor, HardDrive, Shield, X
} from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import predictAiImg from '../assets/images/predict_ai.png';

const CaseStudyCard = ({ study, index, onExplore }) => {
  return (
    <motion.div
      className="case-study-premium-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
    >
      <div className="case-card-inner glass-premium">
        <div className="case-visual">
          <div className="mockup-screen">
            <div className="mockup-header-dots"><span></span><span></span><span></span></div>
            <div className="mockup-content">
              <img src={study.image} alt={study.title} />
              <div className="mockup-overlay">
                {study.link ? (
                  <a href={study.link} target="_blank" rel="noopener noreferrer" className="link-icon-btn">
                    <Globe size={40} />
                  </a>
                ) : (
                  <div className="placeholder-overlay" onClick={() => onExplore(study)}>
                    <Play size={40} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="case-details">
          <div className="industry-meta">
            <span className="mini-tag">{study.industry}</span>
            <div className="meta-dots"></div>
            <span className="mini-tag">{study.type || "Web Architecture"}</span>
          </div>
          <h3>{study.title}</h3>

          <div className="case-meta-list">
            <div className="meta-item">
              <label>Objective</label>
              <p>{study.problem}</p>
            </div>
            <div className="meta-item">
              <label>Core Solution</label>
              <p>{study.solution}</p>
            </div>
            <div className="meta-item">
              <label>Key Results</label>
              <div className="impact-pills">
                {study.impact.map((imp, i) => (
                  <span key={i} className="impact-badge"><Zap size={14} /> {imp}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="tech-stack-row">
            {study.tech.map((t, i) => (
              <span key={i} className="mini-pill">{t}</span>
            ))}
          </div>

          <div className="btn-group-card">
            {study.link && (
              <a href={study.link} target="_blank" rel="noopener noreferrer" className="btn-explore-case">
                Live Preview <Globe size={18} />
              </a>
            )}
            <button className="btn-details-case" onClick={() => onExplore(study)}>
              Technical Details <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [counts, setCounts] = useState({ deployments: 0, industries: 0, uptime: 0, datapoints: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ deployments: 25, industries: 12, uptime: 99.9, datapoints: 5 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const studies = [
    {
      title: "Predict-AI: Healthcare Intelligence",
      industry: "Healthcare • AI",
      type: "AI DEPLOYMENT",
      problem: "Empowering healthcare providers with predictive diagnostics and patient data analysis.",
      solution: "Developed an AI-driven platform for real-time disease prediction and health monitoring.",
      impact: ["92% Prediction Accuracy", "Real-time Monitoring", "Patient-Centric UI"],
      tech: ["Python", "Flask", "React", "TensorFlow"],
      image: predictAiImg,
      link: "https://predict-ai-ecru.vercel.app/",
      details: {
        challenge: "Integrating complex AI models into a responsive web interface while ensuring data privacy.",
        architecture: "Cloud-native architecture with microservices for AI inference and frontend delivery.",
        quote: "Predict-AI has revolutionized how we approach proactive healthcare."
      }
    },
    {
      title: "Shivang Portfolio: Personal Brand",
      industry: "Portfolio • Branding",
      type: "UX/UI DESIGN",
      problem: "Creating a standout digital presence for a developer with a focus on skill visualization.",
      solution: "A high-performance, minimalist portfolio with interactive elements and smooth transitions.",
      impact: ["Enhanced Visibility", "Interactive Experience", "Mobile Optimized"],
      tech: ["React", "Framer Motion", "GSAP", "Three.js"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      link: "https://shivang-portfolio-zeta.vercel.app/",
      details: {
        challenge: "Balancing heavy animations with performance and accessibility across all devices.",
        architecture: "Component-based architecture with optimized assets and lazy loading.",
        quote: "A perfect reflection of technical skills and creative vision."
      }
    },
    {
      title: "Srishti Portfolio: Creative Edge",
      industry: "Portfolio • Creative",
      type: "WEB DEVELOPMENT",
      problem: "Developing a creative space that showcases design projects with pixel perfection.",
      solution: "Implemented a vibrant, highly visual portfolio featuring CSS art and tailored animations.",
      impact: ["Creative Showcasing", "Fast Load Times", "Seamless Navigation"],
      tech: ["React", "Tailwind CSS", "AOS", "Vite"],
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=800",
      link: "https://srishti-khaki.vercel.app/",
      details: {
        challenge: "Crafting a unique layout that scales perfectly from mobile to wide-screen monitors.",
        architecture: "Utility-first CSS framework integrated with a modern React frontend.",
        quote: "The design truly captures the essence of modern creativity."
      }
    },
    {
      title: "Aditya Tondon: Developer Portfolio",
      industry: "Portfolio • Personal",
      type: "WEB ARCHITECTURE",
      problem: "Building a professional hub to host full-stack projects and technical blogs.",
      solution: "A robust, multi-page portfolio with a clean aesthetic and integrated blog system.",
      impact: ["Structured Layout", "Responsive Design", "Integrated Content"],
      tech: ["Next.js", "Contentful", "Styled Components"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      link: "https://leafy-dango-cae0eb.netlify.app/",
      details: {
        challenge: "Ensuring SEO optimization and fast static site generation for blog content.",
        architecture: "Server-side rendering with headless CMS for dynamic content management.",
        quote: "Clean, professional, and functionally complete."
      }
    },
    {
      title: "Ashish Gangwar: Code & Craft",
      industry: "Portfolio • Engineering",
      type: "SYSTEM DESIGN",
      problem: "Showcasing technical architecture and backend expertise in a visual manner.",
      solution: "Developed a dark-themed portfolio highlighting system diagrams and code snippets.",
      impact: ["Visual Architecture", "Code Highlights", "Modern Aesthetic"],
      tech: ["React", "Lucide React", "Netlify"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      link: "https://ashishgangwar.netlify.app/",
      details: {
        challenge: "Representing complex backend systems through simple yet effective UI elements.",
        architecture: "Single Page Application (SPA) architecture with modular component hierarchy.",
        quote: "A masterclass in technical storytelling."
      }
    },
    {
      title: "Blithe Boom: Business Growth",
      industry: "E-Commerce • Service",
      type: "FULL STACK WEB",
      problem: "Helping small businesses scale online with an integrated digital setup.",
      solution: "An all-in-one platform for service booking, business management, and online presence.",
      impact: ["Business Scaling", "Integrated Payments", "User Dashboard"],
      tech: ["MERN Stack", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "https://blithe-boom.vercel.app/",
      details: {
        challenge: "Managing complex state across user and admin dashboards with real-time updates.",
        architecture: "Full-stack application with a RESTful API and centralized state management.",
        quote: "S2Srijantech turned our business vision into a scalable digital reality."
      }
    },
    {
      title: "Punara: E-Commerce Marketplace",
      industry: "Retail • E-Commerce",
      type: "FULL STACK WEB",
      problem: "Bridging the gap between quality products and digital consumers with a seamless shopping experience.",
      solution: "A scalable e-commerce platform with intuitive search, secure checkout, and real-time inventory tracking.",
      impact: ["Streamlined Sales", "Customer Retention", "Mobile-First UX"],
      tech: ["React", "Node.js", "Redux", "Payment Gateway"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
      link: "https://punara.co.in/",
      details: {
        challenge: "Handling concurrent transactions and high traffic during seasonal sales.",
        architecture: "Distributed architecture with integrated payment gateways and automated order management.",
        quote: "Punara has transformed our local business into a national retail powerhouse."
      }
    },
    {
      title: "AgriDost: Farmers' Best Friend",
      industry: "Agriculture • IoT",
      type: "EDGE AI",
      problem: "Helping farmers monitor crop health and soil quality in remote areas.",
      solution: "An offline-first IoT ecosystem with mobile app integration for real-time field data.",
      impact: ["Crop Loss Reduction", "Soil Health Monitoring", "Resource Optimization"],
      tech: ["Flutter", "IOT", "Arduino", "LoRa"],
      image: "https://images.unsplash.com/photo-1560493676-04071c5f4976?auto=format&fit=crop&q=80&w=800",
      details: {
        challenge: "Transmitting data over long distances in areas with no cellular connectivity.",
        architecture: "LoRaWAN mesh network feeding into a local gateway with edge processing.",
        quote: "A groundbreaking solution for precision agriculture."
      }
    }
  ];

  return (
    <div className="case-studies-page">
      {/* MODAL SECTION */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            className="case-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              className="case-modal-content glass-premium"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedStudy(null)}><X size={24} /></button>
              <div className="modal-inner">
                <span className="mini-tag">{selectedStudy.industry}</span>
                <h2>{selectedStudy.title}</h2>
                <div className="modal-grid">
                  <div className="modal-info">
                    <div className="info-block">
                      <h4>Strategic Challenge</h4>
                      <p>{selectedStudy.details.challenge}</p>
                    </div>
                    <div className="info-block">
                      <h4>The Architecture</h4>
                      <p>{selectedStudy.details.architecture}</p>
                    </div>
                    {selectedStudy.details.quote && (
                      <div className="info-block quote-block">
                        <MessageSquare size={20} className="quote-icon" />
                        <p>"{selectedStudy.details.quote}"</p>
                      </div>
                    )}
                  </div>
                  <div className="modal-visual">
                    <img src={selectedStudy.image} alt="Architecture" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section className="case-hero premium-hero">
        <ParticleBackground />
        <div className="hero-bg-overlay"></div>
        <div className="container hero-container">
          <div className="hero-split">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="premium-tag"><div className="glow-dot"></div> Engineering Excellence</div>
              <h1>Crafting <span>Digital Future</span> With Every Line of Code</h1>
              <p>Explore our diverse portfolio of AI innovations, professional branding, and full-stack web solutions.</p>
              <div className="btn-group">
                <button className="btn btn-primary large shadow-glow">Explore Work</button>
                <button className="btn btn-secondary large">Get In Touch</button>
              </div>
            </motion.div>
            <div className="hero-visual-3d">
              <motion.div
                className="abstract-mesh-glow"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Network size={200} className="glow-icon-3d" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS STRIP */}
      <section className="metrics-strip-premium">
        <div className="container">
          <div className="ticker-grid">
            <div className="ticker-item">
              <span className="val">{counts.deployments}+</span> <span className="lab">Projects</span>
            </div>
            <div className="ticker-item">
              <span className="val">{counts.industries}</span> <span className="lab">Sectors</span>
            </div>
            <div className="ticker-item">
              <span className="val">{counts.uptime}%</span> <span className="lab">Satisfaction</span>
            </div>
            <div className="ticker-item">
              <span className="val">{counts.datapoints}M+</span> <span className="lab">Users Impacted</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES GRID */}
      <section className="case-studies-grid-section premium-section">
        <div className="container">
          <div className="section-header center">
            <span className="mini-tag">Our Portfolio</span>
            <h2>Selected Works</h2>
            <p>A showcase of our commitment to quality and technical brilliance.</p>
          </div>
          <div className="studies-stack">
            {studies.map((study, idx) => (
              <CaseStudyCard key={idx} study={study} index={idx} onExplore={setSelectedStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. ARCHITECTURE VISUALIZATION */}
      <section className="architecture-section premium-section alternate-bg">
        <div className="container">
          <div className="architecture-grid-mesh">
            <div className="arch-text">
              <h2>Building <span>Robust</span> Foundations</h2>
              <p>Our engineering approach prioritizes scalability, security, and user experience.</p>
              <div className="arch-layers">
                <div className="arch-layer-item">
                  <div className="lay-num">01</div>
                  <div className="lay-det">
                    <h4>User-Centric UI</h4>
                    <p>Designed for intuition and seamless interaction.</p>
                  </div>
                </div>
                <div className="arch-layer-item">
                  <div className="lay-num">02</div>
                  <div className="lay-det">
                    <h4>Scalable Backend</h4>
                    <p>Built to handle growth and high-concurrency requests.</p>
                  </div>
                </div>
                <div className="arch-layer-item">
                  <div className="lay-num">03</div>
                  <div className="lay-det">
                    <h4>AI Integration</h4>
                    <p>Intelligent layers that add real-world value to digital products.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="arch-visual-container">
              <div className="viz-box glass-premium">
                <motion.div
                  className="viz-inner"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Layers size={120} className="glow-icon" />
                  <div className="viz-labels">
                    <span>DESIGN</span>
                    <span>CODE</span>
                    <span>SCALE</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="final-cta-section premium-section">
        <div className="container">
          <motion.div
            className="cta-card-premium-full glass-premium"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <h2>Have a Project in <span>Mind?</span></h2>
            <p>Let's collaborate to build something extraordinary together.</p>
            <div className="btn-group centered">
              <button className="btn btn-primary large shadow-glow">Start Project</button>
              <button className="btn btn-secondary large">Our Process</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
