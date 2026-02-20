import { motion } from 'framer-motion';
import { Microchip, Award, Headset, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Client Retention', value: '98%' },
    { label: 'AI Specialists', value: '15+' },
    { label: 'Global Markets', value: '5+' }
  ];

  return (
    <div className="why-us-page">
      <section className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Why Choose <span>S2Srijantech</span>?
          </motion.h1>
          <p>We build long-term partnerships driven by results and innovation.</p>
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <div className="content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <motion.div
              className="item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="icon"><Microchip size={28} /></div>
              <div>
                <h3>Cutting-edge Tech</h3>
                <p>We utilize the latest AI frameworks and methodologies to ensure your solutions are world-class.</p>
              </div>
            </motion.div>

            <motion.div
              className="item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="icon"><Award size={28} /></div>
              <div>
                <h3>Proven Results</h3>
                <p>Our track record with Predict_AI and other enterprise projects speaks for itself.</p>
              </div>
            </motion.div>

            <motion.div
              className="item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="icon"><Headset size={28} /></div>
              <div>
                <h3>Dedicated Support</h3>
                <p>Global support 24/7 to ensure your systems are always running at peak performance.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="stat-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h2>{s.value}</h2>
                <p>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
