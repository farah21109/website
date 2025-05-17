'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bell, Award, Calendar, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const announcements = [
  {
    id: 1,
    icon: <Bell size={24} />,
    title: "Fall 2023 Admissions Now Open",
    description: "Applications for Fall 2023 semester are now being accepted. Apply before March 31 for early decision benefits.",
    date: "January 15, 2023",
    color: "primary",
    link: "#admissions"
  },
  {
    id: 2,
    icon: <Award size={24} />,
    title: "XYZ Wins Research Excellence Award",
    description: "Our college has been recognized for outstanding contributions to environmental science research.",
    date: "February 5, 2023",
    color: "secondary",
    link: "#news"
  },
  {
    id: 3,
    icon: <Calendar size={24} />,
    title: "Annual Sports Festival Next Month",
    description: "The 35th Annual XYZ Sports Festival will begin on April 15. Register your teams now!",
    date: "March 1, 2023",
    color: "accent",
    link: "#events"
  }
];

const Announcements = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const next = () => {
    setCurrent((current + 1) % announcements.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + announcements.length) % announcements.length);
  };
  
  const goToAnnouncement = (index) => {
    setCurrent(index);
    setAutoplay(false);
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => setAutoplay(true), 5000);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);
  
  return (
    <section className="announcements-section">
      <div className="announcements-container">
        <h2 className="announcements-title">Latest Announcements</h2>
        
        <div className="carousel-container">
          <div className="carousel">
            <motion.div 
              className="carousel-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {announcements.map((announcement) => (
                <div key={announcement.id} className={`announcement-card announcement-card-${announcement.color}`}>
                  <div className="announcement-content">
                    <div className={`announcement-icon-container announcement-icon-${announcement.color}`}>
                      {announcement.icon}
                    </div>
                    <div className="announcement-text">
                      <h3 className="announcement-title">{announcement.title}</h3>
                      <p className="announcement-description">{announcement.description}</p>
                      <div className="announcement-footer">
                        <span className="announcement-date">{announcement.date}</span>
                        <a href={announcement.link} className={`announcement-link announcement-link-${announcement.color}`}>
                          <span>Read more</span>
                          <MoreHorizontal size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="carousel-controls">
            <button 
              className="carousel-btn" 
              onClick={prev} 
              aria-label="Previous announcement"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="carousel-dots">
              {announcements.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${current === index ? 'active' : ''}`}
                  onClick={() => goToAnnouncement(index)}
                  aria-label={`Go to announcement ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              className="carousel-btn" 
              onClick={next}
              aria-label="Next announcement"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;