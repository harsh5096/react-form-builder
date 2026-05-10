import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaDownload } from 'react-icons/fa';
import "../components/css/about.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/images/hjHarsh-joshi.pdf';
    link.download = 'Harsh_Joshi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-agency">
      <div className="about-agency-img">
        <img src="/images/about.png" alt="Harsh Joshi" />
      </div>
      <div className="about-agency-content">
        <h2 className="about-agency-title">
          About <span className="highlight-green">Me</span>
        </h2>
        <div className={`about-agency-intro ${isExpanded ? 'expanded' : 'collapsed'}`}>
          <p>
            I’m a passionate <b>Full Stack Developer</b> with hands-on experience building scalable web applications, AI-powered solutions, and automation systems. Currently working at <b>Morpheme Webnexus Pvt. Ltd.</b>, I specialize in MERN stack development, backend optimization, WhatsApp automation, and cloud deployment using AWS.
          </p>
          
          <div className="extra-content">
            <p>
              With a strong foundation in <b>Data Structures & Algorithms (250+ problems solved)</b> and an <b>MCA in AI/ML</b>, I enjoy combining software engineering with modern AI technologies like RAG, LangChain, Vector Databases, and Generative AI. I’ve worked on impactful projects ranging from real-time disease prediction systems using CNNs to AI-powered news platforms and enterprise POS/social media management systems.
            </p>
            <p>
              I focus on building fast, reliable, and user-friendly products while continuously learning new technologies to solve real-world problems efficiently.
            </p>
          </div>
        </div>

        <div className="about-actions">
          <button 
            className="read-more-btn" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>Show Less <FaChevronUp /></>
            ) : (
              <>Read More <FaChevronDown /></>
            )}
          </button>

          <button className="about-agency-cv-btn" onClick={downloadResume}>
            <FaDownload /> Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
