import { Link } from 'react-router-dom';
import './nav.css';
import logo from '../Static/image/logo.svg'
const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className='logo-section'>
      <img src={logo} alt="Logo" className="nav-logo" />
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-item-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-item-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/program" className="nav-item-link">Programs</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-item-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
