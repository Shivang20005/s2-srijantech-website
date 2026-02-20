import { motion } from 'framer-motion';
import { Brain, Code, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Founders from '../components/Founders';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const services = [
    {
      icon: <Brain size={40} className="icon" />,
      title: 'Artificial Intelligence',
      desc: 'Developing intelligent systems that learn, adapt, and drive efficiency for your business.'
    },
    {
      icon: <Code size={40} className="icon" />,
      title: 'Web Development',
      desc: 'Creating responsive, high-performance websites and web applications tailored to your needs.'
    },
    {
      icon: <BarChart3 size={40} className="icon" />,
      title: 'Data Analytics',
      desc: 'Unlocking actionable insights from your data to power informed decision-making.'
    }
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="reveal-mask">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
              >
                Empowering Industries with <span>Elite Software Solutions</span>
              </motion.h1>
            </div>
            <p>S2Srijantech is a premier technology hub delivering high-performance websites, custom enterprise software, and cutting-edge AI integrations. We don't just build code; we engineer growth for your business.</p>
            <div className="btn-group">
              <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>
                <Link to="/services" className="btn btn-primary">Our Expertise</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, x: -5 }} whileTap={{ scale: 0.95 }}>
                <Link to="/projects" className="btn btn-secondary">Explore Solutions</Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <motion.div
            className="section-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants}>Our Key Expertise</motion.h2>
            <motion.p variants={itemVariants}>Transforming ideas into intelligent realities.</motion.p>
          </motion.div>

          <motion.div
            className="service-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
                whileHover={{
                  translateY: -15,
                  boxShadow: '0 30px 60px rgba(37, 99, 235, 0.15)',
                  borderColor: 'var(--accent)'
                }}
              >
                <div className="icon-wrapper">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="cta-content"
          >
            <div className="reveal-mask">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "circOut" }}
              >
                Ready to Build the Future?
              </motion.h2>
            </div>
            <p>Join S2Srijantech in creating smarter, AI-driven solutions for a global impact.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn btn-primary">Get Started Now</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Founders />
    </div>
  );
};

export default Home;
