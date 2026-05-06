import React from 'react';
import "../components/css/about.css";

const About = () => {
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
        <p className="about-agency-intro">
          Hi! I'm <span className="highlight-green">Harsh Joshi</span>, a passionate <b>Full Stack Developer</b> currently working at <b>Bitquark Technologies</b>.<br/><br/>
          I Completed my <b>Master in Computer Applications (AI/ML)</b> from Uttaranchal University with a strong 7.96 CGPA. My expertise lies in MERN stack development, building real-time applications, and creating AI-powered solutions.<br/><br/>
          With experience in both frontend and backend development, I love tackling complex problems and turning ideas into reality. I've solved 250+ DSA problems on LeetCode and GeeksforGeeks, and I'm always eager to learn new technologies.
        </p>
        <button className="about-agency-cv-btn" onClick={downloadResume}>
          <i className="fa fa-download"></i> Download Resume
        </button>
      </div>
    </div>
  );
};

export default About;
