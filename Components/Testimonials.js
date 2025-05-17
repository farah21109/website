import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Students Say</h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="testimonial-card"
        >
          <Quote className="quote-icon" size={64} />
          
          <div className="testimonial-content">
            <div className="testimonial-avatar">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300"
                alt="Testimonial Avatar"
              />
            </div>
            
            <div className="testimonial-text">
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="star">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                ))}
              </div>
              
              <p className="testimonial-quote">
                "Attending XYZ College has been the most transformative experience of my life. The professors are incredibly knowledgeable and supportive, and the campus community is diverse and welcoming. The resources available to students are exceptional, and I've had opportunities here that I couldn't have imagined elsewhere. I'm confident that my education at Evergreen has prepared me well for my future career."
              </p>
              
              <div className="testimonial-author">
                <div>Sarah Johnson</div>
                <div className="testimonial-position">Computer Science, Class of 2023</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;