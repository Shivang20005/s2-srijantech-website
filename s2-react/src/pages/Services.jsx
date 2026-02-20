import { motion } from 'framer-motion';
import { Bot, Laptop, ShieldCheck, Cpu, Database, Search } from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
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

  const services = [
    {
      icon: <Bot size={35} />,
      title: 'AI & Machine Learning',
      desc: 'Custom AI models, natural language processing, and computer vision solutions built to automate and optimize your business processes.',
      features: ['Predictive Modeling', 'NLP Solutions', 'Automation Workflows']
    },
    {
      icon: <Laptop size={35} />,
      title: 'Custom Web Dev',
      desc: 'Full-stack development of scalable, secure, and high-performance web applications using modern frameworks and standard practices.',
      features: ['Single Page Applications', 'E-commerce Solutions', 'API Integrations']
    },
    {
      icon: <ShieldCheck size={35} />,
      title: 'Cyber Security',
      desc: 'Protecting your digital assets with advanced security audits, penetration testing, and robust infrastructure hardening.',
      features: ['Vulnerability Assessment', 'Security Architecture', 'Data Protection']
    },
    {
      icon: <Cpu size={35} />,
      title: 'Cloud Infrastructure',
      desc: 'Architecting scalable and resilient cloud solutions to ensure your application remains available and performant.',
      features: ['Azure/AWS/GCP', 'DevOps Automation', 'Scalability Planning']
    }
  ];

  return (
    <div className="services-page">
      <section className="page-header dark">
        <div className="container">
          <div className="reveal-mask">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              Our <span>Services</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive technology solutions for the modern era.
          </motion.p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <motion.div
            className="grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="service-card"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                  borderColor: 'var(--accent)'
                }}
              >
                <div className="icon-box">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="feature-tags">
                  {s.features.map((f, fi) => (
                    <motion.span
                      key={fi}
                      whileHover={{ scale: 1.1, background: 'var(--accent)', color: 'white' }}
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
