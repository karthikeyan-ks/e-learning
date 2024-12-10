import './footer.css';
import { FaHome, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoIosMail, IoLogoYoutube } from 'react-icons/io';
import { CiPhone } from 'react-icons/ci';
import logo from '../Static/image/logo.svg';

const Footer = () => {
  return (
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
  );
};

export default Footer;
