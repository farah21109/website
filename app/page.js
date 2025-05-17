'use client';

import { motion } from 'framer-motion';

// Import components
import Header from '@/Components/Header';
import HeroSection from '@/Components/HeroSection';
import MissionVision from '@/Components/MissionVision';
import Announcements from '@/Components/Announcements';
import Departments from '@/Components/Departments';
import Facilities from '@/Components/Facilities';
import Testimonials from '@/Components/Testimonials';
import CallToAction from '@/Components/CallToAction';
import Footer from '@/Components/Footer';


export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      
      <main>
        <Header />
        <HeroSection />
        <MissionVision />
        <Announcements />
        <Departments />
        <Facilities />
        <Testimonials />
        <CallToAction />
   
      </main>
      <Footer />
    </motion.div>
  );
}