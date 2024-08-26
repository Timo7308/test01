import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="home" smooth={true} duration={300} offset={-250} className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="about-me" smooth={true} duration={300} offset={-150} className="navbar-link" activeClass= 'active'  spy={true} >About</Link>
        </li>
        <li className="navbar-item">
          <Link to="resume" smooth={true}  duration={300} offset={-60} className="navbar-link" activeClass= 'active'  spy={true}>Experience</Link>
        </li>
        <li className="navbar-item">
          <Link to="projects" smooth={true}  duration={300} offset={-40} className="navbar-link" activeClass='active' spy={true}>Projects</Link>
        </li>
       
        <li className="navbar-item navbar-email">
          <a href="mailto:timoschuchmann1@googlemail.com" className="navbar-link">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li className="navbar-item navbar-social">
          <a href="https://www.linkedin.com/in/timo-schuchmann" className="navbar-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="navbar-item navbar-social">
          <a href="https://github.com/timo7308" className="navbar-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
