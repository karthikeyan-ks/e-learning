import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion'; // Import motion for animation
import logo from '../Static/image/image.png';
import logo1 from '../Static/image/image2.png';
import logo2 from '../Static/image/image3.png';

const AboutUs = () => {
  return (
    <div className="container">
      {/* Rectangle above the main image */}
      <motion.div
        className="rectangle"
        initial={{ opacity: 0, y: -50 }} // Initial state: hidden and above
        animate={{ opacity: 1, y: 0 }} // Animate to visible and centered
        transition={{ duration: 1 }} // Duration of the animation
      />

      <motion.div
        className="main-image"
        initial={{ opacity: 0, scale: 0.8 }} // Initial state: hidden and smaller
        animate={{ opacity: 1, scale: 1 }} // Animate to visible and normal size
        transition={{ duration: 1.5, delay: 0.5 }} // Duration of animation with delay
      >
        <img src={logo} alt="Main Image" />
      </motion.div>

      <div className="side-images">
        <motion.div
          className="side-image top-side-image"
          initial={{ opacity: 0, x: -100 }} // Initial state: hidden and to the left
          animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
          transition={{ duration: 1, delay: 0.5 }} // Duration with delay
        >
          <img src={logo1} alt="Top Right Image" />
        </motion.div>

        <motion.div
          className="side-image bottom-side-image"
          initial={{ opacity: 0, x: 100 }} // Initial state: hidden and to the right
          animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
          transition={{ duration: 1, delay: 1 }} // Duration with delay
        >
          <img src={logo2} alt="Bottom Right Image" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
