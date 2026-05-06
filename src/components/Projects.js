import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import "../components/css/project.css";

const projects = [
  {
    title: "Potato Disease Prediction",
    description: "An AI-powered web application that detects potato leaf diseases using CNN (Convolutional Neural Networks). Built with Python, React.js, and FastAPI for real-time disease detection.",
    tech: ["Python", "React.js", "FastAPI", "CNN"]
  },
  {
    title: "Mastermind News Website",
    description: "A smart news platform with AI-powered QA and text-to-audio functionality. Features intelligent news aggregation and interactive AI capabilities.",
    tech: ["React.js", "NewsAPI", "OpenAI API"]
  },
  {
    title: "React Chat App",
    description: "A feature-rich real-time chat application with user authentication, live messaging, and modern UI. Built with React.js and Firebase for seamless real-time communication.",
    tech: ["React.js", "Firebase", "Real-time"]
  },
  {
    title: "IXIGO Clone",
    description: "A fully responsive travel booking user interface that replicates IXIGO's functionality. Features flight and hotel search with modern design.",
    tech: ["React.js", "HTML5", "CSS3"]
  },
  {
    title: "Gmail Clone",
    description: "A Gmail clone with basic email functionality, built using React and Firebase for backend services. Features email composition and management.",
    tech: ["React.js", "Firebase", "Material-UI"]
  },
  {
    title: "ChatGPT Clone",
    description: "An AI chat interface similar to ChatGPT, built with React and Firebase integration. Features conversational AI capabilities.",
    tech: ["React.js", "Firebase", "OpenAI API"]
  }
];

const Projects = () => {
  return (
    <div className="projects-agency">
      <h2 className="projects-agency-title">My <span className="highlight-green">Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;