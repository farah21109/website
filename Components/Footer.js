import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <div className="footer-logo-content">
            <a href="/" className="footer-logo">
              <GraduationCap className="footer-logo-icon" />
              <span className="footer-logo-text">XYZ College</span>
            </a>
            <p className="footer-tagline">
              Nurturing minds, inspiring futures, and cultivating excellence since 1975.
            </p>
          </div>
        </div>
        
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#admission" className="footer-link">Admissions</a></li>
              <li><a href="#academics" className="footer-link">Academics</a></li>
              <li><a href="#campus-life" className="footer-link">Campus Life</a></li>
              <li><a href="#research" className="footer-link">Research</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="#library" className="footer-link secondary-footer-link">Library</a></li>
              <li><a href="#calendar" className="footer-link secondary-footer-link">Academic Calendar</a></li>
              <li><a href="#bookstore" className="footer-link secondary-footer-link">Bookstore</a></li>
              <li><a href="#careers" className="footer-link secondary-footer-link">Career Services</a></li>
              <li><a href="#help" className="footer-link secondary-footer-link">IT Help Desk</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin className="contact-icon" size={18} />
                <span className="contact-text">123 College Ave, Evergreen, CA 90210</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" size={18} />
                <span className="contact-text">(555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" size={18} />
                <span className="contact-text">info@XYZcollege.edu</span>
              </div>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com" className="social-link" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} XYZ College. All rights reserved.
          </div>
          
          <div className="footer-bottom-links">
            <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
            <a href="#terms" className="footer-bottom-link">Terms of Service</a>
            <a href="#accessibility" className="footer-bottom-link">Accessibility</a>
            <a href="#sitemap" className="footer-bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;