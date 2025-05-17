import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-background">
        <div className="cta-circle-1"></div>
        <div className="cta-circle-2"></div>
        <div className="cta-circle-3"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="cta-container"
      >
        <h2 className="cta-title">Ready to Join Our Community?</h2>
        <p className="cta-description">
          Take the first step towards a transformative educational experience. Apply now to XYZ College and become part of our diverse, innovative community of learners and leaders.
        </p>
        
        <div className="cta-buttons">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#admission"
            className="cta-btn-primary"
          >
            Apply Today
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#tour"
            className="cta-btn-outline"
          >
            Schedule a Tour
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;