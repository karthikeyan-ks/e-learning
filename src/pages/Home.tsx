import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './home.css'; // Import your custom CSS for styling
import { motion } from 'framer-motion'; // Import motion for animation
import logo from '../Static/image/image.png';
import logo1 from '../Static/image/image2.png';
import logo2 from '../Static/image/image3.png';
import logo3 from '../Static/image/image4.png';
import logo4 from '../Static/image/image copy 2.png';
import FAQSection from '../components/FAQitem';
import GradientCircles from '../components/GradientCircles'; // Gradient Circles Component
import Footer from '../components/footer';
import logo10 from '../Static/image/logo.svg';

const Home = () => {
  const [imageOrder, setImageOrder] = useState(['main', 'top', 'bottom']);
  type ProgramElement = {
    name: string;
    description: string;
    image: string;
  };

  const images = [logo, logo1, logo2];
  const [data, setData] = useState<ProgramElement[]>([]);
  const [program, setProgram] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/data/')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));

    const interval = setInterval(() => {
      setImageOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        newOrder.push(newOrder.shift()); // Rotate the order
        return newOrder;
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    data.forEach((element) => {
      const image = 'http://127.0.0.1:8000' + element.image;
      const elem = (
        <div className="rect">
          <img src={image} alt="Workshop Logo" />
          <p>{element.name}</p>
        </div>
      );
      setProgram((prev) => [...prev, elem]);
    });
  }, [data]);

  return (
    <div>
      <div className="logo-section">
        <img src={logo10} alt="Logo10" className="nav-logo" />
      </div>

      <div className="container1">
        <div className="gradient-container">
          <div className="circle"></div>
        </div>

        <div className="text1">
          <h1>
            Learn Smart <br />
            <span className="highlight">Grow Fast</span> <br />
            Achieve More
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac integer elit mi <br />
            turpis vel bibendum egestas volutpat. Curabitur magna ipsum eget
            <br />
            turpis aenean dictum
          </p>

          <button className="Connect-button">Connect Us</button>
        </div>

        <main className="spline-container">
          <Spline scene="https://prod.spline.design/lHyNMWDWdxR-omhL/scene.splinecode" />
        </main>
      </div>

      <div className="container">
        <motion.div
          className="main-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="main-image-top">
            <motion.div
              className="rectangle"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
            <div className="ball"></div>
          </div>

          <img src={images[imageOrder.indexOf('main')]} alt="Main Image" />
        </motion.div>
        <GradientCircles /> {/* Gradient Circles applied in the main section */}
        
        {/* Side Images */}
        <div className="side-images">
          <motion.div
            className="side-image top-side-image"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={images[imageOrder.indexOf('top')]} alt="Top Image" />
          </motion.div>

          <motion.div
            className="side-image bottom-side-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={images[imageOrder.indexOf('bottom')]} alt="Bottom Image" />
          </motion.div>
        </div>

        <div className="side-text">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <h2>Who Are we..?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac integer elit mi <br />
              turpis vel bibendum egestas volutpat. Curabitur magna ipsum eget
            </p>
            <h3>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                View more-&gt;
              </a>
            </h3>
          </motion.div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="program-section">
      
        <div className="program-text">
         
          <h1>Programs</h1>
        </div>

        <div className="program-container">
          {program}
        </div>

        <div className="button-container">
          <button className="view-all-button">View All</button>
        </div>

        {/* Gradient Circles in Program Section */}
        {/* Added Gradient Circles here */}
      </div>

      <div className="ai-image-section">
        <div className="image-banner">
          <img src={logo4} alt="AI Banner" />
          <div className="banner-text">
            <h1>Why are you<br></br> doubting?</h1>
            <h3>
              Let’s turn the world upside
              <br></br>down with us.
            </h3>
            <button>JOIN NOW</button>
          </div>
        </div>
      </div>

      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
