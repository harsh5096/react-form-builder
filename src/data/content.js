export const personal = {
  name: 'Harsh Joshi',
  role: 'Full Stack Developer · AI/ML',
  shortBio:
    "I'm Harsh Joshi, a Full Stack Developer at Bitquark Technologies specializing in MERN stack and AI-powered applications.",
  longBio:
    "I'm a passionate Full Stack Developer currently working at Bitquark Technologies. I completed my Master in Computer Applications (AI/ML) from Uttaranchal University with a 7.96 CGPA. My expertise lies in MERN stack development, real-time applications, and AI-powered solutions. I've solved 250+ DSA problems on LeetCode and GeeksforGeeks and love turning ideas into reality.",
  email: 'harshjoshijh3382565@gmail.com',
  phone: '+91 9548215889',
  location: 'Uttarakhand, India',
  socials: {
    github: 'https://github.com/harsh5096',
    linkedin: 'https://linkedin.com/in/harsh-joshi-467796253',
    email: 'mailto:harshjoshijh3382565@gmail.com',
  },
  resume: '/images/hjHarsh-joshi.pdf',
  avatar: '/images/formal-pick.png',
};

export const skills = [
  { group: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL'] },
  { group: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI'] },
  { group: 'Databases', items: ['MongoDB', 'MySQL', 'Firebase'] },
  { group: 'AI / Tools', items: ['CNN', 'Git', 'GitHub', 'Postman', 'GitHub Copilot', 'Cursor'] },
];

export const projects = [
  {
    title: 'Potato Disease Prediction',
    description:
      'AI-powered web app that detects potato leaf diseases using CNN. Real-time inference with FastAPI backend.',
    tech: ['Python', 'React', 'FastAPI', 'CNN'],
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Mastermind News',
    description:
      'Smart news platform with AI-powered Q&A and text-to-audio. Intelligent aggregation with conversational AI.',
    tech: ['React', 'NewsAPI', 'OpenAI'],
    accent: 'from-indigo-400 to-purple-500',
  },
  {
    title: 'React Chat App',
    description:
      'Real-time chat app with auth, live messaging, and a polished UI. Built with React and Firebase.',
    tech: ['React', 'Firebase', 'Realtime'],
    accent: 'from-pink-400 to-rose-500',
  },
  {
    title: 'IXIGO Clone',
    description:
      'Fully responsive travel booking UI replicating IXIGO with flight & hotel search experiences.',
    tech: ['React', 'HTML5', 'CSS3'],
    accent: 'from-sky-400 to-blue-500',
  },
  {
    title: 'Gmail Clone',
    description:
      'Email client clone with composition, threading and Firebase backend services.',
    tech: ['React', 'Firebase', 'MUI'],
    accent: 'from-amber-400 to-orange-500',
  },
  {
    title: 'ChatGPT Clone',
    description:
      'Conversational AI interface inspired by ChatGPT, integrated with OpenAI APIs.',
    tech: ['React', 'Firebase', 'OpenAI'],
    accent: 'from-violet-400 to-fuchsia-500',
  },
];

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Bitquark Technologies',
    period: 'Present',
    description:
      'Building production MERN applications, integrating AI features and shipping real-time experiences.',
  },
  {
    role: 'Master of Computer Applications (AI/ML)',
    company: 'Uttaranchal University',
    period: 'Graduated · 7.96 CGPA',
    description:
      'Specialized in Artificial Intelligence and Machine Learning with research-driven coursework.',
  },
  {
    role: 'DSA Practitioner',
    company: 'LeetCode · GeeksforGeeks',
    period: 'Ongoing',
    description: 'Solved 250+ data structure & algorithm problems across difficulty tiers.',
  },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];
