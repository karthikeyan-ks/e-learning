import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './home.css'; // Import your custom CSS for styling
import { motion } from 'framer-motion'; // Import motion for animation
import logo from '../Static/image/image.png';
import logo1 from '../Static/image/image2.png';
import logo2 from '../Static/image/image3.png';

const Home = () => {
  // State to manage the order of the images
  const [imageOrder, setImageOrder] = useState(['main', 'top', 'bottom']);

  // Array of images to cycle
  const images = [logo, logo1, logo2];

  // Set an interval to update the image order every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageOrder((prevOrder) => {
        // Shift the images by rotating the positions
        const newOrder = [...prevOrder];
        newOrder.push(newOrder.shift()); // Move the first element to the end
        return newOrder;
      });
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div>
      {/* Applying motion to container1 */}
      <motion.div
        className="container1"
        initial={{ opacity: 0, y: -500 }} // Initial state: hidden and above
        animate={{ opacity: 1, y: 0 }} // Animate to visible and centered
        transition={{ duration: 3 }} // Duration of the animation
      >
        <div className="text1">
          <h1>
            Learn Smart <br />
            <span className="highlight">Grow Fast</span> <br />
            Achieve More
          </h1>

          <p>Lorem ipsum dolor sit amet consectetur. Ac integer elit mi <br />turpis vel bibendum egestas volutpat.
            Curabitur magna ipsum eget
            <br />turpis aenean dictum</p>

          <button className="Connect-button">Connect Us</button>
        </div>

        <main className="spline-container">
          <Spline
            scene="https://prod.spline.design/lHyNMWDWdxR-omhL/scene.splinecode"
          />
        </main>
      </motion.div>

      {/* New Section Below the First */}
      <div className="container">
        {/* Rectangle above the main image */}
        <motion.div
          className="rectangle"
          initial={{ opacity: 0, y: -50 }} // Initial state: hidden and above
          animate={{ opacity: 1, y: 0 }} // Animate to visible and centered
          transition={{ duration: 1 }} // Duration of the animation
        />

        {/* Main Image */}
        <motion.div
          className="main-image"
          initial={{ opacity: 0, scale: 0.8 }} // Initial state: hidden and smaller
          animate={{ opacity: 1, scale: 1 }} // Animate to visible and normal size
          transition={{ duration: 1.5, delay: 0.5 }} // Duration of animation with delay
        >
          <img src={images[imageOrder.indexOf('main')]} alt="Main Image" />
        </motion.div>

        <div className="side-images">
          {/* Top Image */}
          <motion.div
            className="side-image top-side-image"
            initial={{ opacity: 0, x: -100 }} // Initial state: hidden and to the left
            animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
            transition={{ duration: 1, delay: 0.5 }} // Duration with delay
          >
            <img src={images[imageOrder.indexOf('top')]} alt="Top Image" />
          </motion.div>

          {/* Bottom Image */}
          <motion.div
            className="side-image bottom-side-image"
            initial={{ opacity: 0, x: 100 }} // Initial state: hidden and to the right
            animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
            transition={{ duration: 1, delay: 1 }} // Duration with delay
          >
            <img src={images[imageOrder.indexOf('bottom')]} alt="Bottom Image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
