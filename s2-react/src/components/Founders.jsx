import { motion } from 'framer-motion';
import { User, Linkedin } from 'lucide-react';

const Founders = () => {
    const founders = [
        {
            name: 'Shivang Gangwar',
            role: 'Founder & Chief Technical Architect',
            linkedin: 'https://www.linkedin.com/in/shivang-gangwar-a7a87b28b',
            image: null // Placeholder or icon
        },
        {
            name: 'Srishti Yadav',
            role: 'Founder & Chief Operations Officer',
            linkedin: 'https://www.linkedin.com/in/srishti-yadav-8937b932b',
            image: null // Placeholder or icon
        }
    ];

    return (
        <section className="founders-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Meet Our <span>Founders</span></h2>
                    <p>The visionaries behind S2Srijantech's innovation.</p>
                </motion.div>

                <div className="founders-grid">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            className="founder-card"
                            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 10,
                                boxShadow: '0 25px 50px rgba(37, 99, 235, 0.2)'
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="founder-image-wrapper">
                                <div className="founder-icon">
                                    <User size={60} />
                                </div>
                            </div>
                            <h3>{founder.name}</h3>
                            <p>{founder.role}</p>
                            <div className="founder-socials">
                                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founders;
