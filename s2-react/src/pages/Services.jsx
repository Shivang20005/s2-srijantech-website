import { motion } from 'framer-motion';
import { Bot, Laptop, ShieldCheck, Cpu, Database, Search, Rocket, Code2, Microscope, Settings, BarChart } from 'lucide-react';

const Services = () => {
  const lifecycle = [
    { icon: <Search />, title: 'Discovery', desc: 'Deep-dive into logic requirements and architectural constraints.' },
    { icon: <Microscope />, title: 'Prototyping', desc: 'Rapid neural experimentation and feature feasibility analysis.' },
    { icon: <Code2 />, title: 'Engineering', desc: 'Mission-critical development using state-of-the-art frameworks.' },
    { icon: <Rocket />, title: 'Deployment', desc: 'Global orchestration across distributed cloud meshes.' },
    { icon: <Settings />, title: 'Optimization', desc: 'Continuous learning and performance tuning in real-time.' }
  ];

  const services = [
    {
      icon: <Bot size={40} />,
      title: 'Neural Architecture',
      desc: 'Developing autonomous agents and deep-learning models that shift your enterprise from reactive to predictive.',
      tech: ['PyTorch', 'TensorFlow', 'LLM Ops']
    },
    {
      icon: <Cpu size={40} />,
      title: 'Distributed Systems',
      desc: 'Architecting hyper-scalable backend meshes that maintain zero-latency global availability.',
      tech: ['Kubernetes', 'Go', 'gRPC']
    },
    {
      icon: <ShieldCheck size={40} />,
      title: 'Defensive Engineering',
      desc: 'Implementing radical security protocols and cryptographic safeguards for industrial data sovereignty.',
      tech: ['Zero Trust', 'AES-256', 'OAuth2']
    },
    {
      icon: <BarChart size={40} />,
      title: 'Inference Analytics',
      desc: 'Extracting signal from noise through high-precision data pipelines and real-time visualization.',
      tech: ['InfluxDB', 'Grafana', 'Kafka']
    }
  ];

  return (
    <div className="services-page">
      <section className="page-header dark">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <span>Engineering</span> Ecosystem
          </motion.h1>
          <p>Architecting the foundations of digital intelligence with precision.</p>
        </div>
      </section>

      <section className="production-lifecycle premium-section">
        <div className="container">
          <div className="section-header">
            <h2>Production Lifecycle</h2>
            <p>Our systematic trajectory from human intent to autonomous execution.</p>
          </div>

          <div className="lifecycle-timeline">
            {lifecycle.map((step, i) => (
              <motion.div
                key={i}
                className="lifecycle-step"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="step-blob glass-premium">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-index">0{i + 1}</div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < lifecycle.length - 1 && <div className="step-connector"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-core premium-section alternate-bg">
        <div className="container">
          <div className="section-header">
            <h2>Technical Domains</h2>
            <p>Specialized intelligence applied across the critical technology stack.</p>
          </div>
          <div className="service-grid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="glass-premium service-card-premium"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="icon-wrapper">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tech-pills">
                  {s.tech.map((t, ti) => (
                    <span key={ti} className="mini-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stack-showcase premium-section">
        <div className="container">
          <div className="section-header">
            <h2>The Intelligence Mesh</h2>
            <p>Our core technological dependencies and research focus.</p>
          </div>
          <div className="tech-icons-grid">
            {/* We can use placeholders or text for now, but a grid of logos/icons is best */}
            <div className="glass-premium tech-cat">
              <h4>Artificial Intelligence</h4>
              <ul>
                <li>PyTorch</li>
                <li>Hugging Face</li>
                <li>LangChain</li>
                <li>Vector DBs</li>
              </ul>
            </div>
            <div className="glass-premium tech-cat">
              <h4>Scalable Infrastructure</h4>
              <ul>
                <li>AWS Aurora</li>
                <li>Docker / K8s</li>
                <li>Vercel Edge</li>
                <li>Terraform</li>
              </ul>
            </div>
            <div className="glass-premium tech-cat">
              <h4>Modern Core</h4>
              <ul>
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>PostgreSQL</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
