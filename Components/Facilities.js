import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const facilities = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800",
    title: "Modern Library",
    description: "Our extensive library houses over 500,000 volumes and provides digital access to millions of resources.",
    link: "#library"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800",
    title: "Advanced Laboratories",
    description: "State-of-the-art labs equipped with the latest technology for research and experimentation.",
    link: "#labs"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1475666675596-cca2035b3d79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800",
    title: "Sports Complex",
    description: "A comprehensive sports facility featuring indoor and outdoor venues for all sporting activities.",
    link: "#sports"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800",
    title: "Innovation Hub",
    description: "A collaborative space where students and faculty develop innovative solutions to real-world problems.",
    link: "#innovation"
  }
];

const Facilities = () => {
  return (
    <section className="facilities-section">
      <div className="facilities-container">
        <h2 className="facilities-title">Campus Facilities</h2>
        
        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="facility-card"
            >
              <img 
                src={facility.image} 
                alt={facility.title} 
                className="facility-image"
              />
              <div className="facility-overlay">
                <div className="facility-content">
                  <h3 className="facility-title">{facility.title}</h3>
                  <p className="facility-description">{facility.description}</p>
                  <a href={facility.link} className="facility-link">
                    Explore <ArrowRight size={16} className="icon" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;