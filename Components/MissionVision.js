'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Eye, Info } from 'lucide-react';
import About from './About';

const MissionVision = () => {
  const [showAbout, setShowAbout] = useState(false);

  const openAbout = () => setShowAbout(true);
  const closeAbout = () => setShowAbout(false);

  return (
    <section id="about" className="mission-vision-section">
      <div className="mission-vision-container">
        <h2 className="mission-vision-title">Our Mission & Vision</h2>
        
        <div className="mission-vision-grid">
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mission-card"
          >
            <div className="card-header">
              <div className="icon-container-primary">
                <Lightbulb className="icon-primary" />
              </div>
              <h3 className="card-title">Our Mission</h3>
            </div>
            <div className="card-content">
              <p>
                At XYZ College, our mission is to provide a transformative educational experience 
                that empowers students with knowledge, skills, and values to excel in a rapidly changing world. 
                We are committed to fostering critical thinking, creativity, and ethical leadership through 
                innovative teaching, research, and community engagement.
              </p>
            </div>
          </motion.div>
          
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="vision-card"
          >
            <div className="card-header">
              <div className="icon-container-secondary">
                <Eye className="icon-secondary" />
              </div>
              <h3 className="card-title">Our Vision</h3>
            </div>
            <div className="card-content">
              <p>
                XYZ College envisions being a premier institution recognized globally for academic excellence, 
                innovative research, and societal impact. We aspire to graduate purpose-driven leaders who contribute 
                meaningfully to their communities and address the world's most pressing challenges through 
                compassion, collaboration, and sustainable solutions.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Know More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="know-more-container"
        >
          <button onClick={openAbout} className="btn-know-more">
            <Info size={18} className="know-more-icon" />
            <span>Know More About Us</span>
          </button>
        </motion.div>
        
        {/* Show About component when showAbout is true */}
        {showAbout && <About onClose={closeAbout} />}
      </div>
    </section>
  );
};

export default MissionVision;