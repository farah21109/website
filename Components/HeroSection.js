import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Hero image */}
      <div className="hero-image-container">
        <img
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          alt="XYZ College Campus"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Shape Your Future at XYZ
          </h1>
          <p className="hero-subtitle">
            Discover a world of opportunities, innovation, and academic excellence at XYZ College.
          </p>
          <div className="hero-buttons">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#admission"
              className="btn-white"
            >
              Apply Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#explore"
              className="btn-outline-white"
            >
              Explore More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;