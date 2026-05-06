import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../components/css/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home-section');
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Increased navbar height to account for padding
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (path, sectionId = null) => {
    navigate(path);
    
    // If we're navigating to home and have a section ID, scroll to that section
    if (path === '/' && sectionId) {
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
    
    closeMenu();
  };

  // Function to check which section is currently in view
  const getCurrentSection = () => {
    const sections = ['home-section', 'about-section', 'skills-section', 'projects-section', 'contact-section'];
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          return sections[i];
        }
      }
    }
    return 'home-section';
  };

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        const currentSection = getCurrentSection();
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Scroll to top when route changes (except for home page sections)
  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/images/hjHarsh-joshi.pdf';
    link.download = 'Harsh_Joshi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeMenu();
  };



  return (
    <header className="navbar-agency">
      <div className="navbar-logo">
        <span className="logo-badge">H</span>
        <span className="logo-text">Harsh Joshi</span>
      </div>
      
      <div className="mobile-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/', 'home-section');
          }}
          className={activeSection === 'home-section' ? 'active' : ''}
        >
          Home
        </a>
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/', 'about-section');
          }}
          className={activeSection === 'about-section' ? 'active' : ''}
        >
          About
        </a>
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/', 'skills-section');
          }}
          className={activeSection === 'skills-section' ? 'active' : ''}
        >
          Skills
        </a>
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/', 'projects-section');
          }}
          className={activeSection === 'projects-section' ? 'active' : ''}
        >
          Projects
        </a>
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/', 'contact-section');
          }}
          className={activeSection === 'contact-section' ? 'active' : ''}
        >
          Contact
        </a>
      </nav>
      
      <button className="navbar-cv-btn" onClick={downloadResume}>Download Resume</button>
    </header>
  );
};

export default Navbar;
