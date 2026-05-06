import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostman, SiCplusplus, SiBootstrap, SiTypescript, SiTailwindcss, SiPhp, SiMysql, SiFirebase, SiGithubcopilot } from 'react-icons/si';
import { RiCursorFill } from 'react-icons/ri';
import "./css/skill.css";

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: <SiCplusplus color="#00599c" /> },
      { name: 'C++', icon: <SiCplusplus color="#00599c" /> },
      { name: 'Python', icon: <FaPython color="#3776ab" /> },
      { name: 'JavaScript', icon: <FaJs color="#f7df1e" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
      { name: 'PHP', icon: <SiPhp color="#777bb4" /> },
      { name: 'SQL', icon: <SiMysql color="#00758f" /> },
    ],
  },
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'React.js', icon: <FaReact color="#61dafb" /> },
      { name: 'HTML5', icon: <FaHtml5 color="#e44d26" /> },
      { name: 'CSS3', icon: <FaCss3Alt color="#1572b6" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" /> },
      { name: 'Bootstrap', icon: <SiBootstrap color="#563d7c" /> },
    ],
  },
  {
    title: 'Backend Technologies',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs color="#3c873a" /> },
      { name: 'Express.js', icon: <SiExpress color="#222" /> },
      { name: 'FastAPI', icon: <FaPython color="#3776ab" /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb color="#47a248" /> },
      { name: 'MySQL', icon: <SiMysql color="#00758f" /> },
    ],
  },
  {
    title: 'AI/ML & Tools',
    skills: [
      { name: 'CNN', icon: <FaPython color="#3776ab" /> },
      { name: 'Git', icon: <FaGitAlt color="#f34f29" /> },
      { name: 'GitHub', icon: <FaGithub color="#222" /> },
      { name: 'Firebase', icon: <SiFirebase color="#ffca28" /> },
      { name: 'GitHub Copilot', icon: <SiGithubcopilot color="#19c37d" /> },
      { name: 'Cursor', icon: <RiCursorFill color="#19c37d" /> },
      { name: 'Postman', icon: <SiPostman color="#ff6c37" /> },
    ],
  },
];

const Skill = () => {
  return (
    <div className="skills-agency">
      <h2 className="skills-agency-title">My <span className="highlight-green">Skills</span></h2>
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-group-list">
              {group.skills.map((skill) => (
                <div className="skill-mini-card" key={skill.name}>
                  <span className="skill-mini-icon">{skill.icon}</span>
                  <span className="skill-mini-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
