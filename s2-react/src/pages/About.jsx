import { motion } from 'framer-motion';
import { Lightbulb, Handshake, Users, Target } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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

  const values = [
    { icon: <Lightbulb size={32} />, title: 'Innovation', desc: 'Constantly exploring new ideas and technologies to stay ahead of the curve.' },
    { icon: <Handshake size={32} />, title: 'Integrity', desc: 'Building trust through transparency, honesty, and ethical practices.' },
    { icon: <Users size={32} />, title: 'Collaboration', desc: 'Working closely with our clients to ensure their success is our goal.' },
    { icon: <Target size={32} />, title: 'Excellence', desc: 'Delivering high-quality solutions that exceed industry standards.' }
  ];

  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <div className="reveal-mask">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              About <span>S2Srijantech</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Pioneering the future of technology with innovation and integrity.
          </motion.p>
        </div>
      </section>

      <section className="about-intro-section">
        <div className="container">
          <div className="about-intro-wrapper">
            <motion.div
              className="about-intro-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="reveal-mask">
                <motion.h2
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                >
                  Your Global Hub for <span>Elite Software Solutions</span>
                </motion.h2>
              </div>
              <p className="tagline">“Innovating Today for a Smarter Digital Tomorrow.”</p>
              <p>S2Srijantech is more than just a tech company—we are your partners in digital transformation. From building high-performance websites to developing complex enterprise software and cutting-edge AI integrations, we deliver "Har tarah ki solutions" (every kind of solution) tailored to your business needs.</p>
              <p>Founded on the principles of excellence and innovation, our team of experts is dedicated to pushing the boundaries of what's possible in the digital world, ensuring your business stays ahead in a rapidly evolving market.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mission-vision-cards-section">
        <div className="container">
          <motion.div
            className="mission-vision-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="mv-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.1)' }}
            >
              <h3>🎯 Our Mission</h3>
              <p>To empower businesses globally by delivering state-of-the-art digital engineering and AI-driven solutions that simplify complex operational challenges and catalyze sustainable growth.</p>
            </motion.div>
            <motion.div
              className="mv-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.1)' }}
            >
              <h3>🚀 Our Vision</h3>
              <p>To be the premier global hub for technological innovation, where every digital solution we craft fosters a more efficient, connected, and intelligent future for industries worldwide.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <motion.div
            className="value-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="value-card"
                variants={itemVariants}
                whileHover={{ y: -10, color: 'var(--accent)' }}
              >
                <div className="icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
