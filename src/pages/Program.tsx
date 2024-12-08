import React from 'react';
import './program.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Static/image/logo.svg';
import { FaHome, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoIosMail, IoLogoYoutube } from 'react-icons/io';
import { CiPhone } from 'react-icons/ci';
import GradientCircles from '../components/GradientCircles';
import logo2 from '../Static/image/image copy 5.png'
const Programs = () => {
    const navigate = useNavigate();
    type ProgramElement = {
      name: string;
      description: string;
      image: string;
    };
    const [data, setData] = useState<ProgramElement[]>([]);
  const [program, setProgram] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/data/')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));

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
    <div className='program-main'>
      <GradientCircles />
    <div className='Pro-main'>
        <div className='logo-section'>
      <img src={logo} alt="Logo10" className="nav-logo" />
        </div>
  <div>
    <h1 className='text3'>Unlock your potential<br></br>
    with our Programs</h1>
  </div>
        <div className="rectangle1">
  <div className="image-section">
    <img src={logo2} alt="Example" className="rectangle-image" />
  </div>
  <div className='blackbox'>
  <div className="title-section">
    <h2>Your Title Here</h2>
  </div>
  <div className="description-section">
    <p>Your description text goes here. It can be a few sentences describing the content or purpose of this section.</p>
  </div>
  <button className="arrow-button" onClick={() => navigate('/events')}>
    →
  </button>
  </div>
</div>


    </div>
 
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Replace with the actual logo image or SVG */}
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

export default Programs ;
