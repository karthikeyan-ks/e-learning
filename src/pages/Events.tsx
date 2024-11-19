import React from 'react';
import GradientCircles from "../components/GradientCircles";
import logo from '../Static/image/logo.svg';
import './Events.css';
import logo1 from '../Static/image/workshop.png'
import Footer from "../components/footer";
import { FaHome, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoIosMail, IoLogoYoutube } from 'react-icons/io';
import { CiPhone } from 'react-icons/ci';
const Events = () => {
    const workshops = [
        { id: 1, image: 'path/to/image1.jpg', alt: 'Workshop 1' },
        { id: 2, image: 'path/to/image2.jpg', alt: 'Workshop 2' },
        { id: 3, image: 'path/to/image3.jpg', alt: 'Workshop 3' },
      ];

  return (
    <div className='program-main'>
      <GradientCircles />
    <div className='head1'>
        <h1>Workshop</h1>
    </div>
    <div className="workshops-grid">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="workshop-card">
            <button className="register-button">Register Now</button>
            <img src={logo1} alt={workshop.alt} className="workshop-image" />
          </div>
        ))}
      </div>
    <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <div className="footer-contact">
            <h3>Contact us</h3>
            <p><CiPhone /> +91 987654321</p>
            <p><IoIosMail /> teklearn1@gmail.com</p>
            <p><FaHome /></p>
          </div>
        </div>
        <div className="footer-divider"></div> {/* Divider line */}
        <div className="footer-bottom">
          <div className="footer-socials">
            <FaFacebook />
            <FaInstagram />
            <IoLogoYoutube />
          </div>
          <p className="footer-copyright">
            © Copyright 2024, All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
    
  );
};

export default Events;
