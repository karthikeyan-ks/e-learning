import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './home.css'; // Import your custom CSS for styling
import { motion } from 'framer-motion'; // Import motion for animation
import logo from '../Static/image/image.png';
import logo1 from '../Static/image/image2.png';
import logo2 from '../Static/image/image3.png';
import logo3 from '../Static/image/image4.png'
import logo4 from '../Static/image/image copy 2.png'
import FAQSection from '../components/FAQitem';

const Home = () => {
  // State to manage the order of the images
  const [imageOrder, setImageOrder] = useState(['main', 'top', 'bottom']);

  // Array of images to cycle
  const images = [logo, logo1, logo2];
  const [data, setData] = useState(null);

  // Set an interval to update the image order every 3 seconds
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/data/') // Ensure the Django server is running
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error fetching data:', error));
    const interval = setInterval(() => {
      setImageOrder((prevOrder) => {
        // Shift the images by rotating the positions
        const newOrder = [...prevOrder];
        newOrder.push(newOrder.shift()); // Move the first element to the end
        return newOrder;
      });
    }, 3000); // Update every 3 seconds


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
        <div className='gradient-container'>
          <div className="circle">

          </div>
        </div>

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


        {/* Main Image */}
        <motion.div
          className="main-image"
          initial={{ opacity: 0, scale: 0.8 }} // Initial state: hidden and smaller
          animate={{ opacity: 1, scale: 1 }} // Animate to visible and normal size
          transition={{ duration: 1.5, delay: 0.5 }} // Duration of animation with delay
        >
          <div className='main-image-top'>
            <motion.div
              className="rectangle"
              initial={{ opacity: 0, y: -50 }} // Initial state: hidden and above
              animate={{ opacity: 1, y: 0 }} // Animate to visible and centered
              transition={{ duration: 1 }} // Duration of the animation
            />
            <div className='ball'>

            </div>
          </div>

          <img src={images[imageOrder.indexOf('main')]} alt="Main Image" />
        </motion.div>

        {/* Side Images */}
        <div className="side-images">
          <div className='main-image-top'>
            <motion.div
              className="rectangle"
              initial={{ opacity: 0, y: -50 }} // Initial state: hidden and above
              animate={{ opacity: 1, y: 0 }} // Animate to visible and centered
              transition={{ duration: 1 }} // Duration of the animation
            />
            <div className='ball'>
            </div>
            <motion.div
              className="rectangle"
              initial={{ opacity: 0, y: -50 }} // Initial state: hidden and above
              animate={{ opacity: 1, y: 0 }} // Animate to visible and centered
              transition={{ duration: 1 }} // Duration of the animation
            />
          </div>
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

        {/* Side Text */}
        <div className="side-text">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }} // Initial state: hidden and to the left
            animate={{ opacity: 1, x: 0 }} // Animate to visible and centered
            transition={{ duration: 1, delay: 1.2 }} // Delay before animation starts
          >
            <h2>Who Are we..?</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Ac integer elit mi <br />turpis vel bibendum egestas volutpat.
            Curabitur magna ipsum eget</p>
            <h3><a style={{ textDecoration: 'none', color: 'inherit' }}>View more-&gt;</a></h3>

          </motion.div>
        </div>
      </div>
      <div className='program section'>
        <div className='program-text'>
          <h1>Our Program</h1>
        </div>
        <div className='rect'>
          <img src={logo3}></img>
          <p>Workshop</p>
        </div>
        <div className='but'>
          <button className='programbu'>view all</button>
        </div>
      </div>
      <div className="ai-image-section">
        {/* New text container above the banner */}


        <div className="image-banner">
          <img src={logo4} alt="AI Banner" />
          {/* Text inside the banner */}
          <div className="banner-text">
            <h1>Why are you<br></br> doubting?</h1>
            <h3>Let’s turn the world upside
              <br></br>down with us.</h3>
            <button>JOIN NOW</button>
          </div>
        </div>

      </div>
      <FAQSection />
    </div>
  );
};

export default Home;
