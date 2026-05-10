import React from 'react';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';
import "../components/css/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="home-agency">
      <section className="hero-agency" id="home-section">
        <div className="hero-container">
          <div className="hero-left">
            <span className="welcome-badge">Welcome</span>
            <h1 className="hero-title">
              <span className="highlight-gradient">Full Stack</span> Developer with <span className="highlight-gradient">AI/ML</span> Expertise
            </h1>
            <p className="hero-intro">
              I'm Harsh Joshi, a passionate Full Stack Developer currently working at Morpheme Webnexus Pvt. Ltd. I specialize in MERN stack development, AI automation, and cloud deployment. Let's build something amazing together!
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToContact}>
                <FaEnvelope style={{ marginRight: '0.5em' }} /> Contact Me
              </button>
              <button className="btn-secondary" onClick={scrollToProjects}>
                View Portfolio <FaArrowRight className="arrow" />
              </button>
            </div>
          </div>
          <div className="hero-right">
            <img src="/images/formal-pick.png" alt="Harsh Joshi" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Vertical sections below */}
      <section id="about-section"><About /></section>
      <section id="skills-section"><Skill /></section>
      <section id="projects-section"><Projects /></section>
      <section id="contact-section"><Contact /></section>
    </main>
  );
};

export default Home;
