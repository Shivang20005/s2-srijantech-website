import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Bot, Leaf, Globe, X, CheckCircle2, AlertCircle, Cpu, Zap, ExternalLink,
  TrendingUp, DollarSign, Layers, Lock, Users, ShieldCheck, Info
} from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const metrics = [
    { label: 'AI Solutions Built', value: '5+' },
    { label: 'Users Impacted', value: '10,000+' },
    { label: 'Industries Served', value: '4+' },
    { label: 'Global Reached', value: '2+ Countries' }
  ];

  const projects = [
    {
      id: 'predict-ai',
      icon: <Bot size={40} />,
      title: 'PredictAI',
      category: 'Unified Healthcare Platform',
      heading: 'PredictAI – Smarter Preventive Healthcare for a Connected Future',
      subheading: 'An AI-powered healthcare integration platform that connects patients, doctors, labs, pharmacies, and hospitals into one seamless digital ecosystem.',
      shortDesc: 'AI-driven preventive healthcare system using Explainable AI to shift from reactive to proactive care.',
      fullDesc: 'PredictAI is an AI-enabled unified healthcare platform that connects the entire preventive healthcare cycle into one integrated system. We do not replace healthcare providers—we connect them.',
      problem: {
        intro: 'Modern healthcare systems are proactive, but highly fragmented. Healthcare exists — but it is not connected.',
        points: [
          'Medical records are not unified across clinics and labs',
          'Doctors lack complete patient history for accurate diagnosis',
          'Patients repeat expensive tests due to missing reports',
          'Rural areas struggle with digital healthcare access',
          'Healthcare costs continue to rise due to inefficiencies'
        ]
      },
      solution: [
        'Unified Patient Health Records (Single source of truth)',
        'AI-Assisted Disease Risk Prediction (Early detection)',
        'Digital Consultations (Seamless Online & Offline)',
        'Lab & Diagnostic Integration (Direct report linking)',
        'Pharmacy & Prescription Connectivity (Home delivery)',
        'Continuous Monitoring via Wearables (Real-time vitals)',
        'Rural & Low-Resource Accessibility (Closing the gap)'
      ],
      platformOverview: ['Doctors', 'Patients', 'Diagnostic Labs', 'Pharmacies', 'Hospitals'],
      howItWorks: [
        { step: 'Registration', desc: 'Secure onboarding for Patients, Doctors, Labs, Pharmacies, and Admins.' },
        { step: 'Consultation', desc: 'Patients book seamless online or offline consultations.' },
        { step: 'AI Analysis', desc: 'AI provides decision support insights using risk patterns and medical history.' },
        { step: 'Treatment', desc: 'Digital prescriptions issued and medicine delivered to doorstep.' },
        { step: 'Monitoring', desc: 'Wearables track vitals in real-time for preventive care.' }
      ],
      market: {
        trends: ['Massive Telehealth Growth', 'Rising Preventive Care Demand', 'Post-Pandemic Digital Adoption', 'Closing India\'s Rural Gap'],
        position: 'Positioned at the intersection of AI, preventive healthcare, and digital integration.'
      },
      businessModel: {
        phase1: 'Free Onboarding for all entities to build ecosystem adoption.',
        phase2: ['Subscription Model (for Service Providers)', 'Pay-Per-Use Services', 'Wearable Integration', 'B2B Licensing', 'Ethical Data Insights']
      },
      tech: ['TensorFlow/Keras', 'Python', 'Flask', 'React.js', 'Firebase Functions', 'Docker'],
      impact: ['Early diagnosis saving lives', 'Significant reduction in medical costs', 'Improved rural accessibility', 'Transparent & Explainable AI'],
      features: [
        'Unified Healthcare Platform',
        'Centralized Health Records',
        'AI-Assisted Diagnosis',
        'Virtual Consultation',
        'Lab Integration',
        'Pharmacy Delivery',
        'Wearable Monitoring',
        'Secure & Compliant'
      ],
      privacy: ['End-to-End Encrypted Storage', 'Role-Based Access Control', 'Secure API Architecture', 'Ethical AI Model Training'],
      liveLink: 'http://srmscetrevents.in:5000'
    },
    {
      id: 'agri-dost',
      icon: <Leaf size={40} />,
      title: 'AGRI-DOST',
      category: 'Smart Farming',
      shortDesc: 'Mobile platform transforming traditional farming into smart, data-powered agriculture with real-time AI.',
      fullDesc: 'AGRI-DOST combines artificial intelligence, real-time weather insights, and market analytics to help farmers increase yield, reduce losses, and maximize income.',
      problem: 'Small and marginal farmers face crop losses due to late disease detection, unpredictable climate conditions, limited expert guidance, and unfair market pricing.',
      solution: [
        'AI-based crop disease detection via image analysis',
        'Personalized crop recommendations based on soil health',
        'Real-time weather & soil advisory services',
        'Market price intelligence for better selling decisions'
      ],
      tech: ['Computer Vision (PyTorch)', 'Cloud Computing (AWS/GCP)', 'Weather APIs', 'Market Data Integration', 'Secure Authentication'],
      impact: ['Higher crop productivity', 'Reduced financial risk for farmers', 'Improved farmer income', 'Sustainable agricultural practices'],
      features: ['Crop Monitoring', 'Disease Detection', 'Market Alerts', 'Local Support']
    },
    {
      id: 'portfolio',
      icon: <Globe size={40} />,
      title: 'Aditya Tandon | Academic & Research Portfolio',
      category: 'Elite Portfolio Design',
      shortDesc: 'A high-end, research-focused personal portfolio for an Assistant Professor & Data Science specialist.',
      fullDesc: 'Building a professional digital identity for scholars and researchers. This platform showcases research papers, teaching experiences, and technical expertise in Data Science and IoT with a premium dark-themed aesthetic.',
      problem: {
        intro: 'Academic portfolios often feel dated or struggle to represent multi-dimensional expertise like research, teaching, and industry contributions simultaneously.',
        points: [
          'Fragmented visibility of research contributions',
          'Lack of professional branding for academic roles',
          'Poor representation of complex analytical skills',
          'Inconsistent layout across devices'
        ]
      },
      solution: [
        'Premium dark-themed visual architecture',
        'Staggered content reveal system for publications',
        'Intuitive navigation for multi-role expertise',
        'Data-driven metrics visualization (Hours, Yrs, Books)'
      ],
      tech: ['React.js', 'Vite', 'Framer Motion', 'Tailwind CSS (Optimized)', 'Lucide Icons'],
      impact: [
        '300% increase in professional visibility',
        'Streamlined publication discovery',
        'Unified digital persona for academia',
        'Mobile-first accessibility for students'
      ],
      features: ['Publication Grid', 'Expertise Carousel', 'Teaching Timeline', 'Research Metrics'],
      liveLink: 'https://leafy-dango-cae0eb.netlify.app/'
    }
  ];

  return (
    <div className="portfolio-page">
      <section className="projects-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hero-text"
          >
            <div className="reveal-mask">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
              >
                Our <span>Innovative</span> Projects
              </motion.h1>
            </div>
            <p>Empowering industries through cutting-edge AI and bespoke digital engineering.</p>
          </motion.div>
        </div>
        <div className="hero-particles"></div>
      </section>

      <section className="metrics-bar">
        <div className="container">
          <motion.div
            className="metrics-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                className="metric-item"
                variants={itemVariants}
                whileHover={{ scale: 1.1, color: 'var(--accent)' }}
              >
                <h3>{m.value}</h3>
                <p>{m.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <motion.div
            className="portfolio-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="project-premium-card"
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  boxShadow: '0 30px 60px rgba(37, 99, 235, 0.15)',
                  borderColor: 'var(--accent)'
                }}
              >
                <div className="card-accent-line"></div>
                <div className="card-top">
                  <div className="project-icon-float">{p.icon}</div>
                  <span className="project-cat-tag">{p.category}</span>
                </div>
                <h3>{p.title}</h3>
                <p className="project-short-desc">{p.shortDesc}</p>
                <div className="project-feature-row">
                  {p.features.slice(0, 3).map((f, fi) => (
                    <motion.span
                      key={fi}
                      className="micro-tag"
                      whileHover={{ scale: 1.1, background: 'var(--accent)', color: 'white' }}
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>
                <motion.button
                  className="btn-explore"
                  onClick={() => setSelectedProject(p)}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Project <span>→</span>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>

              <div className="modal-inner">
                <div className="modal-header">
                  <div className="modal-icon">{selectedProject.icon}</div>
                  <div className="modal-title-area">
                    <span className="modal-cat">{selectedProject.category}</span>
                    {selectedProject.heading ? (
                      <h2 className="modal-promo-heading">{selectedProject.heading}</h2>
                    ) : (
                      selectedProject.liveLink ? (
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-title-link"
                        >
                          <h2>{selectedProject.title} <ExternalLink size={20} /></h2>
                        </a>
                      ) : (
                        <h2>{selectedProject.title}</h2>
                      )
                    )}
                    {selectedProject.subheading && (
                      <p className="modal-subheading">{selectedProject.subheading}</p>
                    )}
                  </div>
                </div>

                <div className="modal-body">
                  {selectedProject.id === 'predict-ai' && (
                    <div className="modal-cta-group">
                      <Link to="/contact" className="btn btn-primary">Get Started</Link>
                      <Link to="/contact" className="btn btn-secondary">Book Consultation</Link>
                      {selectedProject.liveLink && (
                        <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                          View Live Demo <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  )}
                  <div className="modal-main-desc">
                    <p>{selectedProject.fullDesc}</p>
                  </div>

                  <div className="detail-grid">
                    <div className="detail-section problem">
                      <div className="section-title">
                        <AlertCircle size={20} />
                        <h3>The Problem</h3>
                      </div>
                      {typeof selectedProject.problem === 'string' ? (
                        <p>{selectedProject.problem}</p>
                      ) : (
                        <>
                          <p>{selectedProject.problem.intro}</p>
                          <ul className="point-list">
                            {selectedProject.problem.points.map((pt, idx) => (
                              <li key={idx}>
                                <AlertCircle size={14} className="point-icon red" />
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    <div className="detail-section solution">
                      <div className="section-title">
                        <CheckCircle2 size={20} />
                        <h3>Our Solution</h3>
                      </div>
                      <ul className="point-list">
                        {selectedProject.solution.map((item, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={14} className="point-icon green" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {selectedProject.platformOverview && (
                    <div className="modal-custom-section platform-overview">
                      <div className="section-title">
                        <Users size={20} />
                        <h3>Platform Overview</h3>
                      </div>
                      <div className="entity-tags">
                        {selectedProject.platformOverview.map((entity, idx) => (
                          <span key={idx} className="entity-tag">{entity}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.howItWorks && (
                    <div className="modal-custom-section how-it-works">
                      <div className="section-title">
                        <Layers size={20} />
                        <h3>How It Works</h3>
                      </div>
                      <div className="workflow-steps">
                        {selectedProject.howItWorks.map((s, idx) => (
                          <div key={idx} className="workflow-step">
                            <span className="step-num">{idx + 1}</span>
                            <div className="step-content">
                              <h4>{s.step}</h4>
                              <p>{s.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="detail-grid">
                    {selectedProject.market && (
                      <div className="detail-section market">
                        <div className="section-title">
                          <TrendingUp size={20} />
                          <h3>Market Opportunity</h3>
                        </div>
                        <ul className="point-list">
                          {selectedProject.market.trends.map((t, idx) => (
                            <li key={idx}>
                              <TrendingUp size={14} className="point-icon blue" />
                              {t}
                            </li>
                          ))}
                        </ul>
                        <p className="market-pos">{selectedProject.market.position}</p>
                      </div>
                    )}

                    {selectedProject.businessModel && (
                      <div className="detail-section business">
                        <div className="section-title">
                          <DollarSign size={20} />
                          <h3>Business Model</h3>
                        </div>
                        <p className="phase-info"><strong>Phase 1:</strong> {selectedProject.businessModel.phase1}</p>
                        <div className="revenue-streams">
                          <strong>Revenue Streams (Phase 2):</strong>
                          <ul className="point-list">
                            {selectedProject.businessModel.phase2.map((m, idx) => (
                              <li key={idx}>
                                <DollarSign size={14} className="point-icon gold" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {selectedProject.privacy && (
                    <div className="modal-custom-section privacy-section">
                      <div className="section-title">
                        <Lock size={20} />
                        <h3>Data Privacy & Security</h3>
                      </div>
                      <div className="privacy-grid">
                        {selectedProject.privacy.map((p, idx) => (
                          <div key={idx} className="privacy-item">
                            <ShieldCheck size={16} />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.id === 'predict-ai' && (
                    <div className="modal-custom-section about-predict-ai">
                      <div className="section-title">
                        <Info size={20} />
                        <h3>About PredictAI Healthcare Solutions</h3>
                      </div>
                      <p>PredictAI Healthcare Solutions is a health-tech startup focused on building AI-powered preventive healthcare systems that connect fragmented medical services into one intelligent platform. We believe the future of healthcare is <strong>Connected, Predictive, Accessible, and Explainable.</strong></p>
                    </div>
                  )}

                  <div className="modal-footer-info">
                    <div className="tech-stack-section">
                      <div className="section-title">
                        <Cpu size={20} />
                        <h3>Technology Stack</h3>
                      </div>
                      <div className="tech-tags">
                        {selectedProject.tech.map((t, idx) => (
                          <span key={idx} className="tech-tag">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="impact-section">
                      <div className="section-title">
                        <Zap size={20} />
                        <h3>Impact & Vision</h3>
                      </div>
                      <div className="impact-list">
                        {selectedProject.impact.map((item, idx) => (
                          <span key={idx} className="impact-item">
                            <CheckCircle2 size={14} style={{ color: 'var(--accent)' }} />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.liveLink && (
                      <div className="live-link-area" style={{ marginTop: '2rem' }}>
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                          style={{ width: '100%', justifyContent: 'center' }}
                        >
                          View Live Project <ExternalLink size={18} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
