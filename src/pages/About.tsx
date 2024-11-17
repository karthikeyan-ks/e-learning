import React from 'react';
import './AboutUs.css'; // Ensure you create this CSS file
import logo from '../Static/image/image copy 3.png';
import logo1 from '../Static/image/image copy 4.png'
import GradientCircles from '../components/GradientCircles';

const About = () => {
  return (
    
    <div className="app-container">
      <GradientCircles />
      {/* Main Heading */}
      <section className="main-heading">
        <h1>We specialize in creating better<br></br>
        world for a better tomorrow</h1>
      </section>

      {/* Image Grid */}
      <div className="image-grid">
        
        <img src={logo1} alt="Image 1" />
      </div>

      {/* Paragraphs and Second Image Row */}
      <section className="text-section">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at sit ad odio condimentum dui quis donec. Et a eu pulvinar ut nullam sed ipsum aliquet. Ipsum quis et arcu enim viverra diam.</p>
        <div className="image-row">
          <div className="image-item">
            <img src={logo} alt="Image 6" />
          </div>
          
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non at sit lacinia hac. Vivamus morbi arcu gravida egestas volutpat.</p>
      </section>
    </div>
  );
};

export default About;
