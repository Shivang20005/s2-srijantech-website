import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ShieldCheck, Clock, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item-premium ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <span>{question}</span>
        <ChevronDown size={18} className="faq-chevron" />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const faqs = [
    { question: 'What is the typical deployment timeline?', answer: 'For standard enterprise modules, we aim for a 4-6 week sprint. High-complexity AI systems typically require 8-12 weeks from discovery to production.' },
    { question: 'Do you provide ongoing SLA support?', answer: 'Yes. We offer 24/7 mission-critical support with guaranteed response times under 120 minutes for Tier-1 issues.' },
    { question: 'Is my data used for model training?', answer: 'Never. We uphold radical data integrity. All client models and datasets are isolated and encrypted at rest.' },
    { question: 'Which tech stack do you specialize in?', answer: 'Our engineering core is built on React/Vite, Node.js, Python/PyTorch, and AWS/Azure cloud architectures.' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/s2srijantech@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (response.ok && result.success === "true") {
        setStatus('success');
        e.target.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <section className="page-header dark">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Connect with <span>Engineering</span>
          </motion.h1>
          <p>Direct access to architects. No sales fluff. Only solutions.</p>
        </div>
      </section>

      <section className="contact-main premium-section">
        <div className="container contact-grid-premium">
          <motion.div
            className="contact-info-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag">Intelligence Hub</span>
            <h2>Let's build the next decade.</h2>
            <p>Our engineering team responds to all technical inquiries within **120 minutes** during business cycles.</p>

            <div className="method-stack">
              <div className="method-glass">
                <Mail size={20} />
                <div>
                  <label>Encrypted Email</label>
                  <p>s2srijantech@gmail.com</p>
                </div>
              </div>
              <div className="method-glass">
                <Phone size={20} />
                <div>
                  <label>Direct Line</label>
                  <p>+91 9457988148</p>
                </div>
              </div>
              <div className="method-glass">
                <MapPin size={20} />
                <div>
                  <label>Global HQ</label>
                  <p>UP, India</p>
                </div>
              </div>
            </div>

            <div className="trust-metrics-contact">
              <div className="t-metric"><ShieldCheck size={16} /> Data Sovereignty</div>
              <div className="t-metric"><Clock size={16} /> Rapid Deployment</div>
              <div className="t-metric"><MessageSquare size={16} /> Direct Architect Access</div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-panel glass-premium"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === 'success' ? (
              <div className="success-state">
                <CheckCircle2 size={48} className="glow-icon" />
                <h3>Handshake Established</h3>
                <p>Our engineering team has received your logic packet. We will reach out shortly.</p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>New Transmission</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="premium-form">
                <div className="input-group-floating">
                  <input type="text" name="name" placeholder=" " required />
                  <label>Full Identity</label>
                </div>
                <div className="input-group-floating">
                  <input type="email" name="email" placeholder=" " required />
                  <label>Protocol (Email)</label>
                </div>
                <div className="input-group-floating">
                  <textarea name="message" rows="4" placeholder=" " required></textarea>
                  <label>Project Brief / Inquiry</label>
                </div>
                <button type="submit" className="btn btn-primary large shadow-glow" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Transmitting...' : 'Initiate Handshake'} <Send size={18} />
                </button>
                {status === 'error' && <p className="error-log">Transmission failed. Please retry or use direct email.</p>}
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <section className="faq-section-contact premium-section alternate-bg">
        <div className="container">
          <div className="section-header">
            <HelpCircle size={40} className="icon-glow" />
            <h2>Intelligence Briefing (FAQ)</h2>
            <p>Rapid answers to foundational engineering questions.</p>
          </div>
          <div className="faq-grid-premium">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
