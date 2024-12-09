import { useState, useEffect } from 'react';
import './program.css';
import { useNavigate } from 'react-router-dom';
import logo from '../Static/image/logo.svg';
import { FaHome, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoIosMail, IoLogoYoutube } from 'react-icons/io';
import { CiPhone } from 'react-icons/ci';
import GradientCircles from '../components/GradientCircles';
import Form from '../components/form';
const Programs = () => {
  const navigate = useNavigate();
  type ProgramElement = {
    name: string;
    description: string;
    image: string;
    program: string;
  };

  const [data, setData] = useState<ProgramElement[]>([]);
  const [program, setProgram] = useState<JSX.Element[]>([]);
  const [program1, setProgram1] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/data/')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    console.log(data);

    data.forEach((element) => {
      const image = 'http://127.0.0.1:8000' + element.image;
      const elem = (
        <div className="rectangle1">
          <div className="image-section">
            <img src={image} alt="Example" className="rectangle-image" />
          </div>
          <div className='blackbox'>
            <div className="title-section">
              <h2>{element.name}</h2>
            </div>
            <div className="description-section">
              <p>{element.description}.</p>
            </div>
            <button className="arrow-button" onClick={() => navigate('/events')}>
              →
            </button>
          </div>
        </div>
      );
      if (element.program == "Workshop")
        setProgram((prev) => [...prev, elem]);
      else
      setProgram1((prev) => [...prev, elem]);
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
        <h1>Workshops</h1>
        <div className='program-container'>
          
        {program}
        </div>
        <h1>Internships</h1>
        <div className='program-container'>
        
        {program1}
        </div>
        <h1>Campus Recrutment</h1>
        <br></br>
        <div className='program-container'>
        <Form/>
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

      
    </div>
  );
};

export default Programs;
