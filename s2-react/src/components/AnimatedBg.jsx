import { motion } from 'framer-motion';

const AnimatedBg = () => {
    return (
        <div className="animated-bg-container">
            <motion.div
                className="blob blob-1"
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -150, 150, 0],
                    scale: [1, 1.2, 0.8, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="blob blob-2"
                animate={{
                    x: [0, -150, 150, 0],
                    y: [0, 100, -100, 0],
                    scale: [1, 0.8, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="blob blob-3"
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, 50, -50, 0],
                    scale: [1, 1.1, 0.9, 1],
                    opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <div className="bg-overlay" />
        </div>
    );
};

export default AnimatedBg;
