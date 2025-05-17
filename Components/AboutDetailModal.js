'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Award, Calendar, Book, Users } from 'lucide-react';

const AboutDetailModal = ({ onClose }) => {
  const modalRef = useRef(null);
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    // Close modal on escape key press
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      
      // Re-enable scrolling
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);
  
  return (
    <div className="modal-overlay">
      <motion.div
        ref={modalRef}
        className="modal-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <div className="modal-header">
          <h2 className="modal-title">About Evergreen College</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-content">
          {/* College Overview */}
          <section className="modal-section">
            <h3 className="modal-section-title">
              <Award className="modal-section-icon" />
              <span>College Overview</span>
            </h3>
            
            <div className="college-overview">
              <div className="overview-text">
                <p>
                  Founded in 1975, XYZ College has established itself as a beacon of academic excellence and 
                  innovation. Located on a sprawling 150-acre campus with state-of-the-art facilities, we have 
                  grown from a small liberal arts college to a comprehensive institution offering over 80 degree programs.
                </p>
                <p>
                  Our core values of integrity, diversity, innovation, and sustainability guide everything we do. 
                  Over the years, we have been recognized for our pioneering research in environmental sciences, 
                  our award-winning arts programs, and our commitment to community engagement.
                </p>
                <p>
                  Key achievements include being ranked among the top 50 colleges nationwide for sustainability 
                  initiatives, receiving the National Excellence in Education Award in 2022, and maintaining a 
                  remarkable 94% graduate employment rate.
                </p>
              </div>
              
              <div className="overview-gallery">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Evergreen College Campus"
                  className="gallery-image"
                />
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Graduation Ceremony"
                  className="gallery-image"
                />
                <img 
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Research Laboratory"
                  className="gallery-image"
                />
              </div>
            </div>
          </section>
          
          {/* Founders */}
          <section className="modal-section">
            <h3 className="modal-section-title">
              <Users className="modal-section-icon" />
              <span>Our Founders</span>
            </h3>
            
            <div className="founders-grid">
              <div className="founder-card">
                <div className="founder-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1559548331-f9cb98001426?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Dr. Thomas Wilson"
                    className="founder-image"
                  />
                </div>
                <h4 className="founder-name">Dr. Thomas Wilson</h4>
                <p className="founder-title">Founding President (1975-1992)</p>
                <p className="founder-bio">
                  A visionary educator with a Ph.D. from Harvard, Dr. Wilson established Evergreen College with a 
                  mission to create an institution that would combine academic rigor with innovative teaching methods. 
                  His pioneering work in educational philosophy shaped the college's distinctive approach to 
                  interdisciplinary learning.
                </p>
              </div>
              
              <div className="founder-card">
                <div className="founder-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Dr. Eleanor Chen"
                    className="founder-image"
                  />
                </div>
                <h4 className="founder-name">Dr. Eleanor Chen</h4>
                <p className="founder-title">Co-Founder & First Dean of Sciences</p>
                <p className="founder-bio">
                  A brilliant physicist and dedicated educator, Dr. Chen left her position at MIT to help establish 
                  Evergreen College. Her commitment to research excellence and hands-on learning experiences became 
                  central to our science programs. Her work secured the college's first major research grants.
                </p>
              </div>
              
              <div className="founder-card">
                <div className="founder-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Professor James Martinez"
                    className="founder-image"
                  />
                </div>
                <h4 className="founder-name">Professor James Martinez</h4>
                <p className="founder-title">Co-Founder & First Dean of Humanities</p>
                <p className="founder-bio">
                  A renowned author and scholar, Professor Martinez established Evergreen's humanities department 
                  with a focus on critical thinking and cultural understanding. His innovative curriculum integrating 
                  literature, philosophy, and history has become a model for liberal arts education nationwide.
                </p>
              </div>
            </div>
          </section>
          
          {/* Principal's Message */}
          <section className="modal-section">
            <h3 className="modal-section-title">
              <Book className="modal-section-icon" />
              <span>Message from the Principal</span>
            </h3>
            
            <div className="principal-section">
              <div className="principal-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80" 
                  alt="Dr. Sarah Johnson"
                  className="principal-image"
                />
              </div>
              
              <div className="principal-message">
                <h4 className="principal-name">Dr. Sarah Johnson</h4>
                <p className="principal-title">Principal & Chief Academic Officer</p>
                <div className="message-content">
                  <p>
                    "Welcome to XYZ College, where excellence meets opportunity. For nearly five decades, 
                    we have been committed to providing a transformative educational experience that prepares 
                    students not just for careers, but for meaningful lives as engaged citizens.
                  </p>
                  <p>
                    Our dedicated faculty, cutting-edge facilities, and supportive community create an environment 
                    where curiosity thrives and innovation flourishes. We believe in education that extends beyond 
                    classroom walls – one that embraces hands-on learning, global perspectives, and service to others.
                  </p>
                  <p>
                    As we face increasingly complex global challenges, XYZ remains committed to cultivating 
                    leaders who approach problems with creativity, empathy, and ethical reasoning. Our graduates 
                    go on to make significant contributions in their fields and communities.
                  </p>
                  <p>
                    I invite you to explore all that XYZ has to offer and to join us in our pursuit of 
                    knowledge, understanding, and positive change."
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Timeline */}
          <section className="modal-section">
            <h3 className="modal-section-title">
              <Calendar className="modal-section-icon" />
              <span>College Timeline</span>
            </h3>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4 className="timeline-year">1975</h4>
                  <p>XYZ College founded with just 250 students and 15 faculty members</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4 className="timeline-year">1985</h4>
                  <p>Establishment of the Research Center for Environmental Studies</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4 className="timeline-year">1995</h4>
                  <p>Expansion to include School of Business and Technology</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4 className="timeline-year">2005</h4>
                  <p>Opening of the state-of-the-art Performing Arts Center</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4 className="timeline-year">2015</h4>
                  <p>Launch of the Global Studies Program with partner universities in 12 countries</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4 className="timeline-year">2023</h4>
                  <p>Recognized as one of the Top 50 Colleges for Sustainability and Innovation</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div className="modal-footer">
          <button className="modal-close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutDetailModal;