import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://formspree.io/f/xvgzqvjo", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get in <span>Touch</span>
          </motion.h1>
          <p>We're ready to answer your questions and help you start your journey with AI.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container grid">
          <motion.div
            className="info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Contact Information</h2>
            <p>Ready to innovate? Reach out to us through any of these channels or fill out the form.</p>

            <div className="contact-methods">
              <div className="method">
                <div className="icon"><MapPin /></div>
                <div>
                  <h3>Address</h3>
                  <p>C.B. Ganj, Bareilly, Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="method">
                <div className="icon"><Mail /></div>
                <div>
                  <h3>Email</h3>
                  <p>S2srijantech@gmail.com</p>
                </div>
              </div>
              <div className="method">
                <div className="icon"><Phone /></div>
                <div>
                  <h3>Phone</h3>
                  <p>+91 9457988148<br />+91 6396989128</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === 'success' ? (
              <motion.div
                className="success-message"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <CheckCircle2 size={60} color="var(--accent)" />
                <h2>Message Sent Successfully!</h2>
                <p>Thank you for reaching out. We will get back to you at <strong>S2srijantech@gmail.com</strong> shortly.</p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>Send Another Message</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="example@mail.com" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" placeholder="Project Inquiry" required />
                </div>
                <div className="form-group">
                  <label>Your Message</label>
                  <textarea name="message" rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
                {status === 'error' && <p className="error-text">Oops! Something went wrong. Please try again.</p>}
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
