import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FlaskConical, 
  Code, 
  Building, 
  Briefcase, 
  HeartPulse, 
  ChevronRight 
} from 'lucide-react';

const departments = [
  {
    id: 1,
    icon: <BookOpen size={48} />,
    title: "Liberal Arts & Humanities",
    description: "Explore literature, philosophy, history, and the arts to develop critical thinking and creative expression.",
    color: "primary",
    link: "#liberal-arts"
  },
  {
    id: 2,
    icon: <FlaskConical size={48} />,
    title: "Sciences & Mathematics",
    description: "Discover the fundamental laws of nature through physics, chemistry, biology, and mathematical reasoning.",
    color: "secondary",
    link: "#sciences"
  },
  {
    id: 3,
    icon: <Code size={48} />,
    title: "Computer Science & Engineering",
    description: "Create the future through software development, artificial intelligence, and computational thinking.",
    color: "accent",
    link: "#engineering"
  },
  {
    id: 4,
    icon: <Building size={48} />,
    title: "Architecture & Design",
    description: "Shape spaces and environments through sustainable design, urban planning, and creative problem-solving.",
    color: "primary",
    link: "#architecture"
  },
  {
    id: 5,
    icon: <Briefcase size={48} />,
    title: "Business Administration",
    description: "Develop leadership skills, entrepreneurial mindset, and strategic thinking for the global marketplace.",
    color: "secondary",
    link: "#business"
  },
  {
    id: 6,
    icon: <HeartPulse size={48} />,
    title: "Health Sciences",
    description: "Prepare for careers in healthcare through rigorous scientific study and hands-on clinical experience.",
    color: "accent",
    link: "#health"
  }
];

const Departments = () => {
  return (
    <section id="departments" className="departments-section">
      <div className="departments-container">
        <h2 className="departments-title">Our Academic Departments</h2>
        
        <div className="departments-grid">
          {departments.map((department, index) => (
            <motion.div
              key={department.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="department-card"
            >
              <div className={`department-icon-container department-icon-${department.color}`}>
                <div className={`department-icon icon-${department.color}`}>
                  {department.icon}
                </div>
              </div>
              <div className="department-content">
                <h3 className="department-title">{department.title}</h3>
                <p className="department-description">{department.description}</p>
                <a href={department.link} className={`department-link department-link-${department.color}`}>
                  <span>Learn more</span>
                  <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;