import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "../components/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer-agency">
      <div className="footer-agency-main">
        <span className="footer-agency-copyright">
          &copy; {new Date().getFullYear()} Harsh Joshi. All rights reserved.
        </span>
        <div className="footer-agency-socials">
          <a href="https://github.com/harsh5096" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/harsh-joshi-467796253" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:harshjoshijh3382565@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="footer-agency-links">
        <a href="#" className="footer-link">Terms of Use</a>
        <span className="footer-link-divider">|</span>
        <a href="#" className="footer-link">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;

