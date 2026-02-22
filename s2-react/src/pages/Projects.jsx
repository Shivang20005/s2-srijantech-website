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
              <div className="mockup-overlay" onClick={() => onExplore(study)}><Play size={40} /></div>
            </div>
          </div>
        </div>
        <div className="case-details">
          <div className="industry-meta">
            <span className="mini-tag">{study.industry}</span>
            <div className="meta-dots"></div>
            <span className="mini-tag">AI Deployment</span>
          </div>
          <h3>{study.title}</h3>

          <div className="case-meta-list">
            <div className="meta-item">
              <label>Problem</label>
              <p>{study.problem}</p>
            </div>
            <div className="meta-item">
              <label>Solution</label>
              <p>{study.solution}</p>
            </div>
            <div className="meta-item">
              <label>Measurable Impact</label>
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

          <button className="btn-explore-case" onClick={() => onExplore(study)}>
            View Full Architecture <ArrowRight size={18} />
          </button>
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
      setCounts({ deployments: 12, industries: 8, uptime: 99.2, datapoints: 2 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const studies = [
    {
      title: "Neural-Mesh Healthcare Ecosystem",
      industry: "Healthcare • SaaS",
      problem: "Fragmented patient data silos causing 18% delay in critical interventions.",
      solution: "Implemented an end-to-end encrypted AI mesh unifying real-time vitals and predictive pathology.",
      impact: ["32% Faster Interventions", "18% Cost Optimization", "40k active users"],
      tech: ["PyTorch", "Node.js", "Redis", "AWS Lambda"],
      image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=800",
      details: {
        challenge: "The primary challenge was data synchronization across 15 different hospital systems with strictly HIPAA-compliant constraints.",
        architecture: "A microservices-based mesh using WebSockets for real-time telemetry and a central neural model for triage.",
        quote: "The S2 engineering team didn't just build a tool; they redefined our digital surgical floor."
      }
    },
    {
      title: "AgriDost: Autonomous Growth Engine",
      industry: "Agriculture • IoT",
      problem: "Inconsistent soil monitoring leads to 15% crop loss annually due to detection latency.",
      solution: "Edge AI integration with sensor-mesh for predictive irrigation and disease detection.",
      impact: ["22% Yield Increase", "Zero-Latent Inferencing", "18% Water Saving"],
      tech: ["TensorFlow Lite", "FastAPI", "MQTT", "AWS IOT"],
      image: "https://images.unsplash.com/photo-1560493676-04071c5f4976?auto=format&fit=crop&q=80&w=800",
      details: {
        challenge: "Connectivity in remote areas was the hurdle. We had to implement offline-first Edge AI.",
        architecture: "LoRaWAN mesh network feeding into NVIDIA Jetson edge nodes with quantized models.",
        quote: "Precision farming is now a reality for our farmers thanks to this autonomous brain."
      }
    },
    {
      title: "Industrial Vision: QC Automation",
      industry: "Manufacturing • Computer Vision",
      problem: "Manual quality checks lead to 5% defect slippage in high-volume production lines.",
      solution: "Real-time CV inspection using deep learning models on specialized edge nodes.",
      impact: ["99.9% Defect Detection", "60% Labor Optimization", "ROI in 8 Months"],
      tech: ["OpenCV", "PyTorch", "Kubernetes", "Azure Edge"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      details: {
        challenge: "High-speed conveyor belts required sub-20ms inference times.",
        architecture: "TensorRT optimized pipelines running on industrial-grade GPUs.",
        quote: "Zero slippage is now our standard. The ROI was visible within the first quarter."
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
                    <div className="info-block quote-block">
                      <MessageSquare size={20} className="quote-icon" />
                      <p>"{selectedStudy.details.quote}"</p>
                    </div>
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
              <div className="premium-tag"><div className="glow-dot"></div> Engineering Production-Grade</div>
              <h1>Engineering <span>Production-Grade</span> AI Systems That Scale</h1>
              <p>Real-world deployments across healthcare, agriculture, and industrial automation — built with measurable impact.</p>
              <div className="btn-group">
                <button className="btn btn-primary large shadow-glow">View Case Studies</button>
                <button className="btn btn-secondary large">Schedule Technical Discussion</button>
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
              <span className="val">{counts.deployments}+</span> <span className="lab">Deployments</span>
            </div>
            <div className="ticker-item">
              <span className="val">{counts.industries}</span> <span className="lab">Industries</span>
            </div>
            <div className="ticker-item">
              <span className="val">{counts.uptime}%</span> <span className="lab">Uptime</span>
            </div>
            <div className="ticker-item">
              <span className="val">{counts.datapoints}M+</span> <span className="lab">Data Points/Day</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES GRID */}
      <section className="case-studies-grid-section premium-section">
        <div className="container">
          <div className="section-header center">
            <span className="mini-tag">Proven Results</span>
            <h2>Industrial-Grade Case Studies</h2>
            <p>From architectural logic to global enterprise scaling.</p>
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
              <h2>System Architecture <span>Engineering</span></h2>
              <p>Modular, secure, and hyper-scalable foundational layers for high-availability systems.</p>
              <div className="arch-layers">
                <div className="arch-layer-item">
                  <div className="lay-num">01</div>
                  <div className="lay-det">
                    <h4>API Layer</h4>
                    <p>Secure Gateway utilizing JWT & Multi-region load balancing.</p>
                  </div>
                </div>
                <div className="arch-layer-item">
                  <div className="lay-num">02</div>
                  <div className="lay-det">
                    <h4>AI Inference Engine</h4>
                    <p>High-performance neural paths optimized for edge delivery.</p>
                  </div>
                </div>
                <div className="arch-layer-item">
                  <div className="lay-num">03</div>
                  <div className="lay-det">
                    <h4>Data Lake Ingestion</h4>
                    <p>Real-time processing of millions of telemetry points per day.</p>
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
                    <span>DATA</span>
                    <span>LOGIC</span>
                    <span>DELIVERY</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLIENT LOGOS (TRUST BAR) */}
      <section className="client-logos-section">
        <div className="container">
          <span className="trust-label">Powering Innovation Across Key Sectors</span>
          <div className="logo-mesh">
            {['Healthcare Group', 'AgriTech Startup', 'Manufacturing Firm', 'Fintech Lab', 'Logistics AI'].map((client, i) => (
              <div key={i} className="client-logo-greyscale">{client}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INNOVATION CAPABILITY SECTION */}
      <section className="innovation-capability premium-section alternate-bg">
        <div className="container">
          <div className="grid-2col-center">
            <div className="capability-list">
              <span className="tag">Tech Capabilities</span>
              <h2>Future-Proof AI Engineering</h2>
              <ul className="cap-bullets">
                <li><Workflow size={20} /> <strong>MLOps:</strong> Automated CI/CD pipelines for neural models.</li>
                <li><Monitor size={20} /> <strong>Edge AI:</strong> Low-latency inferencing on specialized hardware.</li>
                <li><Network size={20} /> <strong>Federated Learning:</strong> Decentralized data training with privacy.</li>
                <li><Bot size={20} /> <strong>Vision Systems:</strong> High-speed industrial computer vision.</li>
              </ul>
            </div>
            <div className="code-visual glass-premium">
              <div className="code-header"><div className="dot red"></div><div className="dot yellow"></div><div className="dot green"></div></div>
              <pre><code>{`
class AIModelOptimizer:
    def __init__(self, model):
        self.engine = "NeuralPath-V2"
        self.latency_goal = 0.002 # 2ms
    
    def scale_layer(self, architecture):
        return architecture.optimize_mesh()
                 `}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PERFORMANCE GRAPH SECTION */}
      <section className="performance-graphs premium-section">
        <div className="container">
          <div className="section-header center">
            <h2>Quantifiable Gains</h2>
            <p>Impact-first metrics across our deployment spectrum.</p>
          </div>
          <div className="graph-mesh">
            <div className="graph-card glass-premium">
              <h4>accuracy improvement</h4>
              <div className="bar-container">
                <motion.div className="bar" initial={{ width: 0 }} whileInView={{ width: '99%' }}></motion.div>
              </div>
              <span className="graph-val">99.2% Prediction Accuracy</span>
            </div>
            <div className="graph-card glass-premium">
              <h4>Cost Optimization</h4>
              <div className="bar-container">
                <motion.div className="bar" initial={{ width: 0 }} whileInView={{ width: '65%' }} style={{ background: 'var(--accent-glow)' }}></motion.div>
              </div>
              <span className="graph-val">35% Avg Reduction</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ENGINEERING PROCESS */}
      <section className="process-timeline-premium premium-section alternate-bg">
        <div className="container">
          <div className="section-header">
            <h2>Engineering Lifecycle</h2>
            <p>The S2 methodology for mission-critical software.</p>
          </div>
          <div className="timeline-horizontal">
            {[
              { title: "Requirement Analysis", desc: "First-principles deep dive." },
              { title: "Data Engineering", desc: "Aggregating & cleaning telemetry." },
              { title: "Model Training", desc: "Neural path optimization." },
              { title: "Production Deployment", desc: "Global edge orchestration." },
              { title: "Continuous Monitoring", desc: "System health & retraining." }
            ].map((step, i) => (
              <div key={i} className="timeline-block">
                <div className="block-num">{i + 1}</div>
                <div className="block-line"></div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SECURITY & COMPLIANCE BLOCK */}
      <section className="security-compliance-block premium-section">
        <div className="container">
          <div className="security-card-full glass-premium">
            <div className="sec-header">
              <ShieldCheck size={50} className="glow-icon" />
              <h2>Enterprise-Grade <span>Security First</span></h2>
            </div>
            <div className="compliance-grid">
              <div className="comp-item">
                <Shield size={24} />
                <h4>GDPR Ready</h4>
                <p>Native data sovereignty protocols.</p>
              </div>
              <div className="comp-item">
                <Shield size={24} />
                <h4>HIPAA Compliant</h4>
                <p>Securing critical healthcare telemetry.</p>
              </div>
              <div className="comp-item">
                <Shield size={24} />
                <h4>ISO Alignment</h4>
                <p>Industry-standard process certification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. TECHNOLOGY ECOSYSTEM */}
      <section className="tech-ecosystem-grid premium-section alternate-bg">
        <div className="container">
          <div className="section-header center">
            <h2>Technology Ecosystem</h2>
            <p>Built with global standard frameworks.</p>
          </div>
          <div className="tech-categories">
            <div className="tech-cat-box glass-premium">
              <h4>Artificial Intelligence</h4>
              <div className="tech-stack-pills">
                <span>PyTorch</span> <span>TensorFlow</span> <span>OpenCV</span>
              </div>
            </div>
            <div className="tech-cat-box glass-premium">
              <h4>Cloud & Infrastructure</h4>
              <div className="tech-stack-pills">
                <span>AWS</span> <span>Azure</span> <span>Kubernetes</span>
              </div>
            </div>
            <div className="tech-cat-box glass-premium">
              <h4>Backend Architecture</h4>
              <div className="tech-stack-pills">
                <span>Node.js</span> <span>Django</span> <span>FastAPI</span>
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
            <h2>Ready to Architect Your <span>AI Infrastructure?</span></h2>
            <p>Join the next generation of global businesses leveraging hyper-intelligent digital architectures.</p>
            <div className="btn-group centered">
              <button className="btn btn-primary large shadow-glow">Book Strategy Call</button>
              <button className="btn btn-secondary large">Request Proposal</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
